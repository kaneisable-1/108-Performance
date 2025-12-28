'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';

const phases = [
  {
    number: '01',
    title: 'The Human',
    subtitle: 'Neurological Foundation',
    description: 'How do you think? How do you learn? What cues already click for you? Your wiring is the foundation—everything builds from there.',
    expandedContent: {
      intro: 'The first layer focuses on how you think and learn before mechanics are ever addressed.',
      points: [
        'We prioritize the nervous system as the foundation',
        'We identify how you process information and determine which specific cues resonate with your unique internal language',
        'The goal is to bypass hardwired automatic motor programs and cognitive biases',
        'We help you reclaim authority over your own career',
      ],
    },
    image: '/method-human.jpg',
    imageAlt: 'Coach and athlete in conversation',
    imagePosition: 'left' as const,
  },
  {
    number: '02',
    title: 'The Athlete',
    subtitle: 'Biological Architecture',
    description: "How does your body actually move? We study YOUR patterns—not a textbook model. We work with your physiology, not against it.",
    expandedContent: {
      intro: 'Once we understand the human, we study the Athlete to see how the body moves naturally.',
      points: [
        'We reject the "factory mold" of one-size-fits-all mechanics',
        'We work with your specific physiology and joint ranges',
        'We utilize principles of biotensegrity and the spinal engine',
        'We train you to be a "Greyhound" using unstable loads that force your body to self-organize for maximum efficiency',
      ],
    },
    image: '/method-athlete.jpg',
    imageAlt: 'Movement training and analysis',
    imagePosition: 'right' as const,
  },
  {
    number: '03',
    title: 'The Player',
    subtitle: 'Technical Sequencing',
    description: "How do you pitch, swing, throw when it matters? At 7 o'clock. Under pressure. The skills that show up on game day are built on the layers beneath.",
    expandedContent: {
      intro: "The final layer connects the dots between the human's intent, the athlete's movement, and the Player's skills on the field.",
      points: [
        'Skills like pitching, swinging, and throwing are treated as the visible results of the layers beneath them',
        'We focus on top-down sequencing and trunk-to-barrel energy transfer',
        'We ensure that the "real" data matches the "old school" feel',
        'When these three layers are aligned, the system finally clicks and sticks—the staying is the proof',
      ],
    },
    image: '/method-player.jpg',
    imageAlt: 'Sport-specific skill training',
    imagePosition: 'left' as const,
  },
];

export function Method() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const togglePhase = (number: string) => {
    setExpandedPhase(expandedPhase === number ? null : number);
  };

  return (
    <section id="method" className="bg-black text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20 lg:mb-32">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
              The 108 Way
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Human. Athlete. Player.
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Most programs start with your sport. We start with you.
            </p>
          </div>
        </AnimatedSection>

        {/* Alternating Cards */}
        <div className="space-y-24 lg:space-y-32">
          {phases.map((phase, index) => (
            <AnimatedSection key={phase.number} delay={0.1 * index}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                phase.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${
                  phase.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}>
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className={`${
                  phase.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl lg:text-6xl font-black text-white/20">
                      {phase.number}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                    {phase.subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-wide">
                    {phase.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md mb-6">
                    {phase.description}
                  </p>

                  {/* Expand Button */}
                  <button
                    onClick={() => togglePhase(phase.number)}
                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
                  >
                    <span>{expandedPhase === phase.number ? 'Show less' : 'Learn more'}</span>
                    <motion.svg
                      animate={{ rotate: expandedPhase === phase.number ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedPhase === phase.number && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-white/10 mt-6">
                          <p className="text-white/70 text-base mb-4">
                            {phase.expandedContent.intro}
                          </p>
                          <ul className="space-y-3">
                            {phase.expandedContent.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="flex items-start gap-3 text-white/60 text-sm"
                              >
                                <span className="text-white/30 mt-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                                    <circle cx="6" cy="6" r="2" />
                                  </svg>
                                </span>
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
