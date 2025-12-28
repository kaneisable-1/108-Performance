'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '../ui/AnimatedSection';

type UserType = 'athlete' | 'coach' | null;
type LocationType = 'local' | 'non-local' | null;
type TravelFrequency = 'quarterly' | 'once' | 'cant-travel' | null;
type Step = 'user-type' | 'location' | 'travel' | 'coach-programs' | 'recommendation';

interface Recommendation {
  title: string;
  description: string;
  price: string;
  href: string;
  tag?: string;
  secondary?: {
    title: string;
    description: string;
    price: string;
    href: string;
  };
}

const coachPrograms = [
  {
    id: 'learn',
    title: 'Coaches Experience',
    description: 'A day in our lab. See why cookie-cutter doesn\'t work.',
    price: '$500/day',
    href: '/programs/coaches-experience',
    tag: 'Start Here',
  },
  {
    id: 'host',
    title: 'Host a Tour',
    description: '2-day camp at your facility. Your athletes get The Experience.',
    price: '$500/athlete',
    href: '/programs/host-tour',
  },
  {
    id: 'mentorship',
    title: 'Coaches Mentorship',
    description: 'Weekly calls, video review, curriculum access.',
    price: '$297/mo',
    href: '/programs/coaches-mentorship',
  },
  {
    id: 'license',
    title: 'Powered by 108',
    description: 'Full curriculum, branding, ongoing support.',
    price: '$20,000/year',
    href: '/programs/powered-by-108',
    tag: 'Licensing',
  },
];

