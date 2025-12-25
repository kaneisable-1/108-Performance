'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Icon108, type Icon108Name } from './Icon108';

const athletePrograms: Array<{
  name: string;
  href: string;
  price: string;
  tag: string;
  icon: Icon108Name;
}> = [
  { name: 'The 108 Experience', href: '/programs/experience', price: 'From $2,000', tag: 'Start Here', icon: 'diamond' },
  { name: 'Tri Star', href: '/programs/tri-star', price: '$499/mo', tag: 'In-Person', icon: 'sequence-bars' },
  { name: 'Virtual Experience', href: '/programs/virtual', price: '$550/mo', tag: 'Remote', icon: 'wave' },
  { name: 'Virtual Pro', href: '/programs/virtual-pro', price: '$1,000/mo', tag: 'Best Value', icon: 'phi-circles' },
  { name: 'College Prep', href: '/programs/college-prep', price: '$1,250/mo', tag: 'Recruiting', icon: 'target' },
  { name: 'Draft Prep', href: '/programs/draft-prep', price: '$1,500/mo', tag: 'Draft', icon: 'power-vector' },
  { name: 'Pro Experience', href: '/programs/pro-experience', price: 'Contact', tag: 'Professional', icon: 'motion-arc' },
];

const coachPrograms: Array<{
  name: string;
  href: string;
  price: string;
  tag: string;
  icon: Icon108Name;
}> = [
  { name: 'Coaches Experience', href: '/programs/coaches-experience', price: '$500/day', tag: 'Start Here', icon: 'target' },
  { name: 'Host a Tour', href: '/programs/host-tour', price: '$500/athlete', tag: 'Step 2', icon: 'kinetic-chain' },
  { name: 'Coaches Mentorship', href: '/programs/coaches-mentorship', price: '$297/mo', tag: 'Step 3', icon: 'spiral' },
  { name: 'Powered by 108', href: '/programs/powered-by-108', price: '$20,000 Y1', tag: 'Licensing', icon: 'golden-grid' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
          isScrolled ? 'border-b border-white/10' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" className="relative h-8 flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="108 Performance"
                  width={150}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              {/* Sport Toggle */}
              <div className="hidden sm:flex items-center bg-white/10 rounded-full p-1">
                <button className="px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full">
                  Baseball
                </button>
                <button className="px-4 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors">
                  Softball
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <Link
                  href="/programs"
                  className="text-xs font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
                >
                  Programs
                  <svg
                    className={`w-3 h-3 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-black border border-white/10 shadow-2xl min-w-[600px]">
                        <div className="grid grid-cols-2">
                          {/* Athletes Column */}
                          <div className="p-6 border-r border-white/10">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">For Athletes</p>
                            <div className="space-y-1">
                              {athletePrograms.map((program) => (
                                <Link
                                  key={program.href}
                                  href={program.href}
                                  className="block p-3 hover:bg-white/5 transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <Icon108 name={program.icon} size={16} className="text-white/30 group-hover:text-white/50 transition-colors" />
                                      <div>
                                        <p className="text-sm font-semibold text-white group-hover:text-white">
                                          {program.name}
                                        </p>
                                        <p className="text-xs text-white/40">{program.price}</p>
                                      </div>
                                    </div>
                                    {program.tag === 'Start Here' ? (
                                      <span className="text-[9px] uppercase tracking-wider bg-white text-black px-2 py-1">
                                        {program.tag}
                                      </span>
                                    ) : program.tag === 'Best Value' ? (
                                      <span className="text-[9px] uppercase tracking-wider bg-white/20 text-white px-2 py-1">
                                        {program.tag}
                                      </span>
                                    ) : (
                                      <span className="text-[9px] uppercase tracking-wider text-white/30">
                                        {program.tag}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Coaches Column */}
                          <div className="p-6">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">For Coaches</p>
                            <div className="space-y-1">
                              {coachPrograms.map((program) => (
                                <Link
                                  key={program.href}
                                  href={program.href}
                                  className="block p-3 hover:bg-white/5 transition-colors group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <Icon108 name={program.icon} size={16} className="text-white/30 group-hover:text-white/50 transition-colors" />
                                      <div>
                                        <p className="text-sm font-semibold text-white group-hover:text-white">
                                          {program.name}
                                        </p>
                                        <p className="text-xs text-white/40">{program.price}</p>
                                      </div>
                                    </div>
                                    {program.tag === 'Start Here' ? (
                                      <span className="text-[9px] uppercase tracking-wider bg-white text-black px-2 py-1">
                                        {program.tag}
                                      </span>
                                    ) : program.tag === 'Licensing' ? (
                                      <span className="text-[9px] uppercase tracking-wider bg-white/20 text-white px-2 py-1">
                                        {program.tag}
                                      </span>
                                    ) : (
                                      <span className="text-[9px] uppercase tracking-wider text-white/30">
                                        {program.tag}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="border-t border-white/10 p-4 flex items-center justify-between bg-white/5">
                          <p className="text-xs text-white/50">Not sure where to start?</p>
                          <Link
                            href="/programs"
                            className="text-xs font-semibold text-white hover:underline"
                          >
                            View All Programs →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#method"
                className="text-xs font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                The Method
              </Link>
              <Link
                href="#inside"
                className="text-xs font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Inside 108
              </Link>
              <Link
                href="/programs/experience"
                className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-white transition-transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-opacity ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black md:hidden pt-20 overflow-y-auto"
          >
            <div className="px-6 py-8">
              {/* Athletes Section */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">For Athletes</p>
              <div className="space-y-2 mb-8">
                {athletePrograms.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block p-3 border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon108 name={program.icon} size={18} className="text-white/30" />
                        <p className="text-sm font-semibold text-white">{program.name}</p>
                      </div>
                      <p className="text-xs text-white/40">{program.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Coaches Section */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">For Coaches</p>
              <div className="space-y-2 mb-8">
                {coachPrograms.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block p-3 border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon108 name={program.icon} size={18} className="text-white/30" />
                        <p className="text-sm font-semibold text-white">{program.name}</p>
                      </div>
                      <p className="text-xs text-white/40">{program.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Other Links */}
              <div className="space-y-4 border-t border-white/10 pt-8">
                <Link
                  href="#method"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white"
                >
                  The Method
                </Link>
                <Link
                  href="#inside"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white"
                >
                  Inside 108
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/programs/experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-white text-black px-8 py-4 text-center font-semibold uppercase tracking-wider"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
