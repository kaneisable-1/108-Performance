'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon108, type Icon108Name } from './Icon108';
import { usePathFinder } from '@/context/PathFinderContext';

type UserType = 'athlete' | 'parent' | 'coach' | null;
type LocationType = 'local' | 'non-local' | null;
type TravelFrequency = 'quarterly' | 'once' | 'cant-travel' | null;
type CoachGoal = 'learn' | 'host' | 'mentorship' | 'license' | null;

type Step = 'user-type' | 'location' | 'travel' | 'coach-programs' | 'recommendation';

const coachPrograms = [
  {
    id: 'learn' as const,
    title: 'Coaches Experience',
    subtitle: 'A day in our lab',
    price: '$500/day',
    description: 'See why cookie-cutter doesn\'t work. Watch. Ask questions. Learn the process.',
    href: '/programs/coaches-experience',
    tag: 'Start Here',
  },
  {
    id: 'host' as const,
    title: 'Host a Tour',
    subtitle: 'Bring 108 to your athletes',
    price: '$500/athlete',
    description: '2-day camp at your facility. Your athletes get The Experience, you learn the system.',
    href: '/programs/host-tour',
    tag: 'Step 2',
  },
  {
    id: 'mentorship' as const,
    title: 'Coaches Mentorship',
    subtitle: 'Ongoing development',
    price: '$297/mo',
    description: 'Weekly calls, video review, curriculum access. The search doesn\'t end.',
    href: '/programs/coaches-mentorship',
    tag: 'Step 3',
  },
  {
    id: 'license' as const,
    title: 'Powered by 108',
    subtitle: 'License the system',
    price: '$20,000/year',
    description: 'Full curriculum, branding, ongoing support. Make it yours.',
    href: '/programs/powered-by-108',
    tag: 'Licensing',
  },
];

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

