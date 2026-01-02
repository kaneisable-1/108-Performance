#!/usr/bin/env npx tsx
/**
 * TikTok Video Downloader + Transcriber
 * Downloads videos from TikTok and transcribes using local Whisper
 *
 * Usage:
 *   # Single video
 *   npx tsx scripts/tiktok-transcribe.ts https://www.tiktok.com/@user/video/123456
 *
 *   # All videos from a profile (with limit)
 *   npx tsx scripts/tiktok-transcribe.ts https://www.tiktok.com/@softballwithmargo --limit 50
 *
 * Requires:
 *   - yt-dlp (brew install yt-dlp)
 *   - whisper (pipx install openai-whisper)
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'data', 'coach-margo');
const VIDEOS_DIR = path.join(OUTPUT_DIR, 'videos');
const TRANSCRIPTS_DIR = path.join(OUTPUT_DIR, 'transcripts');

interface VideoInfo {
  id: string;
  title: string;
  description: string;
  uploader: string;
  upload_date: string;
  duration: number;
  url: string;
}

interface TranscriptResult {
  videoId: string;
  title: string;
  description: string;
  uploader: string;
  uploadDate: string;
  duration: number;
  originalUrl: string;
  transcript: string;
  transcribedAt: string;
}

function ensureDirectories() {
  for (const dir of [OUTPUT_DIR, VIDEOS_DIR, TRANSCRIPTS_DIR]) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
}

function parseArgs(): { url: string; limit: number; skipDownloaded: boolean; model: string } {
  const args = process.argv.slice(2);
  let url = '';
  let limit = 10;
  let skipDownloaded = true;
  let model = 'base'; // Whisper model: tiny, base, small, medium, large

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--model' && args[i + 1]) {
      model = args[i + 1];
      i++;
    } else if (args[i] === '--no-skip') {
      skipDownloaded = false;
    } else if (!args[i].startsWith('--')) {
      url = args[i];
    }
  }

  return { url, limit, skipDownloaded, model };
}

async function getVideoList(profileUrl: string, limit: number): Promise<VideoInfo[]> {
  console.log(`Fetching video list from profile (limit: ${limit})...`);

  try {
    const result = execSync(
      `yt-dlp --flat-playlist --print-json --playlist-end ${limit} "${profileUrl}" 2>/dev/null`,
      { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    );

    const videos: VideoInfo[] = [];
    const lines = result.trim().split('\n').filter(Boolean);

    for (const line of lines) {
      try {
        const data = JSON.parse(line);
        videos.push({
          id: data.id || '',
          title: data.title || '',
          description: data.description || '',
          uploader: data.uploader || data.channel || '',
          upload_date: data.upload_date || '',
          duration: data.duration || 0,
          url: data.url || data.webpage_url || `https://www.tiktok.com/@${data.uploader}/video/${data.id}`,
        });
      } catch {
        // Skip malformed lines
      }
    }

    return videos;
  } catch (error) {
    console.error('Error fetching video list:', error instanceof Error ? error.message : 'Unknown');
    return [];
  }
}

async function downloadVideo(videoUrl: string, videoId: string): Promise<string | null> {
  const outputPath = path.join(VIDEOS_DIR, `${videoId}.mp4`);

  if (fs.existsSync(outputPath)) {
    console.log(`  Already downloaded`);
    return outputPath;
  }

  console.log(`  Downloading...`);

  try {
    execSync(
      `yt-dlp -f "best[ext=mp4]/best" -o "${outputPath}" "${videoUrl}" 2>/dev/null`,
      { encoding: 'utf-8', stdio: 'pipe' }
    );
    return outputPath;
  } catch (error) {
    console.error(`  Download failed`);
    return null;
  }
}

async function transcribeVideo(filepath: string, model: string): Promise<string> {
  console.log(`  Transcribing with Whisper (${model})...`);

  const outputDir = path.dirname(filepath);
  const baseName = path.basename(filepath, '.mp4');

  try {
    // Run whisper and output to the same directory
    execSync(
      `whisper "${filepath}" --model ${model} --output_format txt --output_dir "${outputDir}" 2>/dev/null`,
      { encoding: 'utf-8', timeout: 300000 } // 5 min timeout per video
    );

    // Read the transcript file
    const transcriptPath = path.join(outputDir, `${baseName}.txt`);
    if (fs.existsSync(transcriptPath)) {
      const transcript = fs.readFileSync(transcriptPath, 'utf-8').trim();
      // Clean up whisper output file
      fs.unlinkSync(transcriptPath);
      return transcript;
    }

    return '';
  } catch (error) {
    console.error(`  Transcription failed:`, error instanceof Error ? error.message : 'Unknown');
    return '';
  }
}

async function processVideo(
  video: VideoInfo,
  model: string,
  skipDownloaded: boolean
): Promise<TranscriptResult | null> {
  const transcriptPath = path.join(TRANSCRIPTS_DIR, `${video.id}.json`);

  if (skipDownloaded && fs.existsSync(transcriptPath)) {
    console.log(`  Already transcribed, skipping`);
    return null;
  }

  const videoPath = await downloadVideo(video.url, video.id);
  if (!videoPath) {
    return null;
  }

  const transcript = await transcribeVideo(videoPath, model);
  if (!transcript) {
    return null;
  }

  const result: TranscriptResult = {
    videoId: video.id,
    title: video.title,
    description: video.description,
    uploader: video.uploader,
    uploadDate: video.upload_date,
    duration: video.duration,
    originalUrl: video.url,
    transcript,
    transcribedAt: new Date().toISOString(),
  };

  fs.writeFileSync(transcriptPath, JSON.stringify(result, null, 2));

  const txtPath = path.join(TRANSCRIPTS_DIR, `${video.id}.txt`);
  fs.writeFileSync(txtPath, `# ${video.title}\n\n${video.description}\n\nURL: ${video.url}\n\n---\n\n${transcript}`);

  return result;
}

function isProfileUrl(url: string): boolean {
  return /tiktok\.com\/@[^/]+\/?$/.test(url) || /tiktok\.com\/@[^/]+\?/.test(url);
}

function isSingleVideoUrl(url: string): boolean {
  return /tiktok\.com\/@[^/]+\/video\/\d+/.test(url);
}

function checkDependencies(): boolean {
  try {
    execSync('which yt-dlp', { encoding: 'utf-8' });
  } catch {
    console.error('Error: yt-dlp not found. Install with: brew install yt-dlp');
    return false;
  }

  try {
    execSync('which whisper', { encoding: 'utf-8' });
  } catch {
    console.error('Error: whisper not found. Install with: pipx install openai-whisper');
    return false;
  }

  return true;
}

async function main() {
  const { url, limit, skipDownloaded, model } = parseArgs();

  if (!url) {
    console.log('TikTok Video Downloader + Transcriber\n');
    console.log('Usage:');
    console.log('  npx tsx scripts/tiktok-transcribe.ts <url> [options]\n');
    console.log('Options:');
    console.log('  --limit N      Maximum videos to process (default: 10)');
    console.log('  --model NAME   Whisper model: tiny, base, small, medium, large (default: base)');
    console.log('  --no-skip      Re-process already transcribed videos\n');
    console.log('Examples:');
    console.log('  # Single video');
    console.log('  npx tsx scripts/tiktok-transcribe.ts https://www.tiktok.com/@user/video/123\n');
    console.log('  # Profile (first 50 videos)');
    console.log('  npx tsx scripts/tiktok-transcribe.ts https://www.tiktok.com/@softballwithmargo --limit 50\n');
    console.log('Requirements:');
    console.log('  - yt-dlp: brew install yt-dlp');
    console.log('  - whisper: pipx install openai-whisper');
    process.exit(1);
  }

  if (!checkDependencies()) {
    process.exit(1);
  }

  ensureDirectories();

  console.log('TikTok Video Downloader + Transcriber\n');
  console.log(`URL: ${url}`);
  console.log(`Model: ${model}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  let videos: VideoInfo[] = [];

  if (isProfileUrl(url)) {
    console.log('Detected: Profile URL');
    videos = await getVideoList(url, limit);
    console.log(`Found ${videos.length} videos\n`);
  } else if (isSingleVideoUrl(url)) {
    console.log('Detected: Single video URL');
    const match = url.match(/video\/(\d+)/);
    if (match) {
      videos = [{
        id: match[1],
        title: '',
        description: '',
        uploader: '',
        upload_date: '',
        duration: 0,
        url: url,
      }];
    }
  } else {
    console.error('Error: Unrecognized TikTok URL format');
    process.exit(1);
  }

  if (videos.length === 0) {
    console.error('No videos found');
    process.exit(1);
  }

  const results: TranscriptResult[] = [];
  const errors: { videoId: string; error: string }[] = [];

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(`[${i + 1}/${videos.length}] ${video.title || video.id}`);

    try {
      const result = await processVideo(video, model, skipDownloaded);
      if (result) {
        results.push(result);
        console.log(`  Done (${result.transcript.split(/\s+/).length} words)`);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      errors.push({ videoId: video.id, error: errorMsg });
      console.error(`  Error: ${errorMsg}`);
    }
  }

  // Update master index
  const indexPath = path.join(OUTPUT_DIR, 'index.json');
  let index: { videos: TranscriptResult[]; lastUpdated: string } = {
    videos: [],
    lastUpdated: '',
  };

  if (fs.existsSync(indexPath)) {
    index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  }

  for (const result of results) {
    const existingIndex = index.videos.findIndex(v => v.videoId === result.videoId);
    if (existingIndex >= 0) {
      index.videos[existingIndex] = result;
    } else {
      index.videos.push(result);
    }
  }
  index.lastUpdated = new Date().toISOString();

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

  // Combined transcript file
  const allTranscriptsPath = path.join(OUTPUT_DIR, 'all-transcripts.txt');
  const allTranscripts = index.videos
    .map(v => `# ${v.title || v.videoId}\n\nURL: ${v.originalUrl}\n\n${v.transcript}\n\n${'='.repeat(80)}\n`)
    .join('\n');
  fs.writeFileSync(allTranscriptsPath, allTranscripts);

  console.log('\n--- Summary ---');
  console.log(`Processed: ${results.length} videos`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Total in library: ${index.videos.length}`);
  console.log(`Output: ${OUTPUT_DIR}`);

  if (errors.length > 0) {
    console.log('\nFailed:');
    errors.forEach(e => console.log(`  - ${e.videoId}: ${e.error}`));
  }
}

main().catch(console.error);
