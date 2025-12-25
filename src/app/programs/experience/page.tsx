'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const included = [
  'Comprehensive movement assessment',
  'Video analysis of your current mechanics',
  'Personalized system development',
  'Written action plan for continued development',
  'Direct access to coaching staff during visit',
  'Facility access throughout your stay',
];

const timeline = [
  { day: 'Day 1', focus: 'Assessment', description: 'Deep dive into how you move, think, and compete. We learn your history.' },
  { day: 'Day 2', focus: 'Discovery', description: 'Testing constraints and finding what unlocks YOUR movement patterns.' },
  { day: 'Day 3', focus: 'Building', description: 'Constructing the framework of your personal system.' },
  { day: 'Day 4', focus: 'Refinement', description: 'Fine-tuning and pressure testing what we\'ve built together.' },
  { day: 'Day 5', focus: 'Integration', description: 'Putting it all together. Your roadmap for continued growth.' },
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
                  This is where every athlete path begins. A mutual evaluation to understand your system and determine fit.
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
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative h-[500px] hidden lg:block"
              >
                <Image
                  src="/hero-athlete.jpg"
                  alt="Athlete at 108 Performance"
                  fill
                  className="object-cover grayscale"
                />
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

        {/* Timeline */}
        <section className="bg-gray-50 py-24">
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
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Important</p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                This is a <strong>mutual evaluation</strong>. We're learning your system while you're experiencing ours. Not everyone is the right fit—and that's okay. This process ensures we only work with athletes we can genuinely help.
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
                  className="bg-gray-50 p-8 h-full transition-all group-hover:shadow-xl group-hover:bg-white"
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
                  className="bg-gray-50 p-8 h-full transition-all group-hover:shadow-xl group-hover:bg-white"
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
                  className="bg-black text-white p-8 h-full transition-all group-hover:shadow-xl"
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
