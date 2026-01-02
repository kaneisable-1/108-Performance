import { NextRequest, NextResponse } from 'next/server';
import {
  fetchTranscript,
  extractVideoId,
  extractPlaylistId,
  formatTranscriptWithTimestamps,
} from '@/lib/transcript';
import { fetchPlaylistTranscripts, fetchPlaylistVideos } from '@/lib/transcript/playlist';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, videoId, format = 'full' } = body;

    // Handle direct video ID or URL
    const id = videoId || extractVideoId(url);
    const playlistId = extractPlaylistId(url);

    // If it's a playlist request
    if (playlistId && body.playlist) {
      const maxVideos = body.maxVideos || 50;

      try {
        const results = await fetchPlaylistTranscripts(url, { maxVideos });
        return NextResponse.json(results);
      } catch (err) {
        return NextResponse.json(
          {
            error: 'Failed to fetch playlist transcripts',
            details: err instanceof Error ? err.message : 'Unknown error',
          },
          { status: 500 }
        );
      }
    }

    // Single video transcript
    if (!id) {
      return NextResponse.json(
        { error: 'Invalid YouTube URL or video ID' },
        { status: 400 }
      );
    }

    const result = await fetchTranscript(id);

    // Format based on request
    if (format === 'timestamps') {
      return NextResponse.json({
        ...result,
        formatted: formatTranscriptWithTimestamps(result.transcript),
      });
    }

    return NextResponse.json(result);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';

    // Handle specific YouTube transcript errors
    if (errorMessage.includes('Transcript is disabled')) {
      return NextResponse.json(
        { error: 'Transcript is disabled for this video' },
        { status: 404 }
      );
    }

    if (errorMessage.includes('Video unavailable')) {
      return NextResponse.json(
        { error: 'Video is unavailable or does not exist' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch transcript', details: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const videoId = searchParams.get('v') || searchParams.get('videoId');
  const playlistId = searchParams.get('list') || searchParams.get('playlistId');
  const format = searchParams.get('format') || 'full';

  // List playlist videos
  if (playlistId && searchParams.get('list_only') === 'true') {
    try {
      const videos = await fetchPlaylistVideos(
        `https://youtube.com/playlist?list=${playlistId}`
      );
      return NextResponse.json({ playlistId, videos, count: videos.length });
    } catch (err) {
      return NextResponse.json(
        {
          error: 'Failed to fetch playlist',
          details: err instanceof Error ? err.message : 'Unknown error',
        },
        { status: 500 }
      );
    }
  }

  if (!videoId) {
    return NextResponse.json(
      {
        error: 'Missing video ID. Use ?v=VIDEO_ID or ?videoId=VIDEO_ID',
        usage: {
          single: '/api/transcript?v=VIDEO_ID',
          withTimestamps: '/api/transcript?v=VIDEO_ID&format=timestamps',
          listPlaylist: '/api/transcript?list=PLAYLIST_ID&list_only=true',
        },
      },
      { status: 400 }
    );
  }

  try {
    const result = await fetchTranscript(videoId);

    if (format === 'timestamps') {
      return NextResponse.json({
        ...result,
        formatted: formatTranscriptWithTimestamps(result.transcript),
      });
    }

    if (format === 'text') {
      return new NextResponse(result.fullText, {
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    return NextResponse.json(result);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch transcript', details: errorMessage },
      { status: 500 }
    );
  }
}
