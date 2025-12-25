'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// Athlete Programs Data
const athleteStep2Programs = [
  {
    name: 'Tri Star',
    description: 'Local (Knoxville): Unlimited access, no session limits. Your system reinforced daily.',
    price: '$499',
    period: '/month',
    focus: 'In-Person',
    elevation: 'standard',
  },
  {
    name: 'Virtual Experience',
    description: 'Remote Base: Daily programming, video review, direct coach access. Your coach, anywhere.',
    price: '$550',
    period: '/month',
    focus: 'Remote',
    elevation: 'standard',
  },
  {
    name: 'Virtual Pro',
    description: 'Hybrid (Remote + 6 Trips): Daily remote coaching PLUS 6 trips/year (18 in-person days). For athletes who want it all.',
    price: '$1,000',
    period: '/month',
    focus: 'Best Value',
    elevation: 'premium',
  },
];

const athleteStep3Programs = [
  {
    name: 'College Prep',
    description: 'Training + Recruiting: Target school identification, showcase prep, coach connections. We open doors.',
    price: '$1,250',
    period: '/month',
    note: 'Includes Virtual Pro base',
    elevation: 'elite',
    badge: 'star',
  },
  {
    name: 'Draft Prep',
    description: 'Draft Strategy: Optimize what scouts measure, data packaging, scout relationships. Every round is money.',
    price: '$1,500',
    period: '/month',
    note: 'Includes Virtual Pro base',
    stat: '$500K+',
    elevation: 'pinnacle',
    badge: 'star',
  },
  {
    name: 'Pro Experience',
    description: 'Protect Your Window: Independent development, senior staff only, bi-weekly mentorship.',
    price: 'Contact Coach',
    period: '',
    elevation: 'special',
    cta: 'Contact Coach',
  },
];

