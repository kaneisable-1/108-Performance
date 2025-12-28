'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';
import { EquipmentList } from '@/components/ui/ProductPackDisplay';

const proExperienceFaqs = [
  {
    question: "Will working with 108 conflict with my organization's program?",
    answer: 'No. We design everything to complement, never conflict. Your org comes first.',
  },
  {
    question: 'How discreet is this?',
    answer: "Completely. Many pros work with outside coaches. We don't publicize relationships unless you want us to.",
  },
  {
    question: 'When can I train with you?',
    answer: 'During offseason windows. We work around your professional schedule entirely.',
  },
  {
    question: 'What makes this different from other pro training?',
    answer: "Senior staff only. Will Marshall and senior coaches work with you directly. No hand-offs to junior staff.",
  },
  {
    question: 'How do I know if this is right for me?',
    answer: "Start with a conversation. We'll tell you honestly if we can help.",
  },
  {
    question: 'Do you work with minor leaguers too?',
    answer: 'Yes. Minor leaguers often benefit most from independent development.',
  },
];

const features = [
  { title: 'Senior Staff Only', description: 'Work directly with Will Marshall and senior coaching staff.' },
  { title: 'Bi-Weekly Mentorship', description: 'Regular check-ins to guide your professional development.' },
  { title: 'Independent Program', description: 'Designed to complement, not conflict with, your organization.' },
  { title: 'Offseason Intensives', description: 'In-person training blocks during your offseason windows.' },
  { title: 'Career Navigation', description: 'Guidance on the business side of being a professional.' },
  { title: 'Protected Development', description: 'Your window is short. We help you maximize it.' },
];

export default function ProExperiencePage() {
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block bg-white/10 text-white text-xs uppercase tracking-wider px-4 py-2 mb-6"
              >
                Professional Athletes
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Pro Experience
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                Protect your window. Independent development with senior staff only. Bi-weekly mentorship designed around YOUR professional schedule.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-4xl font-black">Contact Coach</p>
                  <p className="text-white/50 mt-2">Pricing based on individual needs</p>
                </div>
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white text-black px-8 py-5 font-bold uppercase tracking-wider"
                >
                  Contact Coach
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Reality */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">The Reality</p>
              <h2 className="text-2xl md:text-4xl font-black mb-6">
                Your professional window is finite.
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Organizations have their systems. Their priorities. Their timelines. Pro Experience gives you independent development that complements—never conflicts with—your team's program. Protect your career. Maximize your window.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What You Get</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Senior staff. Direct access.
              </h2>
            </motion.div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 shadow-lg"
                    >
                      <h3 className="text-lg font-black mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <EquipmentList
                  packId="completeProductPack"
                  showMerchKit={true}
                  showBridgeApp={true}
                  bridgeAppPricing="included"
                  variant="light"
                  title="Equipment Included"
                />
                <div className="bg-black text-white p-6 rounded-xl">
                  <h4 className="font-bold mb-3">Pro Exclusive</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      Priority access to Will Marshall
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      Bi-weekly senior staff Zooms
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      Offseason intensive blocks
                    </li>
                  </ul>
                </div>
              </motion.div>
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
              Built around your schedule.
            </motion.h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Conversation', description: 'We talk. Understand your situation, goals, and constraints.' },
                { step: '02', title: 'Custom Program', description: 'Build a development plan that fits your professional life.' },
                { step: '03', title: 'Bi-Weekly Check-ins', description: 'Regular mentorship calls with senior staff.' },
                { step: '04', title: 'Offseason Blocks', description: 'In-person intensive training when your schedule allows.' },
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

        {/* FAQ */}
        <PageFAQ faqs={proExperienceFaqs} title="Questions about Pro Experience" />

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Let's talk.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Pro Experience is customized to each athlete. Start with a conversation.
            </motion.p>
            <motion.button
              whileHover={{ y: 2 }}
              whileTap={{ y: 4 }}
              className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
            >
              Contact Coach
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
