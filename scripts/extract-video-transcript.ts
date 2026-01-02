#!/usr/bin/env npx tsx
/**
 * Extract transcript from a single YouTube video
 * Usage: npx tsx scripts/extract-video-transcript.ts <video-url> [output-folder]
 *
 * Examples:
 *   npx tsx scripts/extract-video-transcript.ts https://www.youtube.com/watch?v=abc123
 *   npx tsx scripts/extract-video-transcript.ts https://youtu.be/abc123 coach-margo
 */

import { Innertube } from 'youtubei.js';
import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_OUTPUT_FOLDER = 'coach-margo';

interface TranscriptSegment {
  text: string;
  offset: number;
  duration: number;
}

interface VideoTranscript {
  videoId: string;
  title: string;
  url: string;
  transcript: TranscriptSegment[];
  fullText: string;
  language: string;
  fetchedAt: string;
}

interface CaptionEvent {
  tStartMs?: number;
  dDurationMs?: number;
  segs?: Array<{ utf8?: string }>;
}

function extractVideoId(input: string): string | null {
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

async function fetchTranscript(
  youtube: Innertube,
  videoId: string
): Promise<VideoTranscript | null> {
  try {
    const info = await youtube.getInfo(videoId);
    const title = info.basic_info.title || '';
    const captionTracks = info.captions?.caption_tracks;

    if (!captionTracks || captionTracks.length === 0) {
      console.log('  No captions available');
      return null;
    }

    // Prefer English captions
    const track =
      captionTracks.find((t) => t.language_code === 'en') || captionTracks[0];

    if (!track.base_url) {
      console.log('  No caption URL available');
      return null;
    }

    const captionUrl = track.base_url + '&fmt=json3';
    const response = await fetch(captionUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      console.log(`  Failed to fetch captions: ${response.status}`);
      return null;
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
      url: `https://youtube.com/watch?v=${videoId}`,
      transcript: segments,
      fullText,
      language: track.language_code || 'en',
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.log(`  Error: ${err instanceof Error ? err.message : 'Unknown'}`);
    return null;
  }
}

function sanitizeFilename(title: string): string {
  return title
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .slice(0, 50);
}

async function main() {
  const videoUrl = process.argv[2];
  const outputFolder = process.argv[3] || DEFAULT_OUTPUT_FOLDER;

  if (!videoUrl) {
    console.log('YouTube Video Transcript Extractor\n');
    console.log('Usage: npx tsx scripts/extract-video-transcript.ts <video-url> [output-folder]\n');
    console.log('Examples:');
    console.log('  npx tsx scripts/extract-video-transcript.ts https://www.youtube.com/watch?v=abc123');
    console.log('  npx tsx scripts/extract-video-transcript.ts https://youtu.be/abc123 coach-margo');
    console.log('\nDefault output folder: data/coach-margo/');
    process.exit(1);
  }

  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    console.error('Error: Could not extract video ID from URL');
    console.log('Supported formats:');
    console.log('  - https://www.youtube.com/watch?v=VIDEO_ID');
    console.log('  - https://youtu.be/VIDEO_ID');
    console.log('  - https://youtube.com/shorts/VIDEO_ID');
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), 'data', outputFolder);

  console.log('YouTube Video Transcript Extractor\n');
  console.log(`Video ID: ${videoId}`);
  console.log(`Output: ${outputDir}\n`);

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Initialize YouTube client
  console.log('Initializing YouTube client...');
  const youtube = await Innertube.create({
    generate_session_locally: true,
  });

  // Fetch transcript
  console.log('Fetching transcript...');
  const transcript = await fetchTranscript(youtube, videoId);

  if (!transcript) {
    console.error('\nFailed to extract transcript');
    process.exit(1);
  }

  console.log(`\nTitle: ${transcript.title}`);
  console.log(`Language: ${transcript.language}`);
  console.log(`Segments: ${transcript.transcript.length}`);
  console.log(`Words: ~${transcript.fullText.split(/\s+/).length}`);

  // Save JSON
  const safeFilename = sanitizeFilename(transcript.title) || videoId;
  const jsonPath = path.join(outputDir, `${safeFilename}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(transcript, null, 2));
  console.log(`\nJSON saved: ${jsonPath}`);

  // Save plain text
  const txtPath = path.join(outputDir, `${safeFilename}.txt`);
  const plainText = `# ${transcript.title}
Video ID: ${videoId}
URL: ${transcript.url}
Extracted: ${transcript.fetchedAt}

${transcript.fullText}
`;
  fs.writeFileSync(txtPath, plainText);
  console.log(`Text saved: ${txtPath}`);

  // Update index file
  const indexPath = path.join(outputDir, 'index.json');
  let index: { videos: Array<{ videoId: string; title: string; filename: string; fetchedAt: string }> } = { videos: [] };

  if (fs.existsSync(indexPath)) {
    index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  }

  // Add or update entry
  const existingIndex = index.videos.findIndex((v) => v.videoId === videoId);
  const entry = {
    videoId,
    title: transcript.title,
    filename: safeFilename,
    fetchedAt: transcript.fetchedAt,
  };

  if (existingIndex >= 0) {
    index.videos[existingIndex] = entry;
  } else {
    index.videos.push(entry);
  }

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`Index updated: ${indexPath}`);

  console.log('\nDone!');
}

main().catch(console.error);
