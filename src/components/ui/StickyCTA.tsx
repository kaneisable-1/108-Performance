'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCTA } from '@/context/CTAContext';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [passedFindYourPath, setPassedFindYourPath] = useState(false);
  const { recommendedPath, hasCompletedFindYourPath } = useCTA();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 100vh)
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);

      // Check if we've scrolled past FindYourPath section
      const findYourPathSection = document.getElementById('find-your-path');
      if (findYourPathSection) {
        const rect = findYourPathSection.getBoundingClientRect();
        setPassedFindYourPath(rect.bottom < window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine what to show
  const showRecommendation = hasCompletedFindYourPath && recommendedPath && passedFindYourPath;

  const handleFindYourPathClick = () => {
    const element = document.getElementById('find-your-path');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          {showRecommendation ? (
            <>
              {/* Mobile: Full-width bar with recommendation */}
              <div className="md:hidden bg-black border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span className="text-white text-sm font-medium truncate block">
                    {recommendedPath.title}
                  </span>
                  <span className="text-white/50 text-xs">
                    {recommendedPath.price}
                  </span>
                </div>
                <Link
                  href={recommendedPath.href}
                  className="bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  {recommendedPath.ctaText}
                </Link>
              </div>

              {/* Desktop: Floating card with recommendation */}
              <div className="hidden md:flex items-center gap-4 bg-black border border-white/20 px-6 py-4 shadow-2xl">
                <div>
                  <span className="text-white text-sm font-medium block">
                    {recommendedPath.title}
                  </span>
                  <span className="text-white/50 text-xs">
                    {recommendedPath.price}
                  </span>
                </div>
                <Link
                  href={recommendedPath.href}
                  className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  {recommendedPath.ctaText}
                </Link>
              </div>
            </>
          ) : passedFindYourPath && !hasCompletedFindYourPath ? (
            <>
              {/* Mobile: Prompt to find your path */}
              <div className="md:hidden bg-black border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
                <span className="text-white text-sm font-medium">
                  Not sure where to start?
                </span>
                <button
                  onClick={handleFindYourPathClick}
                  className="bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  Find Your Path
                </button>
              </div>

              {/* Desktop: Prompt to find your path */}
              <div className="hidden md:flex items-center gap-4 bg-black border border-white/20 px-6 py-4 shadow-2xl">
                <span className="text-white text-sm font-medium">
                  Not sure where to start?
                </span>
                <button
                  onClick={handleFindYourPathClick}
                  className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  Find Your Path
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Mobile: Default Experience CTA */}
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

              {/* Desktop: Default Experience CTA */}
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
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
