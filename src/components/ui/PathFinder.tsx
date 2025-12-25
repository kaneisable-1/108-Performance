'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon108, type Icon108Name } from './Icon108';

type UserType = 'athlete' | 'parent' | 'coach' | null;

interface PathOption {
  id: UserType;
  title: string;
  subtitle: string;
  icon: Icon108Name;
}

const pathOptions: PathOption[] = [
  {
    id: 'athlete',
    title: "I'm an athlete",
    subtitle: 'Training for myself',
    icon: 'spiral',
  },
  {
    id: 'parent',
    title: "I'm a parent",
    subtitle: 'Looking for my child',
    icon: 'kinetic-chain',
  },
  {
    id: 'coach',
    title: "I'm a coach",
    subtitle: 'Level up my coaching',
    icon: 'target',
  },
];

const recommendations: Record<'athlete' | 'parent' | 'coach', {
  title: string;
  description: string;
  price: string;
  href: string;
  icon: Icon108Name;
  secondary: {
    title: string;
    description: string;
    price: string;
    href: string;
  };
}> = {
  athlete: {
    title: 'Start with The 108 Experience',
    description: 'Your 2-5 day deep dive into finding your personal system.',
    price: 'From $2,000',
    href: '/programs/experience',
    icon: 'diamond',
    secondary: {
      title: 'Or join a Tour first',
      description: 'See us in action before committing.',
      price: '$500',
      href: '/programs/experience#tour',
    },
  },
  parent: {
    title: 'The 108 Experience',
    description: 'We start by understanding your child as a person, then as an athlete.',
    price: 'From $2,000',
    href: '/programs/experience',
    icon: 'diamond',
    secondary: {
      title: 'Questions first?',
      description: 'Schedule a call to discuss your child\'s goals.',
      price: 'Free',
      href: '/contact',
    },
  },
  coach: {
    title: 'Coaches Experience',
    description: 'Spend a day with us. See our methods. Ask anything.',
    price: '$500/day',
    href: '/programs/coaches-experience',
    icon: 'target',
    secondary: {
      title: 'Ready to go deeper?',
      description: 'Join our ongoing Coaches Mentorship program.',
      price: '$297/mo',
      href: '/programs/coaches-mentorship',
    },
  },
};

export function PathFinder() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<UserType>(null);

  const handlePathSelect = (path: UserType) => {
    setSelectedPath(path);
  };

  const handleBack = () => {
    setSelectedPath(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation completes
    setTimeout(() => setSelectedPath(null), 300);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-50 bg-white text-black px-6 py-4 flex items-center gap-3 shadow-2xl hover:bg-gray-100 transition-colors"
      >
        <Icon108 name="spiral" size={20} />
        <span className="text-xs font-bold uppercase tracking-wider">Find Your Path</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[420px] sm:max-h-[600px] z-50 bg-black border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-fib-21 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedPath && (
                    <button
                      onClick={handleBack}
                      className="p-1 hover:bg-white/10 transition-colors -ml-1"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">108 Performance</p>
                    <h3 className="text-lg font-bold text-white">
                      {selectedPath ? 'Your Recommendation' : 'Find Your Path'}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-fib-21">
                <AnimatePresence mode="wait">
                  {!selectedPath ? (
                    /* Path Selection */
                    <motion.div
                      key="selection"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      <p className="text-white/60 text-sm mb-fib-21">
                        What brings you to 108?
                      </p>
                      {pathOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          onClick={() => handlePathSelect(option.id)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full p-fib-13 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-fib-13 text-left group"
                        >
                          <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/40 transition-colors">
                            <Icon108 name={option.icon} size={24} />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{option.title}</p>
                            <p className="text-white/40 text-sm">{option.subtitle}</p>
                          </div>
                          <svg className="w-5 h-5 text-white/30 ml-auto group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    /* Recommendation */
                    <motion.div
                      key="recommendation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Primary Recommendation */}
                      <div className="border border-white/20 p-fib-21 bg-white/5">
                        <div className="flex items-center gap-fib-13 mb-fib-13">
                          <Icon108 name={recommendations[selectedPath].icon} size={24} className="text-white/40" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                            Recommended
                          </p>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-fib-8">
                          {recommendations[selectedPath].title}
                        </h4>
                        <p className="text-white/60 text-sm mb-fib-13">
                          {recommendations[selectedPath].description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/40 text-sm">
                            {recommendations[selectedPath].price}
                          </span>
                          <a
                            href={recommendations[selectedPath].href}
                            className="bg-white text-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>

                      {/* Secondary Option */}
                      <div className="border border-white/10 p-fib-13">
                        <p className="text-white/60 text-sm mb-fib-8">
                          {recommendations[selectedPath].secondary.title}
                        </p>
                        <p className="text-white/40 text-xs mb-fib-13">
                          {recommendations[selectedPath].secondary.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/30 text-xs">
                            {recommendations[selectedPath].secondary.price}
                          </span>
                          <a
                            href={recommendations[selectedPath].secondary.href}
                            className="text-white text-xs font-semibold hover:underline"
                          >
                            View →
                          </a>
                        </div>
                      </div>

                      {/* Help Text */}
                      <p className="text-white/30 text-xs text-center">
                        Not sure? <a href="/contact" className="text-white hover:underline">Talk to us</a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
