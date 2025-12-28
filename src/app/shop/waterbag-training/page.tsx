'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// ============================================================================
// DATA
// ============================================================================

const trainingKits = [
  {
    id: 'digital',
    name: 'Digital Only',
    tagline: 'Already have equipment',
    firstMonth: 50,
    ongoing: 50,
    equipment: [],
    equipmentValue: 0,
    includes: [
      'Full training program in Bridge App',
      'Video coaching library',
      'Weekly programming updates',
      'Progress tracking',
    ],
    cta: 'Start Training',
    href: 'https://apps.apple.com/app/bridge-athletic',
    note: 'For athletes who already own 108 equipment',
  },
  {
    id: 'starter',
    name: 'Starter Kit',
    tagline: 'Begin your journey',
    firstMonth: 115,
    ongoing: 50,
    equipment: ['108 Waterbag'],
    equipmentValue: 65,
    includes: [
      'Full training program in Bridge App',
      'Video coaching library',
      'Weekly programming updates',
      'Progress tracking',
    ],
    cta: 'Get Starter Kit',
    href: 'https://108merch.com',
  },
  {
    id: 'standard',
    name: 'Standard Kit',
    tagline: 'Most popular choice',
    firstMonth: 230,
    ongoing: 50,
    equipment: ['108 Waterbag', '108 Waterball', '108 Bulgarian Bag'],
    equipmentValue: 180,
    includes: [
      'Full training program in Bridge App',
      'Video coaching library',
      'Weekly programming updates',
      'Progress tracking',
    ],
    popular: true,
    cta: 'Get Standard Kit',
    href: 'https://108merch.com',
  },
  {
    id: 'pro',
    name: 'Pro Kit',
    tagline: 'The complete arsenal',
    firstMonth: 500,
    ongoing: 50,
    equipment: ['108 Waterbag', '108 Waterball', '108 Bulgarian Bag', '108 BP Vest'],
    equipmentValue: 450,
    includes: [
      'Full training program in Bridge App',
      'Video coaching library',
      'Weekly programming updates',
      'Progress tracking',
    ],
    cta: 'Get Pro Kit',
    href: 'https://108merch.com',
  },
];

const teamPackContents = [
  '12 Waterbags',
  '4 Waterballs',
  '4 Bulgarian Bags',
  '4 108 BP Vests',
  '6 Serape Bands',
];

const trainingPhases = [
  {
    id: 'anchored',
    phase: '01',
    title: 'Anchored Training',
    subtitle: 'Days 1-2',
    description: 'Build the foundation. Learn to rotate with stability and control—like spinning inside a phone booth.',
  },
  {
    id: 'dynamic',
    phase: '02',
    title: 'Dynamic Movement',
    subtitle: 'Days 3-4',
    description: 'Unlock athleticism. Stop being robotic—flow through positions with rhythm and power.',
  },
  {
    id: 'game-specific',
    phase: '03',
    title: 'Game Specific',
    subtitle: 'Days 5+',
    description: 'Transfer to the field. Every rep becomes game-ready. Your brain is in the game while you train.',
  },
];

const results = [
  { stat: '+4-5 mph', label: 'Pitcher velocity', note: 'Day 1 gains' },
  { stat: '+7-10 mph', label: 'Exit velocity', note: 'Within first week' },
  { stat: '500+', label: 'Athletes trained', note: 'And counting' },
];

const whoItsFor = [
  { icon: '⚾', label: 'Baseball players', desc: 'Ages 10 and up' },
  { icon: '🥎', label: 'Softball players', desc: 'Ages 10 and up' },
  { icon: '🏠', label: 'Train anywhere', desc: 'Home, gym, or field' },
];

const equipmentDetails = [
  {
    name: '108 Waterbag',
    description: 'The foundational tool. Builds rotational power and body awareness.',
    price: 65,
  },
  {
    name: '108 Waterball',
    description: 'Dynamic weight shifting for explosive power.',
    price: 55,
  },
  {
    name: '108 Bulgarian Bag',
    description: 'Full-body rotational strength and conditioning.',
    price: 60,
  },
  {
    name: '108 BP Vest',
    description: 'Constraint-based training. Keeps movement patterns honest.',
    price: 270,
  },
];

const appFeatures = [
  'Daily programming delivered to your phone',
  'HD video demonstrations of every exercise',
  'Progress tracking and personal profile',
  'In-season and off-season programming',
  'New content added regularly',
];

