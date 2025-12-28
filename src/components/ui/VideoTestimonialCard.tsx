'use client';

import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';

interface VideoTestimonialCardProps {
  testimonial: Testimonial;
  onPlay: (testimonial: Testimonial) => void;
}

export function VideoTestimonialCard({ testimonial, onPlay }: VideoTestimonialCardProps) {
  // Use Vimeo auto-generated thumbnail or custom thumbnail
  const thumbnailUrl = testimonial.videoThumbnail
    || testimonial.image
    || '/testimonials/placeholder.png';

  return (
    <div
      onClick={() => onPlay(testimonial)}
      className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#CCFF00]/50 card-float-dark cursor-pointer"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          alt={testimonial.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 img-108-hero"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#CCFF00] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-black/30">
            <svg
              className="w-6 h-6 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        {testimonial.videoDuration && (
          <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/90 font-medium">
            {testimonial.videoDuration}
          </div>
        )}

        {/* Video Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-white font-medium uppercase tracking-wider">
            Video
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <blockquote className="mb-4">
          <p className="text-white/90 text-base leading-relaxed line-clamp-2">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>

        <div className="flex items-center gap-3">
          {testimonial.image && (
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#CCFF00] flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover img-108-standard"
              />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{testimonial.name}</p>
            <p className="text-white/50 text-xs truncate">
              {testimonial.role}
              {testimonial.organization && ` • ${testimonial.organization}`}
            </p>
          </div>
        </div>

        {/* Watch CTA */}
        <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
          <span className="inline-flex items-center gap-2 text-[#CCFF00] text-sm font-medium group-hover:underline">
            Watch testimonial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
