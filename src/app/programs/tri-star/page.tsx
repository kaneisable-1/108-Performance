'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';

const triStarFaqs = [
  {
    question: 'Can anyone sign up?',
    answer: 'No. All athletes must complete The 108 Experience first to establish their baseline movement system.',
  },
  {
    question: 'What are the hours?',
    answer: 'Monday through Thursday, 3:30–8:00 PM.',
  },
  {
    question: 'Is there a limit on sessions?',
    answer: 'No. Unlimited training for hitting, throwing, and rate of force development (RFD).',
  },
  {
    question: 'Is this group or one-on-one?',
    answer: "Both. You'll have coach access during sessions and train alongside other athletes. The environment matters.",
  },
  {
    question: 'Can I pause during the season?',
    answer: 'Yes. We understand in-season demands. Talk to us about your schedule.',
  },
  {
    question: 'Is there a contract?',
    answer: "Month-to-month. Stay because it's working, not because you signed something.",
  },
];

const features = [
  { title: 'Unlimited Access', description: 'No session limits. Train as much as your body allows.' },
  { title: 'Daily System Reinforcement', description: 'Your personalized system, refined every single day.' },
  { title: 'Full Facility Access', description: 'Cages, tech, recovery—everything at your disposal.' },
  { title: 'Direct Coach Access', description: 'Work directly with 108 coaching staff.' },
  { title: 'Community', description: 'Train alongside other serious athletes on the same journey.' },
  { title: 'Flexible Schedule', description: 'Come when it works for you. We\'re here.' },
];

export default function TriStarPage() {
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
                In-Person • Knoxville
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Tri Star
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Local unlimited access. No session limits. Your system reinforced daily. For athletes in the Knoxville area ready to commit.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$499</p>
                  <p className="text-gray-500">/month</p>
                </div>
                <Link href="https://api.leadconnectorhq.com/widget/survey/MM8Rx7Ss2BbFJvY82zca" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    Start Tri Star
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">Purchase Now: </p>
                </div>
                <Link href="https://link.fastpaydirect.com/payment-link/696fe49d50e4b620d5b3f376" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    $499/month
                  </motion.button>
                </Link>
                <Link href="https://link.fastpaydirect.com/payment-link/696fde427dba83522fba1ad3" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    $5500/year
                  </motion.button>
                </Link>
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
                Unlimited. Unrestricted.
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

        {/* Who It's For */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              Who It's For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              Athletes who live in or near Knoxville and want daily access to elite development.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="bg-white/10 px-4 py-2 text-sm">High School Athletes</span>
              <span className="bg-white/10 px-4 py-2 text-sm">College Athletes</span>
              <span className="bg-white/10 px-4 py-2 text-sm">Pro Athletes</span>
              <span className="bg-white/10 px-4 py-2 text-sm">Local Commitment</span>
            </motion.div>
          </div>
        </section>

        {/* Compare */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Not Local?</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Consider These Options
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/programs/virtual" className="group">
                <div className="bg-white p-8 shadow-lg transition-all group-hover:shadow-xl">
                  <h3 className="text-2xl font-black mb-3">Virtual Experience</h3>
                  <p className="text-gray-600 text-sm mb-4">Remote coaching from anywhere. Daily programming & video review.</p>
                  <p className="text-3xl font-black">$550<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </div>
              </Link>
              <Link href="/programs/virtual-pro" className="group">
                <div className="bg-black text-white p-8 shadow-lg transition-all group-hover:shadow-xl">
                  <span className="inline-block bg-white text-black text-[10px] uppercase tracking-wider px-3 py-1 mb-4">Best Value</span>
                  <h3 className="text-2xl font-black mb-3">Virtual Pro</h3>
                  <p className="text-white/60 text-sm mb-4">Remote + 6 trips to Knoxville per year (18 days).</p>
                  <p className="text-3xl font-black">$1,000<span className="text-lg font-normal text-white/50">/mo</span></p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={triStarFaqs} title="Questions about Tri Star" />

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready for unlimited access?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Start with The 108 Experience, then join Tri Star.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/programs/experience">
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
                >
                  Book The 108 Experience
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
