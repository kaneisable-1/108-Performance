'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Featured athletes for home page (subset of 12)
const featuredAthletes = [
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
];

export function AthleteShowcase() {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
            108 Athletes
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            The proof is in the roster.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            64+ athletes from high school to the pros train with the 108 system.
          </p>
        </motion.div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {featuredAthletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              initial={{ opacity: 0, y: 20, filter: 'grayscale(100%)' }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'grayscale(0%)',
              }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                filter: { duration: 0.8, delay: index * 0.05 }
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={athlete.image}
                alt={`108 Athlete`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/athletes"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
          >
            See all 64+ athletes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
