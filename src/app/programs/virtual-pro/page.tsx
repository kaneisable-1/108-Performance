'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';
import { ProductPackDisplay, EquipmentList } from '@/components/ui/ProductPackDisplay';

const virtualProFaqs = [
  {
    question: "What's the difference between Virtual and Virtual Pro?",
    answer: 'Virtual Pro includes six trips to the Knoxville lab per year for hands-on refinement with senior staff.',
  },
  {
    question: 'How long are the in-person trips?',
    answer: "Most athletes come for 2-3 days per trip. Scheduling is flexible around your calendar.",
  },
  {
    question: 'Is travel included?',
    answer: "No. The $1,000/mo covers training only. We have hotel partnerships for affordable stays.",
  },
  {
    question: 'Why is this "Best Value"?',
    answer: 'Remote coaching alone is $550/mo. Adding 6 trips separately would cost significantly more. This bundles everything.',
  },
  {
    question: 'Can I upgrade from Virtual Experience?',
    answer: 'Yes. Many start with Virtual and upgrade when they want more in-person time.',
  },
  {
    question: "What's the difference from Draft Prep?",
    answer: 'Virtual Pro is training-focused. Draft Prep adds recruiting services, showcase prep, and agent connections.',
  },
];

const virtualFeatures = [
  'Daily personalized programming',
  'Unlimited video review & feedback',
  'Direct coach messaging',
  'Weekly video check-ins',
  'Full system documentation',
  'Community access',
];

const inPersonFeatures = [
  '6 trips to Knoxville per year',
  '18 total in-person training days',
  'Intensive hands-on coaching',
  'Tech & data deep dives',
  'System refinement sessions',
  'Full facility access during visits',
];

export default function VirtualProPage() {
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
                className="inline-block bg-white text-black text-xs uppercase tracking-wider px-4 py-2 mb-6"
              >
                Best Value • Hybrid
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Virtual Pro
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                The best of both worlds. Daily remote coaching PLUS 6 trips to Knoxville per year. For athletes who want it all.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$1,000</p>
                  <p className="text-white/50">/month</p>
                </div>
                <Link href="https://api.leadconnectorhq.com/widget/survey/MM8Rx7Ss2BbFJvY82zca" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-white text-black px-8 py-5 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Start Virtual Pro
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Entry Path Banner */}
        <section className="bg-gray-900 py-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/80">
                  <strong className="text-white">For athletes ages 12-16:</strong> Enter directly — complete product pack included.
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Or upgrade from Virtual Experience after completing The 108 Experience.
                </p>
              </div>
              <Link href="/programs/experience" className="text-sm font-semibold text-white underline hover:no-underline">
                Learn about The 108 Experience →
              </Link>
            </div>
          </div>
        </section>

        {/* Two Columns */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What You Get</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Remote + In-Person.<br />
                <span className="text-gray-300">Complete coverage.</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Virtual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10"
              >
                <h3 className="text-2xl font-black mb-6">Virtual Component</h3>
                <ul className="space-y-4">
                  {virtualFeatures.map((feature) => (
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
              </motion.div>
              {/* In-Person */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-black text-white p-10"
              >
                <h3 className="text-2xl font-black mb-6">In-Person Component</h3>
                <ul className="space-y-4">
                  {inPersonFeatures.map((feature) => (
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

        {/* What You Receive */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What You Receive</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Complete training toolkit.<br />
                <span className="text-gray-300">Everything included.</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                New Virtual Pro athletes receive the complete 108 product pack and merch kit. If you&apos;re upgrading from Virtual Experience, you already have your equipment.
              </p>
            </motion.div>

            <ProductPackDisplay
              packId="completeProductPack"
              showMerchKit={true}
              showBridgeApp={true}
              bridgeAppPricing="included"
              variant="light"
            />

            {/* App Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-gray-400 mb-6">All training delivered through the Bridge Athletic app</p>
              <Image
                src="/products/bridge-athletic/three-phones.png"
                alt="Bridge Athletic App - Your Performance OS"
                width={800}
                height={500}
                className="w-full max-w-2xl mx-auto h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* The Math */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6"
            >
              The Value
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              Why Virtual Pro makes sense.
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg"
              >
                <p className="text-5xl font-black mb-2">18</p>
                <p className="text-gray-500">In-person days per year</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 shadow-lg"
              >
                <p className="text-5xl font-black mb-2">365</p>
                <p className="text-gray-500">Days of remote coaching</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 shadow-lg"
              >
                <p className="text-5xl font-black mb-2">$33</p>
                <p className="text-gray-500">Per day of coaching</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stack Options */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Stack Your Strategy</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Add Elite Outcomes
              </h2>
              <p className="text-gray-500 mt-4">Virtual Pro is the base for our recruiting and draft programs.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/programs/college-prep" className="group">
                <div className="bg-gray-50 p-8 shadow-lg transition-all group-hover:shadow-xl border-l-4 border-black">
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs uppercase tracking-wider text-gray-500">Elite</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">College Prep</h3>
                  <p className="text-gray-600 text-sm mb-4">Training + Recruiting. Target school ID, showcase prep, coach connections.</p>
                  <p className="text-3xl font-black">$1,250<span className="text-lg font-normal text-gray-500">/mo</span></p>
                  <p className="text-xs text-gray-400 mt-2">Includes Virtual Pro base</p>
                </div>
              </Link>
              <Link href="/programs/draft-prep" className="group">
                <div className="bg-black text-white p-8 shadow-lg transition-all group-hover:shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs uppercase tracking-wider text-white/50">Pinnacle</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">Draft Prep</h3>
                  <p className="text-white/60 text-sm mb-4">Draft strategy. Optimize measurables, data packaging, scout relationships.</p>
                  <p className="text-3xl font-black">$1,500<span className="text-lg font-normal text-white/50">/mo</span></p>
                  <p className="text-xs text-white/40 mt-2">Includes Virtual Pro base • Every round is $500K+</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={virtualProFaqs} title="Questions about Virtual Pro" />

        {/* CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready for the complete package?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-8"
            >
              Start with The 108 Experience, then join Virtual Pro.
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
