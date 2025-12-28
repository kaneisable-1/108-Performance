'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';
import { VideoTestimonialCard } from '../ui/VideoTestimonialCard';
import { VideoModal } from '../ui/VideoModal';
import { FEATURED_TESTIMONIALS, Testimonial, TestimonialCategory } from '@/data/testimonials';

// ============================================
// TESTIMONIAL CARD
// ============================================

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 transition-all duration-300 hover:border-[#CCFF00]/50 card-float-dark">
      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-white/90 text-base leading-relaxed line-clamp-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#2A2A2A] flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover img-108-standard"
            />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-white font-semibold truncate">{testimonial.name}</p>
          <p className="text-white/50 text-sm truncate">
            {testimonial.role}
            {testimonial.organization && ` • ${testimonial.organization}`}
          </p>
        </div>
      </div>

      {/* Outcome Badge */}
      {testimonial.outcomeMetric && (
        <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
          <p className="text-[#CCFF00] text-sm font-medium">
            {testimonial.outcomeMetric}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// FEATURED TESTIMONIAL (Large)
// ============================================

function FeaturedTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] rounded-3xl p-8 md:p-12 card-float-dark">
      {/* Large Quote */}
      <blockquote className="mb-8">
        <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        {testimonial.supportingQuote && (
          <p className="mt-4 text-white/60 text-base md:text-lg">
            {testimonial.supportingQuote}
          </p>
        )}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#2A2A2A] flex-shrink-0 border-2 border-[#CCFF00]">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover img-108-standard"
            />
          </div>
        )}
        <div>
          <p className="text-white text-lg font-semibold">{testimonial.name}</p>
          <p className="text-white/50">
            {testimonial.role}
            {testimonial.organization && ` • ${testimonial.organization}`}
          </p>
          {testimonial.outcomeMetric && (
            <p className="text-[#CCFF00] text-sm font-medium mt-1">
              {testimonial.outcomeMetric}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// FEATURED VIDEO TESTIMONIAL
// ============================================

function FeaturedVideoTestimonial({
  testimonial,
  onPlay
}: {
  testimonial: Testimonial;
  onPlay: (t: Testimonial) => void;
}) {
  const thumbnailUrl = testimonial.videoThumbnail || testimonial.image || '/testimonials/placeholder.png';

  return (
    <div
      onClick={() => onPlay(testimonial)}
      className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] rounded-3xl overflow-hidden cursor-pointer group card-float-dark"
    >
      <div className="grid lg:grid-cols-[1.618fr_1fr] gap-0">
        {/* Video Thumbnail - Golden Ratio Major */}
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
          <Image
            src={thumbnailUrl}
            alt={testimonial.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 img-108-hero"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#CCFF00] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl shadow-black/30">
              <svg
                className="w-10 h-10 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Video Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-white font-medium uppercase tracking-wider">
              Video Testimonial
            </span>
          </div>

          {/* Duration */}
          {testimonial.videoDuration && (
            <div className="absolute bottom-6 right-6 bg-black/80 px-3 py-1.5 rounded text-sm text-white font-medium">
              {testimonial.videoDuration}
            </div>
          )}
        </div>

        {/* Quote Content - Golden Ratio Minor */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <blockquote className="mb-8">
            <p className="text-white text-xl md:text-2xl font-semibold leading-tight">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            {testimonial.image && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#CCFF00] flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover img-108-standard"
                />
              </div>
            )}
            <div>
              <p className="text-white text-lg font-semibold">{testimonial.name}</p>
              <p className="text-white/50">
                {testimonial.role}
                {testimonial.organization && ` • ${testimonial.organization}`}
              </p>
              {testimonial.outcomeMetric && (
                <p className="text-[#CCFF00] text-sm font-medium mt-1">
                  {testimonial.outcomeMetric}
                </p>
              )}
            </div>
          </div>

          {/* Watch CTA */}
          <div className="mt-8">
            <span className="inline-flex items-center gap-2 text-[#CCFF00] font-medium group-hover:underline">
              Watch full testimonial
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CATEGORY FILTER
// ============================================

const CATEGORIES: { key: TestimonialCategory | 'all' | 'video'; label: string; icon?: boolean }[] = [
  { key: 'all', label: 'All' },
  { key: 'video', label: 'Video', icon: true },
  { key: 'mlb', label: 'MLB/Pro' },
  { key: 'coach', label: 'Coaches' },
  { key: 'player', label: 'Players' },
  { key: 'book', label: 'Book' },
];

// ============================================
// TESTIMONIALS SECTION
// ============================================

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory | 'all' | 'video'>('all');
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle video play
  const handlePlayVideo = (testimonial: Testimonial) => {
    setSelectedVideo(testimonial);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Filter testimonials based on category
  const filteredTestimonials = activeCategory === 'all'
    ? FEATURED_TESTIMONIALS
    : activeCategory === 'video'
    ? FEATURED_TESTIMONIALS.filter(t => t.hasVideo)
    : FEATURED_TESTIMONIALS.filter(t => t.category === activeCategory);

  // Get featured testimonial (prefer video for hero)
  const featuredVideoTestimonial = FEATURED_TESTIMONIALS.find(t => t.hasVideo && t.featured);
  const featuredTextTestimonial = FEATURED_TESTIMONIALS[0];

  // Show video hero when on 'all' or 'video' filter and we have a video
  const showVideoHero = (activeCategory === 'all' || activeCategory === 'video') && featuredVideoTestimonial;

  // Grid testimonials (exclude the featured one)
  const gridTestimonials = filteredTestimonials
    .filter(t => showVideoHero ? t.id !== featuredVideoTestimonial?.id : t.id !== featuredTextTestimonial.id)
    .slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Results that speak.
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From MLB veterans to rising stars. Watch and read their stories.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#CCFF00] text-black'
                    : 'bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-[#2A2A2A]'
                }`}
              >
                {cat.icon && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Testimonial (Video or Text) */}
        <AnimatedSection delay={0.2}>
          {showVideoHero && featuredVideoTestimonial ? (
            <FeaturedVideoTestimonial
              testimonial={featuredVideoTestimonial}
              onPlay={handlePlayVideo}
            />
          ) : (
            <FeaturedTestimonial testimonial={featuredTextTestimonial} />
          )}
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridTestimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.3 + index * 0.1}>
              {testimonial.hasVideo ? (
                <VideoTestimonialCard
                  testimonial={testimonial}
                  onPlay={handlePlayVideo}
                />
              ) : (
                <TestimonialCard testimonial={testimonial} />
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* View All Link */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#CCFF00] font-medium hover:underline"
            >
              View all testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Video Modal */}
      <VideoModal
        testimonial={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
