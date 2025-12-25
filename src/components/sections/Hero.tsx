'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white text-black pt-36 lg:pt-40 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Golden Ratio Grid: 61.8% content / 38.2% image */}
        <div className="grid lg:grid-cols-[61.8fr_38.2fr] gap-fib-34 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content - 61.8% */}
          <div className="py-16 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black leading-[0.95] tracking-[-0.03em] mb-fib-21"
            >
              <span className="block">Training</span>
              <span className="block">built around</span>
              <span className="block text-gray-300">you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-fib-21"
            >
              In-Person  •  Remote
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-500 italic max-w-md mb-fib-34"
            >
              "Results you have to feel to believe."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/programs/experience"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </div>

          {/* Right - Athlete Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative h-[600px]"
          >
            <Image
              src="/hero-athlete.jpg"
              alt="Athlete training at 108 Performance"
              fill
              className="object-cover grayscale"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-6 lg:left-8 flex items-center gap-4"
      >
        <div className="w-8 h-px bg-black" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
