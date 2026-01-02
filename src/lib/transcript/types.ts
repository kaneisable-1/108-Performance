export interface TranscriptSegment {
  text: string;
  offset: number;
  duration: number;
}

export interface TranscriptResult {
  videoId: string;
  title?: string;
  transcript: TranscriptSegment[];
  fullText: string;
  language: string;
  fetchedAt: string;
}

export interface PlaylistVideo {
  videoId: string;
  title: string;
  index: number;
}

export interface PlaylistTranscriptResult {
  playlistId: string;
  playlistTitle?: string;
  videos: TranscriptResult[];
  failedVideos: { videoId: string; error: string }[];
  totalVideos: number;
  successCount: number;
  fetchedAt: string;
}

export interface TranscriptError {
  videoId: string;
  error: string;
  code: 'NO_TRANSCRIPT' | 'VIDEO_NOT_FOUND' | 'NETWORK_ERROR' | 'UNKNOWN';
}
