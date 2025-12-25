'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const features = [
  { title: 'Everything in Virtual Pro', description: 'Full training program with 6 trips to Knoxville.' },
  { title: 'Scout Measurable Optimization', description: 'Maximize the numbers that matter: velo, exit velo, sprint times.' },
  { title: 'Data Packaging', description: 'Present your metrics in the format scouts and teams expect.' },
  { title: 'Scout Relationships', description: 'Leverage our network to get eyes on your development.' },
  { title: 'Showcase Strategy', description: 'Know where to be and how to perform when scouts are watching.' },
  { title: 'Draft Timeline Management', description: 'Navigate the process with experienced guidance.' },
];

export default function DraftPrepPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-black text-white py-32">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="bg-white p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/50">Pinnacle Program</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Draft Prep
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                Draft strategy. Optimize what scouts measure, package your data, build scout relationships. Every round is money.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-7xl font-black">$1,500</p>
                  <p className="text-white/50">/month</p>
                  <p className="text-xs text-white/40 mt-1">Includes Virtual Pro base</p>
                </div>
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-white text-black px-8 py-5 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Start Draft Prep
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Stakes */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">The Stakes</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                Every round is <span className="text-gray-300">$500K+</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The difference between Round 5 and Round 10 is hundreds of thousands in signing bonus. The difference between getting drafted and not getting drafted is your dream.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 text-center"
              >
                <p className="text-5xl font-black mb-2">$500K+</p>
                <p className="text-gray-500">Per round difference</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-8 text-center"
              >
                <p className="text-5xl font-black mb-2">20</p>
                <p className="text-gray-500">Rounds in MLB Draft</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 p-8 text-center"
              >
                <p className="text-5xl font-black mb-2">1</p>
                <p className="text-gray-500">Shot to get it right</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">What You Get</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Complete draft preparation.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-white pl-6"
                >
                  <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            >
              Who It's For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              Draft-eligible athletes ready to maximize their draft position.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="bg-black text-white px-4 py-2 text-sm">College Juniors</span>
              <span className="bg-black text-white px-4 py-2 text-sm">College Seniors</span>
              <span className="bg-black text-white px-4 py-2 text-sm">HS Seniors (Top Prospects)</span>
              <span className="bg-black text-white px-4 py-2 text-sm">JUCO Players</span>
            </motion.div>
          </div>
        </section>

        {/* Already Pro? */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            >
              Already Professional?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-8"
            >
              Check out Pro Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 max-w-xl mx-auto"
            >
              Independent development for professional athletes. Protect your window with senior staff access and bi-weekly mentorship.
            </motion.p>
            <Link href="/programs/pro-experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
              >
                Learn About Pro Experience
              </motion.button>
            </Link>
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
              Ready to get drafted?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-8"
            >
              Start with The 108 Experience, then join Draft Prep.
            </motion.p>
            <Link href="/programs/experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider"
              >
                Book The 108 Experience
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
