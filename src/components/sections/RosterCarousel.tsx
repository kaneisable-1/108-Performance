'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// All featured athletes for the carousel
const athletes = [
  { id: 10, image: '/athletes/10.png' },
  { id: 30, image: '/athletes/30.png' },
  { id: 15, image: '/athletes/15.png' },
  { id: 25, image: '/athletes/25.png' },
  { id: 40, image: '/athletes/40.png' },
  { id: 50, image: '/athletes/50.png' },
  { id: 5, image: '/athletes/5.png' },
  { id: 20, image: '/athletes/20.png' },
  { id: 35, image: '/athletes/35.png' },
  { id: 45, image: '/athletes/45.png' },
  { id: 55, image: '/athletes/55.png' },
  { id: 60, image: '/athletes/60.png' },
  { id: 1, image: '/athletes/1.png' },
  { id: 2, image: '/athletes/2.png' },
  { id: 3, image: '/athletes/3.png' },
  { id: 4, image: '/athletes/4.png' },
];

export function RosterCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = 1.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start when reaching the end (seamless loop)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate athletes for seamless loop
  const duplicatedAthletes = [...athletes, ...athletes];

  return (
    <section className="bg-black py-8 lg:py-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
              The Roster
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              64+ athletes. High school to the pros.
            </h2>
          </div>
          <Link
            href="/athletes"
            className="hidden md:inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            See all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* Scrolling Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left padding spacer */}
        <div className="flex-shrink-0 w-4 md:w-8" />

        {duplicatedAthletes.map((athlete, index) => (
          <motion.div
            key={`${athlete.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative flex-shrink-0 w-[120px] md:w-[150px] lg:w-[180px] aspect-[3/4] rounded-lg overflow-hidden group"
          >
            <Image
              src={athlete.image}
              alt={`108 Athlete`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 img-108-standard"
              sizes="(max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}

        {/* Right padding spacer */}
        <div className="flex-shrink-0 w-4 md:w-8" />
      </div>

      {/* Mobile CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:hidden text-center mt-6 px-6"
      >
        <Link
          href="/athletes"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
        >
          See all 64+ athletes
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
