'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';

// Icons for each phase
const HumanIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <circle cx="24" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M24 24v12M16 44l8-8 8 8M12 32h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const AthleteIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const PlayerIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M24 14v-6M24 40v-6M34 24h6M8 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M31 17l4-4M13 35l4-4M31 31l4 4M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const phases = [
  {
    id: 'human',
    number: '01',
    title: 'Human',
    tagline: 'Map the mind first.',
    description: 'We decode how you think and learn. Your internal language. Your wiring. Coaching that speaks your frequency.',
    details: [
      'Nervous system as foundation',
      'Identify your unique processing style',
      'Bypass hardwired motor programs',
      'Reclaim authority over your career',
    ],
    icon: HumanIcon,
    image: '/method-human.jpg',
  },
  {
    id: 'athlete',
    number: '02',
    title: 'Athlete',
    tagline: 'Build the engine.',
    description: 'We study YOUR movement patterns—not a textbook model. Rotation, tension, compression. Until your body anchors and snaps on its own.',
    details: [
      'No factory-mold mechanics',
      'Work with your physiology',
      'Biotensegrity & spinal engine',
      'Unstable loads for self-organization',
    ],
    icon: AthleteIcon,
    image: '/method-athlete.jpg',
  },
  {
    id: 'player',
    number: '03',
    title: 'Player',
    tagline: 'Brand the output.',
    description: "Skill is the wrapper on elite movement. When the pattern clicks, the game gets simple. The staying is the proof.",
    details: [
      'Skills as visible results',
      'Top-down sequencing',
      'Data matches the feel',
      'System clicks and sticks',
    ],
    icon: PlayerIcon,
    image: '/method-player.jpg',
  },
];

export function Method() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);

  return (
    <section id="method" className="bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 lg:mb-24">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
              The 108 Way
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Human. Athlete. Player.
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
              Most programs start with your sport. We start with you.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline Visual - Desktop */}
        <div className="hidden lg:block mb-16">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />

              {/* Phase Indicators */}
              <div className="flex justify-between items-center relative">
                {phases.map((phase, index) => (
                  <motion.button
                    key={phase.id}
                    onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-white"
                    />

                    {/* Icon Container */}
                    <div
                      className={`relative w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activePhase === phase.id || hoveredPhase === phase.id
                          ? 'border-white bg-white/10'
                          : 'border-white/20 bg-black'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 transition-colors duration-300 ${
                          activePhase === phase.id || hoveredPhase === phase.id
                            ? 'text-white'
                            : 'text-white/40'
                        }`}
                      >
                        <phase.icon />
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
                        activePhase === phase.id || hoveredPhase === phase.id
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent text-white/30 border-white/20'
                      }`}
                    >
                      {phase.number}
                    </div>

                    {/* Label */}
                    <div className="mt-4 text-center">
                      <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                        {phase.title}
                      </p>
                      <p className="text-xs text-white/40 mt-1">
                        {phase.tagline}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Phase Cards - All Screens */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <AnimatedSection key={phase.id} delay={0.1 * index}>
              <motion.div
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  activePhase === phase.id ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                onMouseEnter={() => setHoveredPhase(phase.id)}
                onMouseLeave={() => setHoveredPhase(null)}
                layout
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 min-h-[320px] flex flex-col justify-end">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white text-black">
                      {phase.number}
                    </div>
                    <div className="w-8 h-8 text-white/60">
                      <phase.icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 uppercase tracking-wide">
                    {phase.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-medium mb-3 text-white/70">
                    {phase.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {activePhase === phase.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <ul className="space-y-2">
                            {phase.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="flex items-center gap-2 text-white/50 text-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/50" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    animate={{ rotate: activePhase === phase.id ? 180 : 0 }}
                  >
                    <svg
                      className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-16 lg:mt-24">
            <p className="text-white/40 text-sm mb-6 max-w-xl mx-auto">
              When these three layers align, the system clicks and sticks. The staying is the proof.
            </p>
            <a
              href="/programs/experience"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-full"
            >
              Experience the Method
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
