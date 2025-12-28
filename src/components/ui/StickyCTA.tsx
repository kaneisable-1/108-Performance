'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 100vh)
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto"
        >
          {/* Mobile: Full-width bar */}
          <div className="md:hidden bg-black border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
            <span className="text-white text-sm font-medium">
              Book Your 108 Experience
            </span>
            <Link
              href="/programs/experience"
              className="bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              Book Now
            </Link>
          </div>

          {/* Desktop: Floating card */}
          <div className="hidden md:flex items-center gap-4 bg-black border border-white/20 px-6 py-4 shadow-2xl">
            <span className="text-white text-sm font-medium">
              Book Your 108 Experience
            </span>
            <Link
              href="/programs/experience"
              className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
