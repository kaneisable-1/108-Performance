'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const principles = [
  {
    number: '01',
    headline: 'Human first.',
    lines: [
      'We map the voice in your head',
      'so coaching speaks your language.',
    ],
  },
  {
    number: '02',
    headline: 'Athlete second.',
    lines: [
      'We build the engine—rotation, tension/compression, and 108 Waterbags—',
      'until your body anchors and snaps on its own.',
    ],
  },
  {
    number: '03',
    headline: 'Player third.',
    lines: [
      'Then we brand the output: the player.',
      'Skill is just the wrapper on elite movement.',
      'When the pattern clicks, the game gets simple.',
    ],
  },
];

export default function TheMethod() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] text-white/40 uppercase mb-8">
              The 108 Way
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-12">
              Master your own movement.
            </h1>
            <div className="space-y-2 text-xl md:text-2xl text-white/60">
              <p>The industry gives you data but starves you for truth.</p>
              <p className="text-white">We give you the feel.</p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-24"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-white/30"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Principle Sections */}
        {principles.map((principle, index) => (
          <section
            key={principle.number}
            className="min-h-screen flex items-center justify-center px-6 py-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-sm text-white/30 tracking-[0.5em] mb-12">
                {principle.number}
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12">
                {principle.headline}
              </h2>
              <div className="space-y-3 text-xl md:text-2xl text-white/60 leading-relaxed">
                {principle.lines.map((line, lineIndex) => (
                  <motion.p
                    key={lineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + lineIndex * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </section>
        ))}

        {/* Final CTA Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12">
              The door is open.
            </h2>
            <Link
              href="/programs/experience"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors rounded-full"
            >
              Book The 108 Experience
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
