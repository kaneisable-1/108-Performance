#!/usr/bin/env npx tsx
/**
 * Extract transcripts from the specified YouTube playlist
 * Usage: npx tsx scripts/extract-playlist-transcripts.ts [playlist-url]
 *
 * Default playlist: PLdhcfDAWdxvVExIaBqRevfHWEuNr0g1y_
 */

import { Innertube } from 'youtubei.js';
import * as fs from 'fs';
import * as path from 'path';

const DEFAULT_PLAYLIST_URL =
  'https://youtube.com/playlist?list=PLdhcfDAWdxvVExIaBqRevfHWEuNr0g1y_';
const OUTPUT_DIR = path.join(process.cwd(), 'data', 'transcripts');

interface TranscriptSegment {
  text: string;
  offset: number;
  duration: number;
}

interface VideoTranscript {
  videoId: string;
  title: string;
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

async function fetchTranscript(
  youtube: Innertube,
  videoId: string
): Promise<VideoTranscript | null> {
  try {
    const info = await youtube.getInfo(videoId);
    const title = info.basic_info.title || '';
    const captionTracks = info.captions?.caption_tracks;

    if (!captionTracks || captionTracks.length === 0) {
      console.log(`  No captions available`);
      return null;
    }

    // Prefer English captions
    const track =
      captionTracks.find((t) => t.language_code === 'en') || captionTracks[0];

    if (!track.base_url) {
      console.log(`  No caption URL available`);
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

async function main() {
  const playlistUrl = process.argv[2] || DEFAULT_PLAYLIST_URL;
  const playlistMatch = playlistUrl.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  const playlistId = playlistMatch ? playlistMatch[1] : playlistUrl;

  console.log('YouTube Playlist Transcript Extractor\n');
  console.log(`Playlist: ${playlistId}\n`);

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Initialize YouTube client
  console.log('Initializing YouTube client...');
  const youtube = await Innertube.create({
    generate_session_locally: true,
  });

  // Fetch playlist
  console.log('Fetching playlist videos...');
  const playlist = await youtube.getPlaylist(playlistId);

  interface PlaylistVideoItem {
    type: string;
    id?: string;
    title?: { text?: string };
  }

  const videos: { videoId: string; title: string }[] = [];
  if (playlist.items) {
    for (const item of playlist.items) {
      if (item.type === 'PlaylistVideo') {
        const videoItem = item as PlaylistVideoItem;
        videos.push({
          videoId: videoItem.id || '',
          title: videoItem.title?.text || `Video ${videos.length + 1}`,
        });
      }
    }
  }

  console.log(`Found ${videos.length} videos\n`);

  if (videos.length === 0) {
    console.error('No videos found in playlist');
    process.exit(1);
  }

  const results: VideoTranscript[] = [];
  const failed: { videoId: string; title: string; error: string }[] = [];

  // Fetch transcripts
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(`[${i + 1}/${videos.length}] ${video.title}`);

    const transcript = await fetchTranscript(youtube, video.videoId);

    if (transcript) {
      results.push(transcript);
      console.log(`  Success (${transcript.transcript.length} segments)`);

      // Save individual transcript
      const filename = `${video.videoId}.json`;
      fs.writeFileSync(
        path.join(OUTPUT_DIR, filename),
        JSON.stringify(transcript, null, 2)
      );
    } else {
      failed.push({
        videoId: video.videoId,
        title: video.title,
        error: 'No transcript available',
      });
    }

    // Rate limiting delay
    if (i < videos.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  // Save combined results
  const summary = {
    playlistId,
    playlistUrl,
    fetchedAt: new Date().toISOString(),
    totalVideos: videos.length,
    successCount: results.length,
    failedCount: failed.length,
    videos: results,
    failed,
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'playlist-transcripts.json'),
    JSON.stringify(summary, null, 2)
  );

  // Save plain text version
  const plainText = results
    .map(
      (v) =>
        `# ${v.title}\nVideo ID: ${v.videoId}\nURL: https://youtube.com/watch?v=${v.videoId}\n\n${v.fullText}\n\n${'='.repeat(80)}\n`
    )
    .join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'playlist-transcripts.txt'), plainText);

  console.log('\n--- Summary ---');
  console.log(`Total videos: ${videos.length}`);
  console.log(`Successfully extracted: ${results.length}`);
  console.log(`Failed: ${failed.length}`);
  console.log(`\nOutput saved to: ${OUTPUT_DIR}`);

  if (failed.length > 0) {
    console.log('\nFailed videos:');
    failed.forEach((f) => console.log(`  - ${f.title} (${f.videoId})`));
  }
}

main().catch(console.error);
