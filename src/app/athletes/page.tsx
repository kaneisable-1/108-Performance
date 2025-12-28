'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// IDs to exclude (marked with X - duplicates, empty, promotional)
const EXCLUDED_IDS = new Set<number>([
  // Original excluded (7-21)
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  // Additional X marks from reviews:
  1, 2,           // First two cards
  3,              // NO.3 image (X in softball view)
  24,             // DEMENT male (X in baseball row 1 img 3)
  28,             // Blurred Donovan Walton duplicate
  30,             // First card page 2
  31,             // HAASE (X in baseball row 2 img 2)
  37,             // LAUREANO duplicate (X in baseball row 4 img 2)
  40,             // LAUREANO duplicate
  57,             // Row 8 img 1 (X)
  58, 59, 60, 61, // CARLSON dupes + LIFE promotional cards
  62, 63, 64,     // Row 8 img 2 and more X marks
]);

// Athlete roster with sport categorization
// Format: { id, sport: 'baseball' | 'softball' }
const athleteData: Array<{ id: number; sport: 'baseball' | 'softball' }> = [
  // SOFTBALL - female athletes
  { id: 4, sport: 'softball' },   // NO.2
  { id: 23, sport: 'softball' },  // KK DEMENT
  { id: 39, sport: 'softball' },  // KAITLYN TERRY
  { id: 43, sport: 'softball' },  // PRESLEY
  { id: 49, sport: 'softball' },  // KRATZ

  // BASEBALL - male athletes
  { id: 5, sport: 'baseball' },   // DOLLANDER
  { id: 6, sport: 'baseball' },
  { id: 22, sport: 'baseball' },  // SKENES
  { id: 25, sport: 'baseball' },  // BRYCE RAINER
  { id: 26, sport: 'baseball' },  // ARENDT
  { id: 27, sport: 'baseball' },  // RAINER
  { id: 28, sport: 'baseball' },
  { id: 29, sport: 'baseball' },  // WALTON
  { id: 32, sport: 'baseball' },  // FAUROT
  { id: 33, sport: 'baseball' },  // HARRELSON
  { id: 34, sport: 'baseball' },
  { id: 35, sport: 'baseball' },  // SCHIFELBEIN
  { id: 36, sport: 'baseball' },  // MOSS
  { id: 38, sport: 'baseball' },  // FRANCO
  { id: 41, sport: 'baseball' },  // LAUREANO
  { id: 42, sport: 'baseball' },  // MICAH FRETWELL
  { id: 44, sport: 'baseball' },  // DUGAN
  { id: 45, sport: 'baseball' },  // CARLSON
  { id: 46, sport: 'baseball' },  // FRENCH
  { id: 47, sport: 'baseball' },  // FRETWELL
  { id: 48, sport: 'baseball' },
  { id: 50, sport: 'baseball' },  // TRENT
  { id: 51, sport: 'baseball' },  // CALDWELL
  { id: 52, sport: 'baseball' },  // MCMILLAN
  { id: 53, sport: 'baseball' },
  { id: 54, sport: 'baseball' },  // BROWN
  { id: 55, sport: 'baseball' },  // CUSICK
  { id: 56, sport: 'baseball' },  // JESSE
];

// Filter out excluded IDs and add image path
const athletes = athleteData
  .filter(a => !EXCLUDED_IDS.has(a.id))
  .map(a => ({
    ...a,
    image: `/athletes/${a.id}.png`,
  }));

export default function AthletesPage() {
  const [filter, setFilter] = useState<'all' | 'baseball' | 'softball'>('all');

  // Apply filter
  const filteredAthletes = filter === 'all'
    ? athletes
    : athletes.filter(a => a.sport === filter);

  // Count by sport
  const baseballCount = athletes.filter(a => a.sport === 'baseball').length;
  const softballCount = athletes.filter(a => a.sport === 'softball').length;

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                108 Athletes
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
                The roster.
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {athletes.length}+ athletes. One system. These are the players who train with 108.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Toggle */}
        <section className="py-6 px-6 border-b border-white/10 sticky top-16 lg:top-20 bg-black z-30">
          <div className="max-w-xl mx-auto">
            <div className="flex bg-white/[0.05] rounded-full p-1">
              <button
                onClick={() => setFilter('all')}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all ${
                  filter === 'all'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                All ({athletes.length})
              </button>
              <button
                onClick={() => setFilter('baseball')}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all ${
                  filter === 'baseball'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Baseball ({baseballCount})
              </button>
              <button
                onClick={() => setFilter('softball')}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all ${
                  filter === 'softball'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Softball ({softballCount})
              </button>
            </div>
          </div>
        </section>

        {/* Athletes Gallery */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredAthletes.map((athlete, index) => (
                <motion.div
                  key={athlete.id}
                  initial={{ opacity: 0, y: 20, filter: 'grayscale(100%)' }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: 'grayscale(0%)',
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 8) * 0.05,
                    filter: { duration: 0.8 }
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={athlete.image}
                    alt={`108 Athlete`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Sport indicator */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                      athlete.sport === 'baseball'
                        ? 'bg-blue-500/80 text-white'
                        : 'bg-pink-500/80 text-white'
                    }`}>
                      {athlete.sport}
                    </span>
                  </div>
                  {/* ID indicator - TEMPORARY for identification */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold bg-black/80 text-white px-2 py-1 rounded">
                      ID: {athlete.id}
                    </span>
                  </div>
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Ready to join them?
              </h2>
              <p className="text-xl text-white/60 mb-10">
                Train with the same system that develops elite athletes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/programs/experience"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Start Training
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/nil"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  Join as NIL Athlete
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
