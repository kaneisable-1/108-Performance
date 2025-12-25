'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const features = [
  { title: 'Daily Programming', description: 'Personalized training plans delivered every day based on your system.' },
  { title: 'Video Review', description: 'Submit video, get detailed feedback. Direct line to your coach.' },
  { title: 'Direct Coach Access', description: 'Message your coach anytime. Real responses, not automated.' },
  { title: 'Weekly Check-ins', description: 'Regular video calls to assess progress and adjust the plan.' },
  { title: 'System Documentation', description: 'Your entire system documented and accessible anytime.' },
  { title: 'Community Access', description: 'Connect with other 108 athletes on the same journey.' },
];

export default function VirtualPage() {
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
                Remote • Anywhere
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Virtual<br />
                <span className="text-gray-300">Experience</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Your coach, anywhere. Daily programming, video review, and direct access to 108 coaching staff—no matter where you train.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$550</p>
                  <p className="text-gray-500">/month</p>
                </div>
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                >
                  Start Virtual
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
                <strong className="text-black">Prerequisite:</strong> Must complete The 108 Experience first.
              </p>
              <Link href="/programs/experience" className="text-sm font-semibold underline hover:no-underline">
                Learn about The 108 Experience →
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What You Get</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                108 coaching.<br />
                <span className="text-gray-300">Wherever you are.</span>
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
                  className="border-l-4 border-black pl-6"
                >
                  <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 text-center"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-16 text-center"
            >
              Simple. Effective. Connected.
            </motion.h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Train', description: 'Follow your daily programming at your local facility.' },
                { step: '02', title: 'Record', description: 'Capture video of your training and submit for review.' },
                { step: '03', title: 'Review', description: 'Get detailed feedback from your 108 coach.' },
                { step: '04', title: 'Refine', description: 'Adjust and improve based on coaching insights.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <span className="text-5xl font-black text-white/20">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upgrade */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            >
              Want More?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-8"
            >
              Upgrade to Virtual Pro
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 max-w-xl mx-auto"
            >
              Get everything in Virtual Experience PLUS 6 trips to Knoxville per year (18 in-person days). The best of both worlds.
            </motion.p>
            <Link href="/programs/virtual-pro">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
              >
                Learn About Virtual Pro — $1,000/mo
              </motion.button>
            </Link>
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
              Train with 108 from anywhere.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Start with The 108 Experience, then go Virtual.
            </motion.p>
            <Link href="/programs/experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
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