export function FindYourPath() {
  const [step, setStep] = useState<Step>('user-type');
  const [userType, setUserType] = useState<UserType>(null);
  const [location, setLocation] = useState<LocationType>(null);
  const [travelFrequency, setTravelFrequency] = useState<TravelFrequency>(null);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === 'athlete') {
      setStep('location');
    } else {
      setStep('coach-programs');
    }
  };

  const handleLocationSelect = (loc: LocationType) => {
    setLocation(loc);
    if (loc === 'local') {
      setStep('recommendation');
    } else {
      setStep('travel');
    }
  };

  const handleTravelSelect = (freq: TravelFrequency) => {
    setTravelFrequency(freq);
    setStep('recommendation');
  };

  const handleBack = () => {
    if (step === 'recommendation') {
      if (userType === 'athlete' && location === 'non-local') {
        setStep('travel');
      } else if (userType === 'athlete') {
        setStep('location');
      } else {
        setStep('user-type');
      }
    } else if (step === 'travel') {
      setStep('location');
    } else if (step === 'location') {
      setStep('user-type');
    } else if (step === 'coach-programs') {
      setStep('user-type');
    }
  };

  const handleReset = () => {
    setStep('user-type');
    setUserType(null);
    setLocation(null);
    setTravelFrequency(null);
  };

  const getRecommendation = (): Recommendation => {
    if (location === 'local') {
      return {
        title: 'Tri-Star Membership',
        description: 'Unlimited training at our Knoxville facility. Show up. Get better.',
        price: '$499/mo',
        href: '/programs/tri-star',
        tag: 'Local Access',
        secondary: {
          title: 'First: The 108 Experience',
          description: 'Everyone starts here. 2-5 days to find YOUR system.',
          price: 'From $2,000',
          href: '/programs/experience',
        },
      };
    } else if (travelFrequency === 'quarterly') {
      return {
        title: 'Virtual Pro',
        description: 'Daily remote coaching + 6 trips to Knoxville per year. The best of both.',
        price: '$1,000/mo',
        href: '/programs/virtual-pro',
        tag: 'Best Value',
        secondary: {
          title: 'First: The 108 Experience',
          description: 'Everyone starts here. 2-5 days to find YOUR system.',
          price: 'From $2,000',
          href: '/programs/experience',
        },
      };
    } else if (travelFrequency === 'once') {
      return {
        title: 'Virtual Experience',
        description: 'Your coach in your pocket. Daily programming, video feedback, direct access.',
        price: '$550/mo',
        href: '/programs/virtual',
        tag: 'Remote',
        secondary: {
          title: 'First: The 108 Experience',
          description: 'Start with 2-5 days in Knoxville to build YOUR system.',
          price: 'From $2,000',
          href: '/programs/experience',
        },
      };
    } else {
      return {
        title: 'Virtual Experience',
        description: 'Full remote coaching. Daily programming, video feedback, direct coach access.',
        price: '$550/mo',
        href: '/programs/virtual',
        tag: 'Fully Remote',
        secondary: {
          title: 'Consider: A Tour Experience',
          description: 'We bring 108 to you. 2-day camps in select cities.',
          price: '$500',
          href: '/programs/tour',
        },
      };
    }
  };

  const getProgress = () => {
    switch (step) {
      case 'user-type': return 1;
      case 'location': return 2;
      case 'travel': return 3;
      case 'coach-programs': return 2;
      case 'recommendation': return 4;
    }
  };

  const totalSteps = userType === 'coach' ? 2 : 4;

  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
              Find Your Path
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              {step === 'recommendation' ? 'Your Recommendation' :
               step === 'coach-programs' ? 'Coaches Programs' :
               'Let\'s find the right fit.'}
            </h2>
          </div>
        </AnimatedSection>

        <div className="min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 1: User Type */}
            {step === 'user-type' && (
              <motion.div
                key="user-type"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-14">
                  What brings you to 108?
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                  <button
                    onClick={() => handleUserTypeSelect('athlete')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-2xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">I'm an Athlete</p>
                    <p className="text-white/60 text-sm">Training for myself or my child</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                      Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  <button
                    onClick={() => handleUserTypeSelect('coach')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-2xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">I'm a Coach</p>
                    <p className="text-white/60 text-sm">Level up my coaching</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                      Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Location (Athletes) */}
            {step === 'location' && (
              <motion.div
                key="location"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-14">
                  Are you in the Knoxville area?
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                  <button
                    onClick={() => handleLocationSelect('local')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Yes, I'm local</p>
                    <p className="text-white/60 text-sm">I can train in Knoxville regularly</p>
                  </button>
                  <button
                    onClick={() => handleLocationSelect('non-local')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">No, I'll travel in</p>
                    <p className="text-white/60 text-sm">I'm coming from out of town</p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Travel Frequency */}
            {step === 'travel' && (
              <motion.div
                key="travel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-14">
                  How often can you travel to Knoxville?
                </p>
                <div className="space-y-4 max-w-xl mx-auto">
                  <button
                    onClick={() => handleTravelSelect('quarterly')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Every 2 months</p>
                        <p className="text-white/60 text-sm">6 visits per year for hands-on refinement</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold rounded-full">Best</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleTravelSelect('once')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Once to start</p>
                    <p className="text-white/60 text-sm">Initial visit, then train remotely</p>
                  </button>
                  <button
                    onClick={() => handleTravelSelect('cant-travel')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Can't travel</p>
                    <p className="text-white/60 text-sm">Need fully remote options</p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Coach Programs */}
            {step === 'coach-programs' && (
              <motion.div
                key="coach-programs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-10">
                  Choose your path to level up your coaching.
                </p>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {coachPrograms.map((program) => (
                    <Link
                      key={program.id}
                      href={program.href}
                      className={`p-6 border transition-all text-left block ${
                        program.tag === 'Start Here'
                          ? 'border-white/40 bg-white/5 hover:border-white/60'
                          : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="text-lg font-bold text-white">{program.title}</p>
                        {program.tag && (
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-1 font-bold flex-shrink-0 ${
                            program.tag === 'Start Here' ? 'bg-white text-black' : 'bg-white/20 text-white'
                          }`}>
                            {program.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-sm mb-3">{program.description}</p>
                      <p className="text-white font-semibold">{program.price}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Recommendation */}
            {step === 'recommendation' && (
              <motion.div
                key="recommendation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                {(() => {
                  const rec = getRecommendation();
                  return (
                    <div className="max-w-xl mx-auto">
                      {/* Primary Recommendation */}
                      <div className="border border-white/30 p-8 bg-white/5 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          {rec.tag && (
                            <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold">
                              {rec.tag}
                            </span>
                          )}
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                            Recommended for you
                          </p>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{rec.title}</h3>
                        <p className="text-white/70 mb-6">{rec.description}</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <span className="text-2xl font-black text-white">{rec.price}</span>
                          <Link
                            href={rec.href}
                            className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>

                      {/* Secondary */}
                      {rec.secondary && (
                        <Link
                          href={rec.secondary.href}
                          className="block border border-white/20 p-6 hover:border-white/40 hover:bg-white/5 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-semibold mb-1">{rec.secondary.title}</p>
                              <p className="text-white/50 text-sm">{rec.secondary.description}</p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                              <p className="text-white/70 text-sm">{rec.secondary.price}</p>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-6">
            {step !== 'user-type' && step !== 'coach-programs' && (
              <button
                onClick={handleBack}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                ← Back
              </button>
            )}
            {step === 'coach-programs' && (
              <button
                onClick={handleBack}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                ← Back
              </button>
            )}

            {/* Progress Dots */}
            {step !== 'coach-programs' && (
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i < getProgress() ? 'bg-white' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            )}

            {step === 'recommendation' && (
              <button
                onClick={handleReset}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