const faqs = [
  {
    q: 'What do I get when I purchase?',
    a: 'You receive physical training equipment (shipped to you) plus access to the Bridge Athletic app with your personalized 108 training program. Equipment is a one-time purchase; app access is $50/month.',
  },
  {
    q: 'Which kit should I choose?',
    a: 'Most athletes start with the Standard Kit ($230 first month). It includes the three core tools that unlock the full training system. The Starter Kit works if you\'re just beginning or on a budget.',
  },
  {
    q: 'How long until I see results?',
    a: 'Pitchers typically see 4-5 mph velocity gains on day one. Hitters see 7-10 mph exit velocity gains within the first week. Long-term athleticism improvements become visible around 6 months.',
  },
  {
    q: 'Can I cancel the app subscription?',
    a: 'Yes. Equipment is yours forever. The app subscription can be cancelled anytime, though we recommend at least 6 months to build lasting movement patterns.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently we ship within the United States. Contact us for international inquiries.',
  },
  {
    q: 'Is this the same training pros use?',
    a: 'Yes. The same rotational training system used by MLB and professional athletes, adapted for independent training at home.',
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-white/80 transition-colors"
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-white/50 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function WaterbagTrainingPage() {
  const [activeTab, setActiveTab] = useState<'individual' | 'team'>('individual');

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black min-h-screen">

        {/* ================================================================ */}
        {/* HERO: Clear Product + Price + CTA */}
        {/* ================================================================ */}
        <section className="py-16 md:py-24 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  108 Training System
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                  Equipment + App.<br />
                  <span className="text-white/40">Train like a pro.</span>
                </h1>
                <p className="text-lg text-white/60 mb-8 max-w-lg">
                  The complete rotational training system. Physical equipment ships to you. Training program delivered through the app. Everything you need to add velocity and power.
                </p>

                {/* Quick Results */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-white">{r.stat}</p>
                      <p className="text-xs text-white/50">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <p className="text-sm text-white/50">Starting at</p>
                    <p className="text-3xl font-black text-white">$115<span className="text-lg font-normal text-white/50">/first month</span></p>
                  </div>
                  <a
                    href="#kits"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Choose Your Kit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Right: Product Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10">
                  <Image
                    src="/products/bridge-athletic/three-phones.png"
                    alt="108 Training System"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-white/[0.05] rounded-xl p-4 text-center">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Equipment</p>
                      <p className="text-sm font-semibold text-white">Ships to you</p>
                    </div>
                    <div className="bg-white/[0.05] rounded-xl p-4 text-center">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Training</p>
                      <p className="text-sm font-semibold text-white">In the app</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* WHO IT'S FOR */}
        {/* ================================================================ */}
        <section className="py-12 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {whoItsFor.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* WHAT YOU'RE BUYING - Clear Product Breakdown */}
        {/* ================================================================ */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">What You&apos;re Buying</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Equipment + App = Complete System
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Physical training tools ship to your door. Your personalized program lives in the app. Together, they form the complete 108 training system.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Equipment */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Equipment</h3>
                    <p className="text-sm text-white/50">Ships to your door</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {equipmentDetails.map((item) => (
                    <div key={item.name} className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="text-sm text-white/50">${item.price}</p>
                        </div>
                        <p className="text-sm text-white/50">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* App */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={2} />
                      <path d="M12 18h.01" strokeWidth={2} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Bridge Athletic App</h3>
                    <p className="text-sm text-white/50">$50/month</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {appFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <p className="text-white/70">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.05] rounded-xl p-4">
                  <p className="text-sm text-white/60">
                    <span className="text-green-400 font-semibold">Your Performance OS.</span> Daily programming, video demos, and progress tracking—all in one app.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* HOW IT WORKS - Simplified */}
        {/* ================================================================ */}
        <section className="py-20 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Three phases. 20-30 min/day.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {trainingPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-white/20">{phase.phase}</span>
                    <div>
                      <h3 className="font-bold text-white">{phase.title}</h3>
                      <p className="text-xs text-white/50">{phase.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* TAB SELECTOR */}
        {/* ================================================================ */}
        <section id="kits" className="py-8 px-6 border-b border-white/10 sticky top-16 lg:top-20 bg-black z-30">
          <div className="max-w-xl mx-auto">
            <div className="flex bg-white/[0.05] rounded-full p-1">
              <button
                onClick={() => setActiveTab('individual')}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                  activeTab === 'individual'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                  activeTab === 'team'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Team
              </button>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* INDIVIDUAL: CHOOSE YOUR KIT */}
        {/* ================================================================ */}
        {activeTab === 'individual' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Choose Your Kit</p>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Pick your level. Start training.
                  </h2>
                  <p className="text-white/60 max-w-xl mx-auto">
                    All kits include equipment (one-time) + Bridge App access ($50/mo). Equipment ships free.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {trainingKits.map((kit, index) => (
                    <motion.div
                      key={kit.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative rounded-2xl p-6 flex flex-col ${
                        kit.popular
                          ? 'bg-white text-black ring-2 ring-white'
                          : 'bg-white/[0.05] border border-white/10 text-white'
                      }`}
                    >
                      {kit.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <h3 className={`text-xl font-bold mb-1 ${kit.popular ? 'text-black' : 'text-white'}`}>
                        {kit.name}
                      </h3>
                      <p className={`text-sm mb-4 ${kit.popular ? 'text-black/60' : 'text-white/50'}`}>
                        {kit.tagline}
                      </p>

                      {/* Pricing - Clear First Month Total */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className={`text-4xl font-black ${kit.popular ? 'text-black' : 'text-white'}`}>
                            ${kit.firstMonth}
                          </span>
                        </div>
                        <p className={`text-sm ${kit.popular ? 'text-black/60' : 'text-white/50'}`}>
                          first month{kit.equipmentValue > 0 && <span className="text-xs"> (${kit.equipmentValue} equip + $50 app)</span>}
                        </p>
                        <p className={`text-xs mt-1 ${kit.popular ? 'text-black/40' : 'text-white/40'}`}>
                          then ${kit.ongoing}/mo for app
                        </p>
                      </div>

                      {/* Equipment */}
                      {kit.equipment.length > 0 && (
                        <div className="mb-4">
                          <p className={`text-xs uppercase tracking-wider mb-2 ${kit.popular ? 'text-black/40' : 'text-white/30'}`}>
                            Equipment Included
                          </p>
                          <ul className="space-y-1">
                            {kit.equipment.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <CheckIcon className={`w-3 h-3 ${kit.popular ? 'text-black' : 'text-green-400'}`} />
                                <span className={`text-sm ${kit.popular ? 'text-black/80' : 'text-white/70'}`}>
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* App Features */}
                      <div className="mb-6 flex-grow">
                        <p className={`text-xs uppercase tracking-wider mb-2 ${kit.popular ? 'text-black/40' : 'text-white/30'}`}>
                          App Includes
                        </p>
                        <ul className="space-y-1">
                          {kit.includes.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <CheckIcon className={`w-3 h-3 ${kit.popular ? 'text-black' : 'text-green-400'}`} />
                              <span className={`text-xs ${kit.popular ? 'text-black/70' : 'text-white/60'}`}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {kit.note && (
                        <p className={`text-xs mb-4 ${kit.popular ? 'text-black/50' : 'text-white/40'}`}>
                          {kit.note}
                        </p>
                      )}

                      <a
                        href={kit.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center py-3 font-semibold rounded-full transition-colors ${
                          kit.popular
                            ? 'bg-black text-white hover:bg-black/80'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {kit.cta}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* TEAM CONTENT */}
        {/* ================================================================ */}
        {activeTab === 'team' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                      Team Training System
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                      Equip your entire team.
                    </h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Complete rotational training system for team practices, pregame routines, and dynamic warmups. Coach dashboard included. Everything ships together.
                    </p>

                    {/* Equipment */}
                    <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 mb-8">
                      <h3 className="font-bold text-white mb-4">Equipment Included:</h3>
                      <ul className="space-y-3 mb-6">
                        {teamPackContents.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckIcon className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-white/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-green-400">
                          12 months of team training in the app included
                        </p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white rounded-2xl p-6 text-center">
                        <p className="text-xs uppercase tracking-wider text-black/50 mb-2">To Start</p>
                        <p className="text-4xl font-black text-black">$1,700</p>
                        <p className="text-sm text-black/60 mt-1">Equipment + 12mo app</p>
                      </div>
                      <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center">
                        <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Renewal</p>
                        <p className="text-4xl font-black text-white">$500</p>
                        <p className="text-sm text-white/60 mt-1">/year after Year 1</p>
                      </div>
                    </div>

                    <a
                      href="mailto:info@108performance.com?subject=Team Training Inquiry"
                      className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                    >
                      Contact for Team Pricing
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Right column */}
                  <div>
                    <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 mb-6">
                      <h3 className="font-bold text-white mb-4">Perfect For:</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-lg">🏟️</span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Team Practices</p>
                            <p className="text-sm text-white/50">Station-based training for full squad</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-lg">⚡</span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Pregame Routines</p>
                            <p className="text-sm text-white/50">Activation that transfers to game day</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-lg">📊</span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Coach Dashboard</p>
                            <p className="text-sm text-white/50">Monitor team progress and compliance</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <Image
                      src="/products/bridge-athletic/three-phones.png"
                      alt="Team Training App"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* FAQ */}
        {/* ================================================================ */}
        <section className="py-20 px-6 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">FAQ</p>
              <h2 className="text-3xl font-black text-white">
                Common questions
              </h2>
            </motion.div>

            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FINAL CTA */}
        {/* ================================================================ */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to start training?
              </h2>
              <p className="text-white/60 mb-8">
                Equipment ships free. Training starts immediately in the app.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#kits"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Choose Your Kit
                </a>
                <a
                  href="mailto:info@108performance.com"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  Have questions? Contact us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
