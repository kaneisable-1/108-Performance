'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';
import { WhatYouReceiveSection } from '@/components/ui/ProductPackDisplay';
import Script from "next/script";

const experienceFaqs = [
  {
    question: 'Is this just an evaluation?',
    answer: "No. It's a discovery process where we learn how you think, how you move, and which cues already work for your nervous system.",
  },
  {
    question: 'How long is it?',
    answer: 'We offer 2, 3, 4, and 5-day options. 3 days is the recommended duration for most athletes.',
  },
  {
    question: 'What will I leave with?',
    answer: 'A "System of One"—personalized cues and prompts that give you authority to coach yourself through any slump. Plus water bags, BP vest, merch, and app access.',
  },
  {
    question: 'What if we determine I\'m not a good fit?',
    answer: "We'll tell you honestly and point you in a better direction. We don't train athletes we can't genuinely help.",
  },
  {
    question: 'Can a parent attend?',
    answer: 'Absolutely. Parents are welcome to observe. Many find it valuable to understand the process.',
  },
  {
    question: 'Where do athletes stay?',
    answer: 'We have partnerships with nearby hotels and can send recommendations after booking.',
  },
  {
    question: 'How soon can I book?',
    answer: 'Availability varies. We typically book 2-4 weeks out. Contact us to check current openings.',
  },
];

const included = [
  'ICP Testing — Understand how your brain learns and processes information',
  'Full movement assessment — How YOU actually move, not a textbook model',
  'Sport-specific testing — Pitching, hitting, or throwing analysis',
  'YOUR system built from scratch — Cues that click for YOUR wiring',
  'Video library of YOUR drills — Access them anytime in the app',
  'Direct access to coaching staff — Throughout your entire stay',
];


const timeline = [
  { day: 'Day 1', focus: 'The Human', description: 'How do you think? How do you learn? What cues already click? We learn your wiring first.' },
  { day: 'Day 2', focus: 'The Athlete', description: 'How does your body actually move? We study YOUR patterns—not a textbook model.' },
  { day: 'Day 3', focus: 'The Player', description: 'Now we connect the dots. Skills that transfer when it matters.' },
  { day: 'Day 4', focus: 'Refinement', description: 'Pressure testing. Does it hold at 7 o\'clock?' },
  { day: 'Day 5', focus: 'Your System', description: 'You leave with cues that are YOURS. Not ours.' },
];

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#0d0d0d] py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
                >
                  The Gateway — Required First Step
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
                >
                  The 108<br />
                  <span className="text-white/40">Experience</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-white/60 mb-8 max-w-md"
                >
                  We learn how you think before we touch your mechanics. You leave with YOUR system—cues that click for your brain, not a cookie-cutter template.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-6 text-white/80 mb-10"
                >
                  <span className="text-sm">2–5 Days</span>
                  <span className="text-white/30">|</span>
                  <span className="text-sm">In-Person</span>
                  <span className="text-white/30">|</span>
                  <span className="text-sm">Knoxville, TN</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="bg-white text-black px-8 py-6">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Starting at</p>
                    <p className="text-4xl font-black">$2,000</p>
                  </div>
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-white text-black px-8 py-6 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Book Your Experience
                  </motion.button>
                </motion.div>
              </div>
              {/* Video Explainer */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-video bg-black border border-white/10">
                  <iframe
                    src="https://www.youtube.com/embed/msr5l1pstyc?rel=0&modestbranding=1"
                    title="The 108 Experience Explained"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-white/40 text-xs mt-3 text-center">Watch: The 108 Experience Explained</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GHL FORM */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">APPLY Now!</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Book Your Experience
              </h2>
            </motion.div>
            <div className="space-y-6">
      <iframe
        src="https://api.leadconnectorhq.com/widget/survey/MM8Rx7Ss2BbFJvY82zca"
        style={{ border: "none", width: "100%" }}
        scrolling="no"
        id="MM8Rx7Ss2BbFJvY82zca"
        title="survey"
      ></iframe>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
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
              className="max-w-3xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What's Included</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
                Everything you need to<br />
                <span className="text-gray-300">find your system.</span>
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

        {/* What You Take Home - Product Pack Display */}
        <WhatYouReceiveSection
          packId="completeProductPack"
          showMerchKit={true}
          showBridgeApp={true}
          bridgeAppPricing="first-month-free"
          variant="light"
          sectionTitle="What You Take Home"
          sectionSubtitle="Your complete training toolkit. Everything ships with you when you leave."
        />

        {/* Timeline */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">The Process</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Your 5-Day Journey
              </h2>
            </motion.div>
            <div className="space-y-6">
              {timeline.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-lg"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-black text-white flex items-center justify-center">
                    <span className="text-2xl font-black">{day.day.split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black mb-2">{day.focus}</h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Gatekeeper Message */}
        <section className="bg-black py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white text-black p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">This Is Not For Everybody</p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                This is a <strong>mutual evaluation</strong>. We're learning your system while you're experiencing ours.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not everyone is the right fit—and that's okay. We don't train athletes we can't genuinely help. If it's not the right match, we'll tell you honestly and point you in a better direction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Next */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">After The Experience</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Choose Your Path
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Once you've completed The 108 Experience, these sustained training options become available.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/programs/tri-star" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-black/10 p-8 h-full card-float"
                >
                  <h3 className="text-2xl font-black mb-3">Tri Star</h3>
                  <p className="text-gray-600 text-sm mb-4">Local unlimited access in Knoxville.</p>
                  <p className="text-3xl font-black">$499<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </motion.div>
              </Link>
              <Link href="/programs/virtual" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-black/10 p-8 h-full card-float"
                >
                  <h3 className="text-2xl font-black mb-3">Virtual Experience</h3>
                  <p className="text-gray-600 text-sm mb-4">Remote coaching anywhere.</p>
                  <p className="text-3xl font-black">$550<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </motion.div>
              </Link>
              <Link href="/programs/virtual-pro" className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-black text-white p-8 h-full card-float-dark"
                >
                  <span className="inline-block bg-white text-black text-[10px] uppercase tracking-wider px-3 py-1 mb-4">Best Value</span>
                  <h3 className="text-2xl font-black mb-3">Virtual Pro</h3>
                  <p className="text-white/60 text-sm mb-4">Hybrid: Remote + 6 trips/year.</p>
                  <p className="text-3xl font-black">$1,000<span className="text-lg font-normal text-white/50">/mo</span></p>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={experienceFaqs} title="Questions about The Experience" />

        {/* CTA */}
        <section className="bg-[#0d0d0d] py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-8"
            >
              Ready to start?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-white text-black px-10 py-5 font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition-shadow"
              >
                Book Your 108 Experience
              </motion.button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm mt-6"
            >
              Starting at $2,000 • 2–5 Days • Knoxville, TN
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
