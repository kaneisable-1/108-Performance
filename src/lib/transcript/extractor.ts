import { Innertube } from 'youtubei.js';
import type { TranscriptResult, TranscriptSegment } from './types';

// Reusable Innertube instance
let innertubeInstance: Innertube | null = null;

async function getInnertube(): Promise<Innertube> {
  if (!innertubeInstance) {
    innertubeInstance = await Innertube.create({
      generate_session_locally: true,
    });
  }
  return innertubeInstance;
}

/**
 * Extract video ID from various YouTube URL formats
 */
export function extractVideoId(input: string): string | null {
  // Already a video ID (11 characters)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }

  return null;
}

/**
 * Extract playlist ID from YouTube URL
 */
export function extractPlaylistId(input: string): string | null {
  // Already a playlist ID
  if (/^PL[a-zA-Z0-9_-]+$/.test(input)) {
    return input;
  }

  const match = input.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

interface CaptionEvent {
  tStartMs?: number;
  dDurationMs?: number;
  segs?: Array<{ utf8?: string }>;
}

/**
 * Fetch transcript for a single video
 */
export async function fetchTranscript(videoId: string): Promise<TranscriptResult> {
  const youtube = await getInnertube();
  const info = await youtube.getInfo(videoId);

  const title = info.basic_info.title || '';
  const captionTracks = info.captions?.caption_tracks;

  if (!captionTracks || captionTracks.length === 0) {
    throw new Error('No captions available for this video');
  }

  // Prefer English captions, fall back to first available
  const track =
    captionTracks.find((t) => t.language_code === 'en') || captionTracks[0];

  if (!track.base_url) {
    throw new Error('Caption track has no URL');
  }

  // Fetch captions in JSON3 format
  const captionUrl = track.base_url + '&fmt=json3';
  const response = await fetch(captionUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch captions: ${response.status}`);
  }

  const data = await response.json();
  const segments: TranscriptSegment[] = [];

  if (data.events) {
    for (const event of data.events as CaptionEvent[]) {
      if (event.segs) {
        const text = event.segs.map((s) => s.utf8 || '').join('');
        if (text.trim()) {
          segments.push({
            text: text.trim(),
            offset: event.tStartMs || 0,
            duration: event.dDurationMs || 0,
          });
        }
      }
    }
  }

  const fullText = segments.map((s) => s.text).join(' ');

  return {
    videoId,
    title,
    transcript: segments,
    fullText,
    language: track.language_code || 'en',
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Fetch transcripts for multiple videos
 */
export async function fetchMultipleTranscripts(
  videoIds: string[]
): Promise<{ results: TranscriptResult[]; errors: { videoId: string; error: string }[] }> {
  const results: TranscriptResult[] = [];
  const errors: { videoId: string; error: string }[] = [];

  for (const videoId of videoIds) {
    try {
      const transcript = await fetchTranscript(videoId);
      results.push(transcript);
    } catch (err) {
      errors.push({
        videoId,
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  }

  return { results, errors };
}

/**
 * Format transcript for display with timestamps
 */
export function formatTranscriptWithTimestamps(transcript: TranscriptSegment[]): string {
  return transcript
    .map((segment) => {
      const totalSeconds = Math.floor(segment.offset / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const timestamp = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      return `[${timestamp}] ${segment.text}`;
    })
    .join('\n');
}
