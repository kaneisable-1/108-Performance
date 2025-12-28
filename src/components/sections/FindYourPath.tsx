'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useCTA } from '@/context/CTAContext';

const stats = [
  { value: '26', label: 'MLB Organizations' },
  { value: '+4 mph', label: 'Avg Velocity Gain' },
  { value: '38%', label: 'Less Elbow Stress' },
];

// Updated types with parent and experience check
type UserType = 'athlete' | 'parent' | 'coach' | null;
type LocationType = 'local' | 'non-local' | null;
type TravelFrequency = 'quarterly' | 'once' | 'cant-travel' | null;
type HasExperience = 'yes' | 'no' | null;
type CoachGoal = 'learn' | 'team' | 'license' | null;
type Step =
  | 'user-type'
  | 'location'
  | 'experience-check'
  | 'travel'
  | 'coach-goal'
  | 'coach-recommendation'
  | 'recommendation';

interface Recommendation {
  title: string;
  description: string;
  price: string;
  href: string;
  tag?: string;
  isPrimary?: boolean;
  secondary?: {
    title: string;
    description: string;
    price: string;
    href: string;
  };
}

export function FindYourPath() {
  const [step, setStep] = useState<Step>('user-type');
  const [userType, setUserType] = useState<UserType>(null);
  const [location, setLocation] = useState<LocationType>(null);
  const [travelFrequency, setTravelFrequency] = useState<TravelFrequency>(null);
  const [hasExperience, setHasExperience] = useState<HasExperience>(null);
  const [coachGoal, setCoachGoal] = useState<CoachGoal>(null);

  const { setUserType: setCTAUserType, setRecommendedPath, setHasCompletedFindYourPath, resetCTAState } = useCTA();

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === 'athlete' || type === 'parent') {
      setStep('location');
    } else {
      setStep('coach-goal');
    }
  };

  const handleLocationSelect = (loc: LocationType) => {
    setLocation(loc);
    setStep('experience-check');
  };

  const handleExperienceSelect = (exp: HasExperience) => {
    setHasExperience(exp);
    if (exp === 'yes') {
      // They've done Experience, ask about travel if non-local
      if (location === 'non-local') {
        setStep('travel');
      } else {
        setStep('recommendation');
      }
    } else {
      // They haven't done Experience - go straight to recommendation (Experience-first)
      setStep('recommendation');
    }
  };

  const handleTravelSelect = (freq: TravelFrequency) => {
    setTravelFrequency(freq);
    setStep('recommendation');
  };

  const handleCoachGoalSelect = (goal: CoachGoal) => {
    setCoachGoal(goal);
    setStep('coach-recommendation');
  };

  const handleBack = () => {
    if (step === 'recommendation') {
      if (hasExperience === 'no') {
        setStep('experience-check');
      } else if (location === 'non-local') {
        setStep('travel');
      } else {
        setStep('experience-check');
      }
    } else if (step === 'travel') {
      setStep('experience-check');
    } else if (step === 'experience-check') {
      setStep('location');
    } else if (step === 'location') {
      setStep('user-type');
    } else if (step === 'coach-goal') {
      setStep('user-type');
    } else if (step === 'coach-recommendation') {
      setStep('coach-goal');
    }
  };

  const handleReset = () => {
    setStep('user-type');
    setUserType(null);
    setLocation(null);
    setTravelFrequency(null);
    setHasExperience(null);
    setCoachGoal(null);
    resetCTAState();
  };

  const getRecommendation = (): Recommendation => {
    // If they haven't done Experience, that's ALWAYS primary
    if (hasExperience === 'no') {
      let afterExperience = '';
      let afterPrice = '';
      let afterHref = '';

      if (location === 'local') {
        afterExperience = 'After your Experience: Tri-Star Membership';
        afterPrice = '$499/mo';
        afterHref = '/programs/tri-star';
      } else if (travelFrequency === 'quarterly' || !travelFrequency) {
        afterExperience = 'After your Experience: Virtual Pro';
        afterPrice = '$1,000/mo';
        afterHref = '/programs/virtual-pro';
      } else {
        afterExperience = 'After your Experience: Virtual Experience';
        afterPrice = '$550/mo';
        afterHref = '/programs/virtual';
      }

      return {
        title: 'The 108 Experience',
        description: '2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you, not a template.',
        price: 'From $2,000',
        href: '/programs/experience',
        tag: 'Required First Step',
        isPrimary: true,
        secondary: {
          title: afterExperience,
          description: 'Your sustained training path after The Experience.',
          price: afterPrice,
          href: afterHref,
        },
      };
    }

    // They HAVE done Experience - show sustained programs
    if (location === 'local') {
      return {
        title: 'Tri-Star Membership',
        description: 'Unlimited training at our Knoxville facility. Show up. Get better. You already have your system—now refine it.',
        price: '$499/mo',
        href: '/programs/tri-star',
        tag: 'Local Access',
        secondary: {
          title: 'Level Up: College Prep',
          description: 'Add recruiting support and showcase preparation.',
          price: '$1,250/mo',
          href: '/programs/college-prep',
        },
      };
    } else if (travelFrequency === 'quarterly') {
      return {
        title: 'Virtual Pro',
        description: 'Daily remote coaching + 6 trips to Knoxville per year. The best of both worlds for serious athletes.',
        price: '$1,000/mo',
        href: '/programs/virtual-pro',
        tag: 'Best Value',
        secondary: {
          title: 'Level Up: Draft Prep',
          description: 'Add draft positioning and showcase optimization.',
          price: '$1,500/mo',
          href: '/programs/draft-prep',
        },
      };
    } else if (travelFrequency === 'once') {
      return {
        title: 'Virtual Experience',
        description: 'Your coach in your pocket. Daily programming, video feedback, direct access to your assigned coach.',
        price: '$550/mo',
        href: '/programs/virtual',
        tag: 'Remote',
        secondary: {
          title: 'Upgrade: Virtual Pro',
          description: 'Add 6 in-person visits per year for hands-on refinement.',
          price: '$1,000/mo',
          href: '/programs/virtual-pro',
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
          title: 'Consider: Tour Experience',
          description: 'We bring 108 to you. 2-day camps in select cities.',
          price: '$500',
          href: '/programs/tour',
        },
      };
    }
  };

  const getCoachRecommendation = (): Recommendation => {
    if (coachGoal === 'learn') {
      return {
        title: 'Coaches Experience',
        description: 'A day in our lab. See why cookie-cutter doesn\'t work. Understand how we think before you bring it to your athletes.',
        price: '$500/day',
        href: '/programs/coaches-experience',
        tag: 'Start Here',
        isPrimary: true,
        secondary: {
          title: 'After: Coaches Mentorship',
          description: 'Weekly calls, video review, curriculum access.',
          price: '$297/mo',
          href: '/programs/coaches-mentorship',
        },
      };
    } else if (coachGoal === 'team') {
      return {
        title: 'Host a Tour',
        description: 'Bring The 108 Experience to your facility. 2-day camp for your athletes, led by our coaches.',
        price: '$500/athlete',
        href: '/programs/host-tour',
        tag: 'At Your Facility',
        isPrimary: true,
        secondary: {
          title: 'First: Coaches Experience',
          description: 'Understand the system before bringing it to your team.',
          price: '$500/day',
          href: '/programs/coaches-experience',
        },
      };
    } else {
      return {
        title: 'Powered by 108',
        description: 'Full curriculum licensing, branding rights, ongoing support. Build a 108 facility in your market.',
        price: '$20,000/year',
        href: '/programs/powered-by-108',
        tag: 'Licensing',
        isPrimary: true,
        secondary: {
          title: 'Required First: Coaches Experience',
          description: 'All licensing partners start with our Coaches Experience.',
          price: '$500/day',
          href: '/programs/coaches-experience',
        },
      };
    }
  };

  // Update CTA context when reaching recommendation
  useEffect(() => {
    if (step === 'recommendation' || step === 'coach-recommendation') {
      const rec = step === 'recommendation' ? getRecommendation() : getCoachRecommendation();
      setCTAUserType(userType);
      setRecommendedPath({
        title: rec.title,
        href: rec.href,
        price: rec.price,
        ctaText: rec.isPrimary ? 'Book Your Experience' : 'Get Started',
      });
      setHasCompletedFindYourPath(true);
    }
  }, [step, userType, location, travelFrequency, hasExperience, coachGoal]);

  const getProgress = () => {
    if (userType === 'coach') {
      switch (step) {
        case 'user-type': return 1;
        case 'coach-goal': return 2;
        case 'coach-recommendation': return 3;
        default: return 1;
      }
    }
    switch (step) {
      case 'user-type': return 1;
      case 'location': return 2;
      case 'experience-check': return 3;
      case 'travel': return 4;
      case 'recommendation': return 5;
      default: return 1;
    }
  };

  const getTotalSteps = () => {
    if (userType === 'coach') return 3;
    if (hasExperience === 'no') return 4; // user-type, location, experience-check, recommendation
    if (location === 'local') return 4;
    return 5; // includes travel step
  };

  const getStepTitle = () => {
    switch (step) {
      case 'recommendation':
      case 'coach-recommendation':
        return 'Your Recommendation';
      case 'coach-goal':
        return 'What\'s your goal?';
      case 'experience-check':
        return 'One quick question';
      default:
        return 'Let\'s find the right fit.';
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Stats Banner */}
        <AnimatedSection>
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mb-16 pb-16 border-b border-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-2xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
              Find Your Path
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              {getStepTitle()}
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
                <p className="text-white/60 text-center mb-10">
                  What brings you to 108?
                </p>
                <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <button
                    onClick={() => handleUserTypeSelect('athlete')}
                    className="group p-6 md:p-8 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">I'm an Athlete</p>
                    <p className="text-white/60 text-sm">Training for myself</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                      Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  <button
                    onClick={() => handleUserTypeSelect('parent')}
                    className="group p-6 md:p-8 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">I'm a Parent</p>
                    <p className="text-white/60 text-sm">For my son or daughter</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                      Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  <button
                    onClick={() => handleUserTypeSelect('coach')}
                    className="group p-6 md:p-8 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">I'm a Coach</p>
                    <p className="text-white/60 text-sm">Level up my coaching</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                      Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Location (Athletes/Parents) */}
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
                  {userType === 'parent'
                    ? 'Are you in the Knoxville area?'
                    : 'Are you in the Knoxville area?'}
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                  <button
                    onClick={() => handleLocationSelect('local')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Yes, we're local</p>
                    <p className="text-white/60 text-sm">Can train in Knoxville regularly</p>
                  </button>
                  <button
                    onClick={() => handleLocationSelect('non-local')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">No, we'll travel in</p>
                    <p className="text-white/60 text-sm">Coming from out of town</p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Experience Check */}
            {step === 'experience-check' && (
              <motion.div
                key="experience-check"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-14">
                  {userType === 'parent'
                    ? 'Has your athlete completed The 108 Experience?'
                    : 'Have you completed The 108 Experience?'}
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                  <button
                    onClick={() => handleExperienceSelect('yes')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Yes, I have</p>
                    <p className="text-white/60 text-sm">Ready for sustained training</p>
                  </button>
                  <button
                    onClick={() => handleExperienceSelect('no')}
                    className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Not yet</p>
                    <p className="text-white/60 text-sm">I'm new to 108</p>
                  </button>
                </div>
                <p className="text-center text-white/40 text-sm mt-8">
                  The 108 Experience is our required first step for all athletes.
                </p>
              </motion.div>
            )}

            {/* Step 4: Travel Frequency (for non-local who have done Experience) */}
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
                  How often can you travel to Knoxville for training?
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
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Occasionally</p>
                    <p className="text-white/60 text-sm">1-2 visits per year, mostly remote</p>
                  </button>
                  <button
                    onClick={() => handleTravelSelect('cant-travel')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Can't travel regularly</p>
                    <p className="text-white/60 text-sm">Need fully remote training</p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Coach Goal Step */}
            {step === 'coach-goal' && (
              <motion.div
                key="coach-goal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <p className="text-white/60 text-center mb-10">
                  What's your primary goal?
                </p>
                <div className="space-y-4 max-w-xl mx-auto">
                  <button
                    onClick={() => handleCoachGoalSelect('learn')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Learn the 108 System</p>
                        <p className="text-white/60 text-sm">Understand our methodology and apply it to your coaching</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold rounded-full">Start Here</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleCoachGoalSelect('team')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Train My Team</p>
                    <p className="text-white/60 text-sm">Bring 108 training to your athletes at your facility</p>
                  </button>
                  <button
                    onClick={() => handleCoachGoalSelect('license')}
                    className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">License the System</p>
                    <p className="text-white/60 text-sm">Build a 108-powered facility in your market</p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Coach Recommendation */}
            {step === 'coach-recommendation' && (
              <motion.div
                key="coach-recommendation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                {(() => {
                  const rec = getCoachRecommendation();
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
                            {coachGoal === 'learn' ? 'Apply Now' : 'Learn More'}
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

            {/* Athlete Recommendation */}
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
                      <div className={`border p-8 mb-6 ${rec.isPrimary ? 'border-white/50 bg-white/10' : 'border-white/30 bg-white/5'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          {rec.tag && (
                            <span className={`text-[10px] uppercase tracking-wider px-3 py-1 font-bold ${
                              rec.isPrimary ? 'bg-white text-black' : 'bg-white/20 text-white'
                            }`}>
                              {rec.tag}
                            </span>
                          )}
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                            {rec.isPrimary ? 'Your first step' : 'Recommended for you'}
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
                            {rec.isPrimary ? 'Book Your Experience' : 'Learn More'}
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
            {step !== 'user-type' && (
              <button
                onClick={handleBack}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                ← Back
              </button>
            )}

            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: getTotalSteps() }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < getProgress() ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            {(step === 'recommendation' || step === 'coach-recommendation') && (
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
