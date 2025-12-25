'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Icon108 } from '../ui/Icon108';

type PathType = 'athlete' | 'coach' | null;

const athleteSteps = [
  {
    step: 1,
    label: 'The Gate',
    name: 'The 108 Experience',
    price: 'From $2,000',
    duration: '2-5 days',
    description: 'Everyone starts here. Your personal diagnostic and system design.',
    href: '/programs/experience',
    icon: 'diamond' as const,
    required: true,
  },
  {
    step: 2,
    label: 'Choose Your Path',
    options: [
      { name: 'Tri-Star', price: '$499/mo', tag: 'In-Person', href: '/programs/tri-star', icon: 'sequence-bars' as const },
      { name: 'Virtual Experience', price: '$550/mo', tag: 'Remote', href: '/programs/virtual', icon: 'wave' as const },
      { name: 'Virtual Pro', price: '$1,000/mo', tag: 'Best Value', href: '/programs/virtual-pro', icon: 'phi-circles' as const },
    ],
  },
  {
    step: 3,
    label: 'Level Up',
    options: [
      { name: 'College Prep', price: '$1,250/mo', tag: 'Recruiting', href: '/programs/college-prep', icon: 'target' as const },
      { name: 'Draft Prep', price: '$1,500/mo', tag: 'Draft', href: '/programs/draft-prep', icon: 'power-vector' as const },
    ],
  },
  {
    step: 4,
    label: 'Go Pro',
    name: 'Pro Experience',
    price: 'Contact Us',
    description: 'MiLB / MLB level training and development.',
    href: '/programs/pro-experience',
    icon: 'motion-arc' as const,
  },
];

const coachSteps = [
  {
    step: 1,
    label: 'The Gate',
    name: 'Coaches Experience',
    price: '$500/day',
    duration: '1-2 days',
    description: 'See our methods. Ask anything. Experience the difference.',
    href: '/programs/coaches-experience',
    icon: 'target' as const,
    required: true,
  },
  {
    step: 2,
    label: 'Continue',
    name: 'Host a Tour',
    price: '$500/athlete',
    description: 'Bring athletes to 108. We handle the rest.',
    href: '/programs/host-tour',
    icon: 'kinetic-chain' as const,
  },
  {
    step: 3,
    label: 'Go Deeper',
    name: 'Coaches Mentorship',
    price: 'From $297/mo',
    description: 'Ongoing development and certification.',
    href: '/programs/coaches-mentorship',
    icon: 'spiral' as const,
  },
  {
    step: 4,
    label: 'Partner',
    name: 'Powered by 108',
    price: '$20,000 Year 1',
    description: 'License our methodology. Transform your facility.',
    href: '/programs/powered-by-108',
    icon: 'golden-grid' as const,
  },
];

export function BinaryChoice() {
  const [selectedPath, setSelectedPath] = useState<PathType>(null);

  const steps = selectedPath === 'athlete' ? athleteSteps : selectedPath === 'coach' ? coachSteps : [];

  return (
    <section className="py-fib-89 lg:py-fib-144 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-fib-55">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-fib-13">
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-fib-13">
              Everyone starts somewhere.
            </h2>
          </div>
        </AnimatedSection>

        {/* Binary Choice Cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-fib-21 max-w-4xl mx-auto mb-fib-55">
            {/* Athlete Card */}
            <motion.button
              onClick={() => setSelectedPath(selectedPath === 'athlete' ? null : 'athlete')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-fib-34 border text-left transition-all ${
                selectedPath === 'athlete'
                  ? 'border-white bg-white/10'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className="flex items-center gap-fib-13 mb-fib-13">
                <Icon108 name="spiral" size={32} className={selectedPath === 'athlete' ? 'text-white' : 'text-white/40'} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  For Athletes
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-fib-8">I'm an Athlete</h3>
              <p className="text-white/50 text-sm">Train with us. Find your system.</p>
            </motion.button>

            {/* Coach Card */}
            <motion.button
              onClick={() => setSelectedPath(selectedPath === 'coach' ? null : 'coach')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-fib-34 border text-left transition-all ${
                selectedPath === 'coach'
                  ? 'border-white bg-white/10'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className="flex items-center gap-fib-13 mb-fib-13">
                <Icon108 name="target" size={32} className={selectedPath === 'coach' ? 'text-white' : 'text-white/40'} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  For Coaches
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-fib-8">I'm a Coach</h3>
              <p className="text-white/50 text-sm">Learn from us. Level up your coaching.</p>
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Expanded Steps */}
        <AnimatePresence mode="wait">
          {selectedPath && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="max-w-5xl mx-auto">
                {/* Gated Steps */}
                <div className="space-y-fib-21">
                  {steps.map((step, index) => (
                    <AnimatedSection key={step.step} delay={0.1 * index}>
                      {'options' in step ? (
                        /* Multi-option step */
                        <div className={`p-fib-21 border transition-all ${
                          index === 0 ? 'border-white/40 bg-white/5' : 'border-white/10 opacity-70'
                        }`}>
                          <div className="flex items-center gap-fib-13 mb-fib-13">
                            <span className="text-4xl font-black text-white/20">0{step.step}</span>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                                Step {step.step}
                              </p>
                              <p className="text-sm font-semibold text-white">{step.label}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-3 gap-fib-13">
                            {step.options.map((option) => (
                              <Link
                                key={option.href}
                                href={option.href}
                                className="p-fib-13 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
                              >
                                <div className="flex items-center gap-fib-8 mb-fib-8">
                                  <Icon108 name={option.icon} size={16} className="text-white/30 group-hover:text-white/60" />
                                  <span className="text-[9px] uppercase tracking-wider text-white/30">{option.tag}</span>
                                </div>
                                <p className="font-semibold text-white mb-1">{option.name}</p>
                                <p className="text-xs text-white/40">{option.price}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Single-option step (Gate or Final) */
                        <div className={`p-fib-21 border transition-all ${
                          step.required ? 'border-white bg-white/5 shadow-lg' : 'border-white/10 opacity-70'
                        }`}>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-fib-21">
                            <div className="flex items-start gap-fib-21">
                              <span className={`text-5xl font-black ${step.required ? 'text-white/40' : 'text-white/20'}`}>
                                0{step.step}
                              </span>
                              <div>
                                <div className="flex items-center gap-fib-13 mb-fib-8">
                                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                                    {step.required ? 'Everyone Starts Here' : `Step ${step.step}`}
                                  </p>
                                  {step.required && (
                                    <span className="text-[9px] uppercase tracking-wider bg-white text-black px-2 py-0.5">
                                      Required
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-fib-13 mb-fib-8">
                                  <Icon108 name={step.icon} size={24} className={step.required ? 'text-white' : 'text-white/40'} />
                                  <h4 className="text-xl font-bold text-white">{step.name}</h4>
                                </div>
                                <p className="text-white/50 text-sm max-w-md mb-fib-8">
                                  {step.description}
                                </p>
                                <div className="flex items-center gap-fib-21 text-sm">
                                  <span className="text-white/70">{step.price}</span>
                                  {step.duration && (
                                    <span className="text-white/40">{step.duration}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Link
                              href={step.href}
                              className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                step.required
                                  ? 'bg-white text-black hover:bg-gray-100'
                                  : 'border border-white/30 text-white hover:bg-white/10'
                              }`}
                            >
                              {step.required ? 'Book Experience' : 'Learn More'}
                            </Link>
                          </div>
                        </div>
                      )}
                    </AnimatedSection>
                  ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-white/30 text-xs mt-fib-34">
                  Every path starts with the {selectedPath === 'athlete' ? '108 Experience' : 'Coaches Experience'}.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
