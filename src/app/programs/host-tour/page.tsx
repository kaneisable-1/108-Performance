'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const included = [
  '2-day camp at your facility',
  '108 coaching staff on-site',
  'Full method demonstration',
  'Athlete assessments included',
  'Parent education session',
  'Partnership fit evaluation',
];

const benefits = [
  { title: 'Test the Fit', description: 'See how the 108 method works with YOUR athletes in YOUR facility.' },
  { title: 'Revenue Opportunity', description: 'Charge your athletes, we provide the experience.' },
  { title: 'No Risk', description: 'Try the partnership before committing to licensing.' },
  { title: 'Community Building', description: 'Bring elite development to your local athletes.' },
];

export default function HostTourPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-white py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block bg-black text-white text-xs uppercase tracking-wider px-4 py-2 mb-6"
              >
                Step 2 — Coaches Path
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Host a Tour
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Bring 108 to you. We come to your facility for 2-day camps to see if the method fits your town. Test the partnership before committing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$500</p>
                  <p className="text-gray-500">/athlete</p>
                </div>
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                >
                  Schedule a Tour
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prerequisite Banner */}
        <section className="bg-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                <strong className="text-black">Prerequisite:</strong> Must complete the Coaches Experience first.
              </p>
              <Link href="/programs/coaches-experience" className="text-sm font-semibold underline hover:no-underline">
                Learn about Coaches Experience →
              </Link>
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
                We bring 108 to you.
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

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Why Host</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Benefits for your facility.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 shadow-lg"
                >
                  <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              What's Next
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              After the Tour
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/programs/coaches-mentorship" className="group">
                <div className="bg-white/10 p-8 transition-all group-hover:bg-white/20">
                  <span className="inline-block text-xs uppercase tracking-wider text-white/50 mb-4">Step 3</span>
                  <h3 className="text-2xl font-black mb-3">Coaches Mentorship</h3>
                  <p className="text-white/60 text-sm mb-4">Monthly access with senior staff.</p>
                  <p className="text-2xl font-black">$297<span className="text-lg font-normal text-white/50">/mo</span></p>
                </div>
              </Link>
              <Link href="/programs/powered-by-108" className="group">
                <div className="bg-white text-black p-8 transition-all group-hover:shadow-xl">
                  <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-4">Step 4</span>
                  <h3 className="text-2xl font-black mb-3">Powered by 108</h3>
                  <p className="text-gray-600 text-sm mb-4">Full licensing partnership.</p>
                  <p className="text-2xl font-black">$20,000<span className="text-lg font-normal text-gray-500"> Year 1</span></p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to host?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Complete the Coaches Experience first, then schedule your tour.
            </motion.p>
            <Link href="/programs/coaches-experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
              >
                Start with Coaches Experience
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