export function PathFinder() {
  const { isOpen, preSelectedUserType, openPathFinder, closePathFinder } = usePathFinder();
  const [step, setStep] = useState<Step>('user-type');
  const [userType, setUserType] = useState<UserType>(null);
  const [location, setLocation] = useState<LocationType>(null);
  const [travelFrequency, setTravelFrequency] = useState<TravelFrequency>(null);

  // Handle pre-selected user type from context
  useEffect(() => {
    if (isOpen && preSelectedUserType) {
      setUserType(preSelectedUserType);
      if (preSelectedUserType === 'athlete') {
        setStep('location');
      } else if (preSelectedUserType === 'coach') {
        setStep('coach-programs');
      } else {
        setStep('recommendation');
      }
    }
  }, [isOpen, preSelectedUserType]);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === 'athlete') {
      setStep('location');
    } else if (type === 'coach') {
      setStep('coach-programs');
    } else {
      setStep('recommendation');
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

  const handleClose = () => {
    closePathFinder();
    setTimeout(() => {
      setStep('user-type');
      setUserType(null);
      setLocation(null);
      setTravelFrequency(null);
    }, 300);
  };

  const getRecommendation = (): Recommendation => {
    if (userType === 'athlete') {
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
    } else if (userType === 'parent') {
      return {
        title: 'The 108 Experience',
        description: 'We understand your child before we instruct them. Human first. Athlete second.',
        price: 'From $2,000',
        href: '/programs/experience',
        secondary: {
          title: 'Questions first?',
          description: "Schedule a call. We'll explain how we think.",
          price: 'Free',
          href: '/contact',
        },
      };
    } else {
      return {
        title: 'Coaches Experience',
        description: 'A day in the lab. See why cookie-cutter doesn\'t work. Ask anything.',
        price: '$500/day',
        href: '/programs/coaches-experience',
        secondary: {
          title: 'Ready for ongoing development?',
          description: 'Coaches Mentorship. The search doesn\'t end.',
          price: 'From $297/mo',
          href: '/programs/coaches-mentorship',
        },
      };
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 'user-type': return 'Find Your Path';
      case 'location': return 'Your Location';
      case 'travel': return 'Travel Frequency';
      case 'coach-programs': return 'Coaches Programs';
      case 'recommendation': return 'Your Recommendation';
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => openPathFinder()}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          boxShadow: [
            '0 4px 30px rgba(255,255,255,0.2)',
            '0 8px 50px rgba(255,255,255,0.4)',
            '0 4px 30px rgba(255,255,255,0.2)',
          ]
        }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          boxShadow: {
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }
        }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 50px rgba(255,255,255,0.5)' }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-8 right-8 z-50 bg-white text-black px-8 py-5 flex items-center gap-4 shadow-2xl hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-bold uppercase tracking-wider">Find Your Path</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full animate-pulse" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[440px] sm:max-h-[650px] z-50 bg-[#0a0a0a] border border-white/20 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {step !== 'user-type' && (
                    <button
                      onClick={handleBack}
                      className="p-1.5 hover:bg-white/10 transition-colors -ml-1 rounded"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">108 Performance</p>
                    <h3 className="text-lg font-bold text-white">{getStepTitle()}</h3>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 transition-colors rounded"
                >
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: User Type */}
                  {step === 'user-type' && (
                    <motion.div
                      key="user-type"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      <p className="text-white/70 text-sm mb-6">What brings you to 108?</p>

                      {[
                        { id: 'athlete' as const, title: "I'm an athlete", subtitle: 'Training for myself', icon: 'power-vector' as const },
                        { id: 'parent' as const, title: "I'm a parent", subtitle: 'Looking for my child', icon: 'kinetic-chain' as const },
                        { id: 'coach' as const, title: "I'm a coach", subtitle: 'Level up my coaching', icon: 'target' as const },
                      ].map((option) => (
                        <motion.button
                          key={option.id}
                          onClick={() => handleUserTypeSelect(option.id)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full p-4 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all flex items-center gap-4 text-left group"
                        >
                          <div className="w-12 h-12 border border-white/30 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/50 transition-colors">
                            <Icon108 name={option.icon} size={24} />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">{option.title}</p>
                            <p className="text-white/50 text-sm">{option.subtitle}</p>
                          </div>
                          <svg className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {/* Step 2: Location (Athletes only) */}
                  {step === 'location' && (
                    <motion.div
                      key="location"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-3"
                    >
                      <p className="text-white/70 text-sm mb-6">Are you in the Knoxville area?</p>

                      <motion.button
                        onClick={() => handleLocationSelect('local')}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full p-5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-left group"
                      >
                        <p className="text-white font-semibold text-lg">Yes, I'm local</p>
                        <p className="text-white/50 text-sm mt-1">I can train in Knoxville regularly</p>
                      </motion.button>

                      <motion.button
                        onClick={() => handleLocationSelect('non-local')}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full p-5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-left group"
                      >
                        <p className="text-white font-semibold text-lg">No, I'll travel in</p>
                        <p className="text-white/50 text-sm mt-1">I'm coming from out of town</p>
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Step 3: Travel Frequency (Non-local athletes) */}
                  {step === 'travel' && (
                    <motion.div
                      key="travel"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-3"
                    >
                      <p className="text-white/70 text-sm mb-6">How often can you travel to Knoxville?</p>

                      <motion.button
                        onClick={() => handleTravelSelect('quarterly')}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full p-5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-left group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-lg">Every 2 months</p>
                            <p className="text-white/50 text-sm mt-1">6 visits per year for hands-on refinement</p>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider bg-white text-black px-2 py-1 font-semibold">Best</span>
                        </div>
                      </motion.button>

                      <motion.button
                        onClick={() => handleTravelSelect('once')}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full p-5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-left group"
                      >
                        <p className="text-white font-semibold text-lg">Once to start</p>
                        <p className="text-white/50 text-sm mt-1">Initial visit, then train remotely</p>
                      </motion.button>

                      <motion.button
                        onClick={() => handleTravelSelect('cant-travel')}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full p-5 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-left group"
                      >
                        <p className="text-white font-semibold text-lg">Can't travel</p>
                        <p className="text-white/50 text-sm mt-1">Need fully remote options</p>
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Step: Coach Programs */}
                  {step === 'coach-programs' && (
                    <motion.div
                      key="coach-programs"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-3"
                    >
                      <p className="text-white/70 text-sm mb-6">Choose your path to level up your coaching.</p>

                      {coachPrograms.map((program, index) => (
                        <motion.a
                          key={program.id}
                          href={program.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`w-full p-4 border transition-all text-left group block ${
                            program.tag === 'Start Here'
                              ? 'border-white/40 bg-white/5 hover:border-white/60'
                              : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-white font-semibold">{program.title}</p>
                                {program.tag === 'Start Here' && (
                                  <span className="text-[9px] uppercase tracking-wider bg-white text-black px-2 py-0.5 font-semibold">
                                    {program.tag}
                                  </span>
                                )}
                              </div>
                              <p className="text-white/50 text-xs mb-2">{program.subtitle}</p>
                              <p className="text-white/40 text-xs">{program.description}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-white font-semibold text-sm">{program.price}</p>
                              {program.tag !== 'Start Here' && (
                                <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">{program.tag}</p>
                              )}
                            </div>
                          </div>
                        </motion.a>
                      ))}

                      <div className="pt-4 border-t border-white/10 mt-6">
                        <p className="text-white/40 text-xs text-center">
                          Not sure where to start? <a href="/contact" className="text-white hover:underline">Talk to us</a>
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Recommendation */}
                  {step === 'recommendation' && (
                    <motion.div
                      key="recommendation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {(() => {
                        const rec = getRecommendation();
                        return (
                          <>
                            {/* Primary Recommendation */}
                            <div className="border border-white/30 p-6 bg-white/5">
                              <div className="flex items-center gap-3 mb-4">
                                {rec.tag && (
                                  <span className="text-[10px] uppercase tracking-wider bg-white text-black px-2 py-1 font-semibold">
                                    {rec.tag}
                                  </span>
                                )}
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                                  Recommended
                                </p>
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">{rec.title}</h4>
                              <p className="text-white/70 text-sm mb-4">{rec.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-white/50 text-sm font-medium">{rec.price}</span>
                                <a
                                  href={rec.href}
                                  className="bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>

                            {/* Secondary Option */}
                            {rec.secondary && (
                              <div className="border border-white/20 p-4">
                                <p className="text-white/70 text-sm font-medium mb-1">{rec.secondary.title}</p>
                                <p className="text-white/50 text-xs mb-3">{rec.secondary.description}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-white/40 text-xs">{rec.secondary.price}</span>
                                  <a
                                    href={rec.secondary.href}
                                    className="text-white text-xs font-semibold hover:underline"
                                  >
                                    View →
                                  </a>
                                </div>
                              </div>
                            )}

                            {/* Help Text */}
                            <p className="text-white/40 text-xs text-center">
                              Not sure? <a href="/contact" className="text-white hover:underline">Talk to us</a>
                            </p>
                          </>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
