'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const included = [
  'Full immersion in the 108 method',
  'Shadow coaching sessions with athletes',
  'Access to all technology and systems',
  'Direct time with Will Marshall and senior staff',
  'Complete documentation of our processes',
  'Assessment of fit for ongoing partnership',
];

export default function CoachesExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-[#0d0d0d] text-white py-32">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
              >
                Mandatory Step 1 — Coaches
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Coaches<br />
                <span className="text-white/40">Experience</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                Shadow the method. See how we work. This is where every coach partnership begins—a mutual evaluation to determine fit.
              </motion.p>

              {/* Gatekeeper Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white text-black p-8 mb-10 max-w-lg"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Application Required</p>
                <p className="text-lg font-medium">
                  FIT IS NOT GUARANTEED. This is a mutual evaluation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 text-white/80 mb-10"
              >
                <span className="text-sm">2–5 Days</span>
                <span className="text-white/30">|</span>
                <span className="text-sm"><strong className="text-white">$500</strong>/day</span>
                <span className="text-white/30">|</span>
                <span className="text-sm">Full Immersion</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition-shadow"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What's Included</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                See everything.<br />
                <span className="text-gray-300">Learn the method.</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {included.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">After Coaches Experience</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                The Partnership Path
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Complete the Coaches Experience to unlock these partnership options.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/programs/host-tour" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 h-full shadow-lg transition-all group-hover:shadow-xl"
                >
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 mb-4">Step 2</span>
                  <h3 className="text-2xl font-black mb-3">Host a Tour</h3>
                  <p className="text-gray-600 text-sm mb-4">Bring 108 to your facility. 2-day camps.</p>
                  <p className="text-3xl font-black">$500<span className="text-lg font-normal text-gray-500">/athlete</span></p>
                </motion.div>
              </Link>
              <Link href="/programs/coaches-mentorship" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 h-full shadow-lg transition-all group-hover:shadow-xl"
                >
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 mb-4">Step 3</span>
                  <h3 className="text-2xl font-black mb-3">Coaches Mentorship</h3>
                  <p className="text-gray-600 text-sm mb-4">Monthly access with senior staff.</p>
                  <p className="text-3xl font-black">$297<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </motion.div>
              </Link>
              <Link href="/programs/powered-by-108" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-black text-white p-8 h-full shadow-lg transition-all group-hover:shadow-xl"
                >
                  <span className="inline-block bg-white text-black text-xs px-3 py-1 mb-4">Step 4</span>
                  <h3 className="text-2xl font-black mb-3">Powered by 108</h3>
                  <p className="text-white/60 text-sm mb-4">Full licensing partnership.</p>
                  <p className="text-3xl font-black">$20,000<span className="text-lg font-normal text-white/50"> Year 1</span></p>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to see the method?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-8"
            >
              Apply for the Coaches Experience to start the partnership process.
            </motion.p>
            <motion.button
              whileHover={{ y: 2 }}
              whileTap={{ y: 4 }}
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider"
            >
              Apply Now
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
