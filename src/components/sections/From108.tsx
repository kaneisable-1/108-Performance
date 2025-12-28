'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/services';

// Curated content from 108 Performance - update as needed
// Images sourced from the108way.org
const SOCIAL_POSTS = [
  {
    id: 'post-1',
    image: '/social/post-1.jpg',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'Game-specific movement training at 108',
  },
  {
    id: 'post-2',
    image: '/social/post-2.jpg',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'Skill-specific strength training',
  },
  {
    id: 'post-3',
    image: '/social/post-3.jpg',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'Trevor Clifton training session',
  },
  {
    id: 'post-4',
    image: '/social/post-4.jpg',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'The 108 Experience',
  },
  {
    id: 'post-5',
    image: '/social/post-5.jpg',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'Inside the 108 facility',
  },
  {
    id: 'post-6',
    image: '/social/post-6.png',
    instagramUrl: 'https://instagram.com/108_performance',
    alt: 'The 108 method',
  },
];

export function From108() {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm text-white/50 uppercase tracking-widest mb-4">
            From 108
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            See what's happening.
          </h2>
        </motion.div>
      </div>

      {/* Scrollable Carousel - Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Scroll Container */}
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Left Spacer for alignment */}
          <div className="shrink-0 w-0 md:w-[calc((100vw-1280px)/2)]" />

          {SOCIAL_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group shrink-0 snap-start"
            >
              <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-lg overflow-hidden bg-white/5">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 200px, 280px"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
                    <span>View</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Right Spacer */}
          <div className="shrink-0 w-6 md:w-[calc((100vw-1280px)/2)]" />
        </div>

        {/* Right Edge Fade */}
        <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 mt-8"
      >
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>Follow on Instagram</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-white/20">|</span>
          <a
            href={BRAND.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>Watch on YouTube</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