// Coach Programs Data
const coachPrograms = [
  {
    step: 2,
    name: 'Host a Tour',
    description: 'Bring 108 to You: We come to your facility for 2-day camps to see if the method fits your town.',
    price: '$500',
    period: '/athlete',
  },
  {
    step: 3,
    name: 'Coaches Mentorship',
    description: 'Keep Going: Monthly access with senior staff (Will Marshall, Jose Rijo-Berger) and the full system we use.',
    price: '$297',
    period: '/month',
    note: 'Starting at',
  },
  {
    step: 4,
    name: 'Powered by 108',
    description: 'Full Partnership: Your space, our system. Everything you need to run on the 108 system.',
    price: '$20,000',
    period: ' Year 1',
    badge: 'shield',
    elevation: 'pinnacle',
  },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'athletes' | 'coaches'>('athletes');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Binary Split Toggle */}
        <section className="bg-black py-8 sticky top-16 lg:top-20 z-40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-flex bg-white/5 rounded-full p-1">
                <button
                  onClick={() => setActiveTab('athletes')}
                  className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'athletes'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  For Athletes
                </button>
                <button
                  onClick={() => setActiveTab('coaches')}
                  className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === 'coaches'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  For Coaches
                </button>
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {activeTab === 'athletes' ? (
            <motion.div
              key="athletes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* ATHLETE STEP 1: The Gated Foundation */}
              <section className="relative bg-[#0d0d0d] py-24 overflow-hidden">
                {/* Noise texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
                  >
                    Step 1 — Mandatory
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
                  >
                    EVERY Athlete Path<br />
                    <span className="text-white/40">Starts Here.</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/60 mb-10"
                  >
                    The 108 Experience is where it begins.
                  </motion.p>

                  {/* Gatekeeper Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white text-black p-8 mb-10 max-w-2xl mx-auto"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Mandatory</p>
                    <p className="text-base md:text-lg font-medium">
                      This is a mutual evaluation to understand your system and determine fit to train with 108.
                    </p>
                  </motion.div>

                  {/* Key Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/80 mb-12"
                  >
                    <span className="text-sm">2–5 Days</span>
                    <span className="text-white/30">|</span>
                    <span className="text-sm">Your Custom System</span>
                    <span className="text-white/30">|</span>
                    <span className="text-sm">Starting at <strong className="text-white">$2,000</strong></span>
                  </motion.div>

                  {/* CTA with push effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={{ y: 2 }}
                      whileTap={{ y: 4 }}
                      className="bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition-shadow"
                    >
                      Book Your 108 Experience
                    </motion.button>
                  </motion.div>
                </div>

                {/* Directional Arrow to Step 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center mt-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/20"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </section>

              {/* ATHLETE STEP 2: Choose Your Sustained Pathway */}
              <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
                      Step 2 — Only After The 108 Experience
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight">
                      Choose Your Sustained Training
                    </h2>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {athleteStep2Programs.map((program, index) => (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setHoveredStep(2)}
                        onHoverEnd={() => setHoveredStep(null)}
                        className={`bg-white p-8 ${
                          program.elevation === 'premium'
                            ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] scale-[1.02] border-2 border-black'
                            : 'shadow-lg'
                        } transition-all duration-300 hover:shadow-xl`}
                      >
                        {program.elevation === 'premium' && (
                          <span className="inline-block bg-black text-white text-[10px] uppercase tracking-wider px-3 py-1 mb-4">
                            {program.focus}
                          </span>
                        )}
                        <h3 className="text-2xl font-black mb-3">{program.name}</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{program.description}</p>
                        <div className="mb-6">
                          <span className="text-4xl font-black">{program.price}</span>
                          <span className="text-gray-500">{program.period}</span>
                        </div>
                        {program.elevation !== 'premium' && (
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-6">{program.focus}</p>
                        )}
                        <motion.button
                          whileHover={{ y: 2 }}
                          whileTap={{ y: 4 }}
                          className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                        >
                          Select Plan
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Directional Arrow to Step 3 */}
                <motion.div
                  className="flex justify-center mt-20"
                  animate={{ opacity: hoveredStep === 2 ? 1 : 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-300"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </section>

              {/* ATHLETE STEP 3: Elite Strategy Stack */}
              <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
                      Step 3 — Elite Outcomes
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
                      The Elite Strategy Stack
                    </h2>
                    <p className="text-gray-500">Add Recruiting & Draft Prep</p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {athleteStep3Programs.map((program, index) => (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white p-8 relative ${
                          program.elevation === 'pinnacle'
                            ? 'shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] border-2 border-black'
                            : program.elevation === 'elite'
                            ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200'
                            : 'shadow-lg border border-gray-100'
                        } transition-all duration-300 hover:shadow-2xl`}
                      >
                        {program.badge === 'star' && (
                          <div className="absolute -top-3 -right-3 w-10 h-10 bg-black flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </div>
                        )}
                        <h3 className="text-2xl font-black mb-3">{program.name}</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{program.description}</p>
                        {program.note && (
                          <p className="text-xs text-gray-400 mb-4">{program.note}</p>
                        )}
                        <div className="mb-6 flex items-baseline gap-3">
                          <span className={`font-black ${program.elevation === 'pinnacle' ? 'text-5xl' : 'text-4xl'}`}>
                            {program.price}
                          </span>
                          <span className="text-gray-500">{program.period}</span>
                          {program.stat && (
                            <span className="text-lg font-bold text-gray-400">{program.stat}</span>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ y: 2 }}
                          whileTap={{ y: 4 }}
                          animate={program.elevation === 'special' ? { opacity: [0.7, 1, 0.7] } : {}}
                          transition={program.elevation === 'special' ? { duration: 2, repeat: Infinity } : {}}
                          className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                        >
                          {program.cta || 'Select Plan'}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="coaches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* COACH STEP 1: The Gated Foundation */}
              <section className="relative bg-[#0d0d0d] py-24 overflow-hidden">
                {/* Noise texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
                  >
                    Mandatory Step 1
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
                  >
                    Coaches Experience
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/60 mb-10"
                  >
                    Shadow the method.
                  </motion.p>

                  {/* Gatekeeper Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white text-black p-8 mb-10 max-w-2xl mx-auto"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Application Required</p>
                    <p className="text-base md:text-lg font-medium">
                      FIT IS NOT GUARANTEED. This is a mutual evaluation.
                    </p>
                  </motion.div>

                  {/* Key Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/80 mb-12"
                  >
                    <span className="text-sm">2–5 Days</span>
                    <span className="text-white/30">|</span>
                    <span className="text-sm"><strong className="text-white">$500</strong>/day</span>
                    <span className="text-white/30">|</span>
                    <span className="text-sm">Full Immersion</span>
                  </motion.div>

                  {/* CTA with push effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={{ y: 2 }}
                      whileTap={{ y: 4 }}
                      className="bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition-shadow"
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                </div>
              </section>

              {/* COACH STEPS 2-4: Sequential Pathway */}
              <section className="bg-gray-50 py-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
                      The Partnership Sequence
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight">
                      After Coaches Experience
                    </h2>
                  </motion.div>

                  <div className="space-y-8">
                    {coachPrograms.map((program, index) => (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative"
                      >
                        {/* Connecting Arrow */}
                        {index > 0 && (
                          <div className="absolute -top-6 left-12 w-0.5 h-6 bg-gray-300" />
                        )}

                        <div
                          className={`bg-white p-8 flex flex-col md:flex-row md:items-center gap-6 relative ${
                            program.elevation === 'pinnacle'
                              ? 'shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] border-2 border-black'
                              : 'shadow-lg border border-gray-100'
                          } transition-all duration-300 hover:shadow-2xl group`}
                        >
                          {/* Step Number */}
                          <div className="flex-shrink-0 w-24 h-24 bg-black text-white flex items-center justify-center">
                            <span className="text-4xl font-black">{program.step}</span>
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-black">{program.name}</h3>
                              {program.badge === 'shield' && (
                                <div className="w-8 h-8 bg-black flex items-center justify-center">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                          </div>

                          {/* Price & CTA */}
                          <div className="flex-shrink-0 text-right">
                            {program.note && (
                              <p className="text-xs text-gray-400 mb-1">{program.note}</p>
                            )}
                            <p className={`font-black mb-3 ${program.elevation === 'pinnacle' ? 'text-4xl' : 'text-3xl'}`}>
                              {program.price}<span className="text-lg font-normal text-gray-500">{program.period}</span>
                            </p>
                            <motion.button
                              whileHover={{ y: 2 }}
                              whileTap={{ y: 4 }}
                              className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </div>

                        {/* Arrow to next step */}
                        {index < coachPrograms.length - 1 && (
                          <div className="flex justify-start pl-12 mt-2">
                            <motion.div
                              initial={{ opacity: 0.3 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              className="text-gray-300 group-hover:text-black transition-colors"
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                              </svg>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
