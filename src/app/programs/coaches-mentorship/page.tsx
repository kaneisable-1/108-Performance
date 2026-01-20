'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';

const coachesMentorshipFaqs = [
  {
    question: "How often are the group calls?",
    answer: 'Monthly, with quarterly deep-dive sessions on specific topics.',
  },
  {
    question: 'Can I ask questions between calls?',
    answer: 'Yes. Direct messaging to senior staff is included.',
  },
  {
    question: 'Is this enough to implement the full system?',
    answer: "It's a start. Full implementation typically requires progression to Powered by 108 licensing.",
  },
  {
    question: 'How many coaches are in the program?',
    answer: 'We keep it small intentionally. Quality of interaction matters more than quantity.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Month-to-month. No long-term contracts.',
  },
  {
    question: "What's the difference between this and Powered by 108?",
    answer: "Mentorship is education and support. Powered by 108 is full licensing rights to run the system commercially.",
  },
];

const features = [
  { title: 'Monthly Group Calls', description: 'Regular sessions with Will Marshall and senior staff.' },
  { title: 'Full System Access', description: 'Our complete programming and methodology documentation.' },
  { title: 'Video Review', description: 'Submit athlete video for feedback and coaching guidance.' },
  { title: 'Private Community', description: 'Connect with other coaches on the 108 journey.' },
  { title: 'Quarterly Deep Dives', description: 'Extended sessions on specific aspects of the method.' },
  { title: 'Direct Messaging', description: 'Reach senior staff when you need guidance.' },
];

const mentors = [
  { name: 'Will Marshall', role: 'Founder & Lead Coach', description: '15+ years developing the 108 method.' },
  { name: 'Jose Rijo-Berger', role: 'Senior Coach', description: 'Movement specialist and system implementation.' },
];

export default function CoachesMentorshipPage() {
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
                Step 3 — Coaches Path
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Coaches<br />
                <span className="text-gray-300">Mentorship</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Keep going. Monthly access with senior staff and the full system we use. Learn to implement the 108 method with your own athletes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-xs text-gray-400 mb-1">Starting at</p>
                  <p className="text-6xl font-black">$297</p>
                  <p className="text-gray-500">/month</p>
                </div>
                <Link href="https://link.apisystem.tech/widget/survey/rRS8SHjyfeyS7I78qIoZ" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    Join Mentorship
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
                <strong className="text-black">Prerequisite:</strong> Must complete the Coaches Experience first.
              </p>
              <Link href="/programs/coaches-experience" className="text-sm font-semibold underline hover:no-underline">
                Learn about Coaches Experience →
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
                Ongoing support.<br />
                <span className="text-gray-300">Complete access.</span>
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

        {/* Mentors */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 text-center"
            >
              Your Mentors
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-16 text-center"
            >
              Learn from the source.
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-8"
                >
                  <h3 className="text-2xl font-black mb-1">{mentor.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{mentor.role}</p>
                  <p className="text-white/70">{mentor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Level */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            >
              Ready for More?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-8"
            >
              Go all in with licensing.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 max-w-xl mx-auto"
            >
              Powered by 108 gives you full licensing rights to run the 108 system in your facility.
            </motion.p>
            <Link href="/programs/powered-by-108">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
              >
                Learn About Licensing — $20,000 Year 1
              </motion.button>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={coachesMentorshipFaqs} title="Questions about Coaches Mentorship" />

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to keep learning?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Complete the Coaches Experience first, then join the mentorship.
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
