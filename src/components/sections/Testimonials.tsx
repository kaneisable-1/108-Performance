'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';
import { FEATURED_TESTIMONIALS, Testimonial, TestimonialCategory } from '@/data/testimonials';

// ============================================
// TESTIMONIAL CARD
// ============================================

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 transition-all duration-300 hover:border-[#CCFF00]/50 hover:-translate-y-1">
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
              className="object-cover"
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
    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2A2A2A] rounded-3xl p-8 md:p-12">
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
              className="object-cover"
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
// CATEGORY FILTER
// ============================================

const CATEGORIES: { key: TestimonialCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'mlb', label: 'MLB/Pro' },
  { key: 'coach', label: 'Coaches' },
  { key: 'player', label: 'Players' },
  { key: 'book', label: 'Book' },
];

// ============================================
// TESTIMONIALS SECTION
// ============================================

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory | 'all'>('all');

  const filteredTestimonials = activeCategory === 'all'
    ? FEATURED_TESTIMONIALS
    : FEATURED_TESTIMONIALS.filter(t => t.category === activeCategory);

  const featuredTestimonial = FEATURED_TESTIMONIALS[0]; // Trevor Cahill
  const gridTestimonials = filteredTestimonials.slice(1, 7);

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
              From MLB veterans to rising stars. The work speaks for itself.
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#CCFF00] text-black'
                    : 'bg-[#1A1A1A] text-white/70 hover:text-white hover:bg-[#2A2A2A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Testimonial */}
        <AnimatedSection delay={0.2}>
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridTestimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.3 + index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
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
    </section>
  );
}
