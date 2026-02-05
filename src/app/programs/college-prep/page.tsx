'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';
import { EquipmentList } from '@/components/ui/ProductPackDisplay';

const collegePrepFaqs = [
  {
    question: "What's the difference between College Prep and Draft Prep?",
    answer: 'College Prep focuses on getting recruited to play college baseball. Draft Prep is for draft-eligible players optimizing their professional draft position.',
  },
  {
    question: 'When should I start College Prep?',
    answer: 'Ideally sophomore or junior year of high school. Earlier gives us more time to develop your game and build recruiting relationships.',
  },
  {
    question: 'Do you guarantee scholarship offers?',
    answer: 'No. We guarantee our effort and expertise. Results depend on your development, academics, and fit with programs.',
  },
  {
    question: 'What level schools do your athletes go to?',
    answer: 'D1, D2, D3, NAIA, and JUCO. We help find the RIGHT fit, not just the highest level.',
  },
  {
    question: 'How involved are parents in this process?',
    answer: 'Very. Recruiting is a family decision. We keep parents informed and involved at every step.',
  },
  {
    question: 'Do you work with softball players too?',
    answer: 'Yes. The training and recruiting process applies to both baseball and softball athletes.',
  },
];

const trainingFeatures = [
  'Everything in Virtual Pro',
  'Daily personalized programming',
  '6 trips to Knoxville (18 days)',
  'Weekly video check-ins',
  'Direct coach access',
];

const recruitingFeatures = [
  'Target school identification',
  'Showcase preparation & strategy',
  'Video packaging for coaches',
  'Direct coach connections',
  'Campus visit preparation',
  'Recruiting timeline management',
];

export default function CollegePrepPage() {
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
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="bg-black p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-gray-500">Elite Program</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                College Prep
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Training + Recruiting. We develop your game AND open doors to the right programs. Target school identification, showcase prep, and direct coach connections.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$1,250</p>
                  <p className="text-gray-500">/month</p>
                  <p className="text-xs text-gray-400 mt-1">Includes Virtual Pro base</p>
                </div>
                <Link href="https://api.leadconnectorhq.com/widget/survey/MM8Rx7Ss2BbFJvY82zca" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    Start College Prep
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
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-6">Purchase Now: </p>
                </div>
                <Link href="https://link.fastpaydirect.com/payment-link/696fe41c53f21be1c4fc5353" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    $1250/month
                  </motion.button>
                </Link>
                <Link href="https://link.fastpaydirect.com/payment-link/696fe44053f21b3ed8fc539d" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    $13,500/year
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
              <div>
                <p className="text-sm text-gray-600">
                  <strong className="text-black">Builds on Virtual Pro.</strong> Complete 108 Product Pack + Merch Kit included.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Start with The 108 Experience or enter directly as a new athlete.
                </p>
              </div>
              <Link href="/programs/experience" className="text-sm font-semibold underline hover:no-underline">
                Learn about The 108 Experience →
              </Link>
            </div>
          </div>
        </section>

        {/* Two Pillars */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Two Pillars</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Training + Recruiting.<br />
                <span className="text-gray-300">One program.</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Training */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10"
              >
                <h3 className="text-2xl font-black mb-2">Training</h3>
                <p className="text-gray-500 mb-6">Full Virtual Pro included</p>
                <ul className="space-y-4 mb-8">
                  {trainingFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Equipment included */}
                <EquipmentList
                  packId="completeProductPack"
                  showMerchKit={true}
                  showBridgeApp={true}
                  bridgeAppPricing="included"
                  variant="light"
                  title="Equipment Included"
                />
              </motion.div>
              {/* Recruiting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-black text-white p-10"
              >
                <h3 className="text-2xl font-black mb-2">Recruiting</h3>
                <p className="text-white/50 mb-6">We open doors</p>
                <ul className="space-y-4">
                  {recruitingFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 text-center"
            >
              The Recruiting Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-16 text-center"
            >
              How we open doors.
            </motion.h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Assess', description: 'We evaluate your current level, academics, and goals to identify realistic targets.' },
                { step: '02', title: 'Target', description: 'Build a strategic list of schools where you can compete and thrive.' },
                { step: '03', title: 'Package', description: 'Create compelling video and materials that showcase your abilities.' },
                { step: '04', title: 'Connect', description: 'Leverage our network to get your materials in front of the right coaches.' },
                { step: '05', title: 'Prepare', description: 'Ready you for showcases, campus visits, and conversations with coaches.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 flex items-start gap-6 shadow-lg"
                >
                  <span className="text-5xl font-black text-gray-200">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
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
              High school athletes serious about playing at the next level.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="bg-white/10 px-4 py-2 text-sm">Sophomores</span>
              <span className="bg-white/10 px-4 py-2 text-sm">Juniors</span>
              <span className="bg-white/10 px-4 py-2 text-sm">Seniors</span>
              <span className="bg-white/10 px-4 py-2 text-sm">JUCO Transfers</span>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={collegePrepFaqs} title="Questions about College Prep" />

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to get recruited?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Start with The 108 Experience, then join College Prep.
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
