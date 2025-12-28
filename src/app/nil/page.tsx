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

const valueProps = [
  {
    icon: 'training',
    title: 'Training that translates',
    description: 'Access to the 108 methodology, on-app drills, and session credits (MSRP disclosed).',
  },
  {
    icon: 'brand',
    title: 'Brand-building made easy',
    description: 'Content playbooks, weekly prompts, and media days in the Vault.',
  },
  {
    icon: 'paid',
    title: 'Get paid the right way',
    description: 'Affiliate codes (10% commission), merch drops, and cash micro-bonuses for deliverables.',
  },
  {
    icon: 'signal',
    title: 'Signal boost',
    description: 'Collabs, features, and shoutouts—because results deserve a spotlight.',
  },
];

const whatYouDo = [
  { action: 'Create', description: 'Reels, stories, and behind-the-scenes training.' },
  { action: 'Show up', description: 'Clinics, interviews, autograph sessions.' },
  { action: 'Grow', description: 'Consistent posting, smarter prep, better results.' },
];

const whatYouGet = [
  'Training credits + gear bundles',
  'Cash for content deliverables',
  'Your own affiliate code',
  'A real plan—and fast payouts',
];

const howItWorks = [
  { step: '1', title: 'Apply', description: 'Tell us about you' },
  { step: '2', title: 'Get matched', description: 'Find your tier' },
  { step: '3', title: 'Sign your scope', description: 'Clear expectations' },
  { step: '4', title: 'Create + train', description: 'Do the work' },
  { step: '5', title: 'Get paid', description: 'Fast payouts' },
];

const faqs = [
  {
    question: 'Do I need huge followers?',
    answer: 'No. Consistency > hype. We value athletes who show up and put in the work.',
  },
  {
    question: 'Can training count as compensation?',
    answer: 'Yes—training credits come with disclosed MSRP for full compliance.',
  },
  {
    question: 'Will my school be notified?',
    answer: 'Yep—clean disclosure and compliance workflows built in.',
  },
  {
    question: 'Can I use team marks?',
    answer: 'Only with permission—otherwise 108 branding.',
  },
];

// Featured NIL athletes (using actual roster images)
const featuredAthletes = [
  { id: 10, image: '/athletes/10.png' },
  { id: 25, image: '/athletes/25.png' },
  { id: 30, image: '/athletes/30.png' },
  { id: 40, image: '/athletes/40.png' },
  { id: 15, image: '/athletes/15.png' },
  { id: 50, image: '/athletes/50.png' },
];

// ============================================================================
// ICON COMPONENTS
// ============================================================================

function IconTraining({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4" />
    </svg>
  );
}

function IconBrand({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function IconPaid({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconSignal({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

function IconCheck({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  training: IconTraining,
  brand: IconBrand,
  paid: IconPaid,
  signal: IconSignal,
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function NILPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                108 NIL Athletes
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
                Be a 108 Athlete.<br className="hidden md:block" /> Build your brand.<br className="hidden md:block" /> Elevate your game.
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-8">
                Training, content, and real opportunities—without the chaos. Want in?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:nil@108performance.com"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  Talk to 108
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => {
                const Icon = iconMap[prop.icon];
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/[0.05] border border-white/10 rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{prop.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/60 italic"
            >
              "Athletes from top programs use THE108WAY to turn reps into reach."
            </motion.p>
          </div>
        </section>

        {/* What You'll Do / What You'll Get */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* What You'll Do */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                  What You'll Do
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  The work that builds your brand.
                </h2>
                <div className="space-y-6">
                  {whatYouDo.map((item, index) => (
                    <div key={item.action} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.action}</h3>
                        <p className="text-sm text-white/50">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What You'll Get */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                  What You'll Get
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Real compensation. Real support.
                </h2>
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                  <ul className="space-y-4">
                    {whatYouGet.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                How It Works
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Five steps to getting started.
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/[0.05] border border-white/10 rounded-xl px-5 py-4 text-center min-w-[120px]">
                    <span className="text-2xl font-black text-white/20">{step.step}</span>
                    <p className="text-sm font-bold text-white mt-1">{step.title}</p>
                    <p className="text-xs text-white/40">{step.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <svg className="w-4 h-4 text-white/20 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Athletes */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                108 Athletes
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Meet the roster.
              </h2>
              <p className="text-white/50">64+ athletes train with the 108 system.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredAthletes.map((athlete, index) => (
                <motion.div
                  key={athlete.id}
                  initial={{ opacity: 0, y: 20, filter: 'grayscale(100%)' }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: 'grayscale(0%)',
                  }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    filter: { duration: 0.8, delay: index * 0.08 }
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={athlete.image}
                    alt={`108 Athlete`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link
                href="/athletes"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
              >
                See all 64+ athletes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Common questions.
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.05] border border-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-white/50 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closer + CTA */}
        <section id="apply" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Your journey is the story.
              </h2>
              <p className="text-xl text-white/60 mb-8">
                We just help you tell it—and win with it.
              </p>
              <p className="text-white/40 mb-10">
                Tell us about you, your sport, and your goals. We'll review and reply quickly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:nil@108performance.com?subject=NIL Application"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:nil@108performance.com?subject=NIL Question"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  Not sure yet? Talk to 108
                </a>
              </div>
              <p className="text-sm text-white/30 mt-8">
                Your time is now.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
