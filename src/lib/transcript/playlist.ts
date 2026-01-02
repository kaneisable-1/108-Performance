import { Innertube } from 'youtubei.js';
import type { PlaylistVideo, PlaylistTranscriptResult } from './types';
import { fetchTranscript, extractPlaylistId } from './extractor';

/**
 * Fetch playlist videos using youtubei.js
 */
export async function fetchPlaylistVideos(playlistUrl: string): Promise<PlaylistVideo[]> {
  const playlistId = extractPlaylistId(playlistUrl);
  if (!playlistId) {
    throw new Error('Invalid playlist URL or ID');
  }

  const youtube = await Innertube.create({
    generate_session_locally: true,
  });

  const playlist = await youtube.getPlaylist(playlistId);
  const videos: PlaylistVideo[] = [];

  if (playlist.items) {
    for (let i = 0; i < playlist.items.length; i++) {
      const item = playlist.items[i];
      if (item.type === 'PlaylistVideo') {
        const videoItem = item as { id?: string; title?: { text?: string } };
        videos.push({
          videoId: videoItem.id || '',
          title: videoItem.title?.text || `Video ${i + 1}`,
          index: i,
        });
      }
    }
  }

  return videos;
}

/**
 * Fetch transcripts for all videos in a playlist
 */
export async function fetchPlaylistTranscripts(
  playlistUrl: string,
  options?: {
    maxVideos?: number;
    onProgress?: (current: number, total: number, videoId: string) => void;
  }
): Promise<PlaylistTranscriptResult> {
  const playlistId = extractPlaylistId(playlistUrl);
  if (!playlistId) {
    throw new Error('Invalid playlist URL or ID');
  }

  const videos = await fetchPlaylistVideos(playlistUrl);
  const videosToProcess = options?.maxVideos
    ? videos.slice(0, options.maxVideos)
    : videos;

  const results: PlaylistTranscriptResult = {
    playlistId,
    videos: [],
    failedVideos: [],
    totalVideos: videos.length,
    successCount: 0,
    fetchedAt: new Date().toISOString(),
  };

  for (let i = 0; i < videosToProcess.length; i++) {
    const video = videosToProcess[i];

    if (options?.onProgress) {
      options.onProgress(i + 1, videosToProcess.length, video.videoId);
    }

    try {
      const transcript = await fetchTranscript(video.videoId);
      transcript.title = video.title;
      results.videos.push(transcript);
      results.successCount++;
    } catch (err) {
      results.failedVideos.push({
        videoId: video.videoId,
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    }

    // Small delay to avoid rate limiting
    if (i < videosToProcess.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return results;
}

// Target playlist ID for 108 Performance content
export const PLAYLIST_108_PERFORMANCE = {
  playlistId: 'PLdhcfDAWdxvVExIaBqRevfHWEuNr0g1y_',
  url: 'https://youtube.com/playlist?list=PLdhcfDAWdxvVExIaBqRevfHWEuNr0g1y_',
};
