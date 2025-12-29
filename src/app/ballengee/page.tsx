'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Types for the pathway finder
type Step = 'tier' | 'training-type' | 'in-person-style' | 'commitment' | 'recommendation';
type Tier = 'mlb' | 'milb' | null;
type TrainingType = 'virtual-only' | 'pro-experience' | null;
type InPersonStyle = 'scheduled' | 'flexible' | 'visits-only' | null;
type Commitment = 'annual' | 'offseason' | null;

interface Recommendation {
  pathway: string;
  title: string;
  description: string;
  monthly: string;
  total: string;
  visits: string;
  features: string[];
  isPrimary?: boolean;
}

const proPackages = [
  {
    type: '12-Month Pro',
    tier: 'MLB',
    monthly: '$1,000',
    total: '$10,000',
    inPerson: 'Six 3-day tune-ups',
  },
  {
    type: '12-Month Pro',
    tier: 'MiLB',
    monthly: '$625',
    total: '$7,500',
    inPerson: 'Six 3-day tune-ups',
  },
  {
    type: 'Offseason (4-Mo)',
    tier: 'MLB',
    monthly: '$625',
    total: '$7,500',
    inPerson: 'Four 3-day tune-ups',
  },
  {
    type: 'Offseason (4-Mo)',
    tier: 'MiLB',
    monthly: '$417',
    total: '$5,000',
    inPerson: 'Four 3-day tune-ups',
  },
];

const pricingComparison = [
  {
    service: 'Initial 108 Experience (3-Day Eval)',
    publicRate: '$5,000 (MLB) / $4,000 (MiLB)',
    bgRate: '$3,500',
  },
  {
    service: 'MLB Pro (12-Month Annual)',
    publicRate: '$20,000 typical',
    bgRate: '$10,000',
  },
  {
    service: 'MiLB Pro (12-Month Annual)',
    publicRate: '$10,000 typical',
    bgRate: '$7,500',
  },
  {
    service: 'MLB Offseason (4-Month)',
    publicRate: 'Not standard publicly',
    bgRate: '$7,500',
  },
  {
    service: 'MiLB Offseason (4-Month)',
    publicRate: 'Not standard publicly',
    bgRate: '$5,000',
  },
  {
    service: 'À la Carte Tune-up (Daily Rate)',
    publicRate: '~$1,500 per day',
    bgRate: '$500 per day',
  },
];

const deliverables = [
  {
    title: 'Senior Staff Access',
    description: 'Bi-weekly Zooms and dedicated review within the Bridge App',
  },
  {
    title: 'Priority Scheduling',
    description: 'Guaranteed access to training windows at 108 Tri Star',
  },
  {
    title: '108 Complete Product Pack',
    description: 'Waterbag, Waterball, Bulgarian Bag, and BP Vest included',
  },
  {
    title: 'Exclusive Merch Kit',
    description: '108 branded apparel and gear',
  },
  {
    title: 'Partner Day-Rate',
    description: '$500/day for additional in-person sessions (vs. $1,500 market rate)',
  },
];

export default function BallengeePage() {
  // Pathway finder state
  const [step, setStep] = useState<Step>('tier');
  const [tier, setTier] = useState<Tier>(null);
  const [trainingType, setTrainingType] = useState<TrainingType>(null);
  const [inPersonStyle, setInPersonStyle] = useState<InPersonStyle>(null);
  const [commitment, setCommitment] = useState<Commitment>(null);

  // Step handlers
  const handleTierSelect = (selectedTier: Tier) => {
    setTier(selectedTier);
    setStep('training-type');
  };

  const handleTrainingTypeSelect = (type: TrainingType) => {
    setTrainingType(type);
    if (type === 'virtual-only') {
      setStep('recommendation');
    } else {
      setStep('in-person-style');
    }
  };

  const handleInPersonStyleSelect = (style: InPersonStyle) => {
    setInPersonStyle(style);
    if (style === 'scheduled') {
      setStep('commitment');
    } else {
      setStep('recommendation');
    }
  };

  const handleCommitmentSelect = (commit: Commitment) => {
    setCommitment(commit);
    setStep('recommendation');
  };

  const handleBack = () => {
    if (step === 'recommendation') {
      if (trainingType === 'virtual-only') {
        setStep('training-type');
      } else if (inPersonStyle === 'scheduled') {
        setStep('commitment');
      } else {
        setStep('in-person-style');
      }
    } else if (step === 'commitment') {
      setStep('in-person-style');
    } else if (step === 'in-person-style') {
      setStep('training-type');
    } else if (step === 'training-type') {
      setStep('tier');
    }
  };

  const handleReset = () => {
    setStep('tier');
    setTier(null);
    setTrainingType(null);
    setInPersonStyle(null);
    setCommitment(null);
  };

  // Recommendation logic
  const getRecommendation = (): Recommendation => {
    // Virtual Only
    if (trainingType === 'virtual-only') {
      return {
        pathway: 'Virtual',
        title: 'Virtual Experience',
        description: 'Remote training program with senior staff access via the Bridge App. Daily programming, video feedback, and bi-weekly Zoom calls.',
        monthly: 'Contact for pricing',
        total: 'Contact for pricing',
        visits: 'None included',
        features: [
          'Senior Staff Access via Bridge App',
          'Daily Programming',
          'Video Feedback & Review',
          'Bi-weekly Zoom Calls',
        ],
      };
    }

    // Visits Only (Path D)
    if (inPersonStyle === 'visits-only') {
      return {
        pathway: 'D',
        title: 'À la Carte Training',
        description: 'In-person tune-ups at $500/day partner rate. Subject to availability, no priority scheduling.',
        monthly: '$500/day',
        total: 'Pay as you go',
        visits: 'Book as needed',
        features: [
          '$500/day Partner Rate',
          'No Virtual Subscription Required',
          'Subject to Availability',
          'No Priority Scheduling',
        ],
      };
    }

    // Flexible À la Carte (Path A)
    if (inPersonStyle === 'flexible') {
      return {
        pathway: 'A',
        title: 'Remote Core + À la Carte',
        description: 'Virtual training subscription plus flexible in-person visits at $500/day partner rate. Book visits as your schedule allows.',
        monthly: 'Virtual + $500/day visits',
        total: 'Varies by usage',
        visits: 'À la carte at partner rate',
        features: [
          'Virtual Experience Subscription',
          '$500/day In-Person Rate',
          'Flexible Scheduling',
          'Senior Staff Access',
          'Book Visits As Needed',
        ],
      };
    }

    // Scheduled Packages (Path B/C)
    if (commitment === 'annual') {
      // 12-Month Pro (Path B)
      const isMLB = tier === 'mlb';
      return {
        pathway: 'B',
        title: `12-Month ${isMLB ? 'MLB' : 'MiLB'} Pro`,
        description: 'Year-round development with senior staff access, priority scheduling, and 6 included in-person tune-ups.',
        monthly: isMLB ? '$1,000' : '$625',
        total: isMLB ? '$10,000' : '$7,500',
        visits: 'Six 3-day tune-ups included',
        isPrimary: true,
        features: [
          'Senior Staff Access',
          'Priority Scheduling',
          'Six 3-Day Tune-ups Included',
          '108 Complete Product Pack',
          'Exclusive Merch Kit',
          '$500/day Partner Rate for Extra Visits',
        ],
      };
    } else {
      // Offseason Pro (Path C)
      const isMLB = tier === 'mlb';
      return {
        pathway: 'C',
        title: `Offseason ${isMLB ? 'MLB' : 'MiLB'} Pro`,
        description: 'Focused 4-month offseason program with senior staff access, priority scheduling, and 4 included in-person tune-ups.',
        monthly: isMLB ? '$625' : '$417',
        total: isMLB ? '$7,500' : '$5,000',
        visits: 'Four 3-day tune-ups included',
        isPrimary: true,
        features: [
          'Senior Staff Access',
          'Priority Scheduling',
          'Four 3-Day Tune-ups Included',
          '108 Complete Product Pack',
          'Exclusive Merch Kit',
          '$500/day Partner Rate for Extra Visits',
        ],
      };
    }
  };

  // Progress calculation
  const getProgress = () => {
    switch (step) {
      case 'tier': return 1;
      case 'training-type': return 2;
      case 'in-person-style': return 3;
      case 'commitment': return 4;
      case 'recommendation': return 5;
      default: return 1;
    }
  };

  const getTotalSteps = () => {
    if (trainingType === 'virtual-only') return 3;
    if (inPersonStyle && inPersonStyle !== 'scheduled') return 4;
    return 5;
  };

  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 border border-white/20 px-4 py-2">
                    Partner Program
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                  108 <span className="text-white/40">×</span> Ballengee
                </h1>
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
                  Professional training. Partner pricing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Interactive Pathway Finder */}
        <section className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  Find Your Path
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                  {step === 'recommendation' ? 'Your Recommended Pathway' : 'Build Your Training Plan'}
                </h2>
              </div>
            </AnimatedSection>

            <div className="min-h-[450px] flex flex-col">
              <AnimatePresence mode="wait">
                {/* Step 1: Tier Selection */}
                {step === 'tier' && (
                  <motion.div
                    key="tier"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <p className="text-white/60 text-center mb-10">
                      What level are you playing at?
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                      <button
                        onClick={() => handleTierSelect('mlb')}
                        className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-2xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">MLB</p>
                        <p className="text-white/60 text-sm">Major League Baseball</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                          Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </button>
                      <button
                        onClick={() => handleTierSelect('milb')}
                        className="group p-8 md:p-10 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-2xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">MiLB</p>
                        <p className="text-white/60 text-sm">Minor League Baseball</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-white/40 group-hover:text-white/70 text-xs font-medium transition-colors">
                          Continue <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Training Type */}
                {step === 'training-type' && (
                  <motion.div
                    key="training-type"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <p className="text-white/60 text-center mb-10">
                      How do you want to train after your evaluation?
                    </p>
                    <div className="space-y-4 max-w-xl mx-auto">
                      <button
                        onClick={() => handleTrainingTypeSelect('pro-experience')}
                        className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Pro Experience</p>
                            <p className="text-white/60 text-sm">Virtual training PLUS in-person tune-ups at 108 Tri Star</p>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold rounded-full">Recommended</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleTrainingTypeSelect('virtual-only')}
                        className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Virtual Only</p>
                        <p className="text-white/60 text-sm">Remote training program with senior staff access via Bridge App</p>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: In-Person Style */}
                {step === 'in-person-style' && (
                  <motion.div
                    key="in-person-style"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <p className="text-white/60 text-center mb-10">
                      How do you want to schedule your in-person training?
                    </p>
                    <div className="space-y-4 max-w-xl mx-auto">
                      <button
                        onClick={() => handleInPersonStyleSelect('scheduled')}
                        className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Scheduled Package</p>
                            <p className="text-white/60 text-sm">Guaranteed tune-ups included in your subscription</p>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold rounded-full">Best Value</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleInPersonStyleSelect('flexible')}
                        className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Flexible À la Carte</p>
                        <p className="text-white/60 text-sm">Book visits as needed at $500/day partner rate</p>
                      </button>
                      <button
                        onClick={() => handleInPersonStyleSelect('visits-only')}
                        className="w-full p-6 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-xl font-bold text-white mb-1 group-hover:-translate-y-0.5 transition-transform">Visits Only</p>
                        <p className="text-white/60 text-sm">In-person tune-ups only, no virtual subscription</p>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Commitment Length */}
                {step === 'commitment' && (
                  <motion.div
                    key="commitment"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    <p className="text-white/60 text-center mb-10">
                      What's your commitment timeline?
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                      <button
                        onClick={() => handleCommitmentSelect('annual')}
                        className="group p-8 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Full Year</p>
                        <p className="text-white/60 text-sm mb-3">12-month development with 6 tune-ups</p>
                        <p className="text-white/40 text-xs">
                          {tier === 'mlb' ? '$1,000/mo • $10,000 total' : '$625/mo • $7,500 total'}
                        </p>
                      </button>
                      <button
                        onClick={() => handleCommitmentSelect('offseason')}
                        className="group p-8 bg-white/[0.08] border border-white/30 rounded-2xl hover:bg-white/[0.12] hover:border-white/50 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <p className="text-xl font-black text-white mb-2 group-hover:-translate-y-0.5 transition-transform">Offseason</p>
                        <p className="text-white/60 text-sm mb-3">4-month program with 4 tune-ups</p>
                        <p className="text-white/40 text-xs">
                          {tier === 'mlb' ? '$625/mo • $7,500 total' : '$417/mo • $5,000 total'}
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Recommendation */}
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
                          {/* Primary Recommendation Card */}
                          <div className={`border p-8 mb-6 rounded-2xl ${rec.isPrimary ? 'border-white/50 bg-white/10' : 'border-white/30 bg-white/5'}`}>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-bold rounded-full">
                                Path {rec.pathway}
                              </span>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                                Recommended for you
                              </p>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-3">{rec.title}</h3>
                            <p className="text-white/70 mb-6">{rec.description}</p>

                            {/* Pricing Grid */}
                            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-lg mb-6">
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Monthly</p>
                                <p className="text-lg font-bold text-white">{rec.monthly}</p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Total</p>
                                <p className="text-lg font-bold text-white">{rec.total}</p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">In-Person</p>
                                <p className="text-sm font-medium text-white">{rec.visits}</p>
                              </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                              {rec.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                                  <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <a
                              href={`mailto:pro@108performance.com?subject=Ballengee%20Client%20-%20Path%20${rec.pathway}%20Inquiry`}
                              className="block w-full bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors text-center rounded-lg"
                            >
                              Contact Pro Team
                            </a>
                          </div>

                          {/* Reminder about 108 Experience */}
                          <div className="border border-white/20 p-4 rounded-lg bg-white/5">
                            <p className="text-white/50 text-sm text-center">
                              <span className="font-medium text-white/70">Reminder:</span> All pathways begin with The 108 Experience ($3,500 Ballengee rate)
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-center gap-6">
                {step !== 'tier' && (
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

        {/* The Required First Step */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
                  Required First Step
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
                  The 108 Experience
                </h2>
                <p className="text-lg text-black/60 max-w-2xl mx-auto">
                  Before entering any pathway, every Ballengee client must undergo an initial evaluation to confirm mutual fit and build a developmental road map.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-black text-white p-8 md:p-12 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Format</p>
                    <p className="text-white font-medium">3-day in-person evaluation</p>
                    <p className="text-white/50 text-sm mt-1">Knoxville, TN</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Deliverables</p>
                    <p className="text-white font-medium">Complete Assessment</p>
                    <p className="text-white/50 text-sm mt-1">Movement, video, routine eval + written plan</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Daily Film Review</p>
                    <p className="text-white font-medium">Included</p>
                    <p className="text-white/50 text-sm mt-1">Comprehensive breakdown each day</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Ballengee Rate</p>
                    <p className="text-4xl font-black">$3,500</p>
                    <p className="text-white/40 text-sm mt-1">
                      <span className="line-through">$4,000 MiLB</span> / <span className="line-through">$5,000 MLB</span> public rates
                    </p>
                  </div>
                  <a
                    href="mailto:pro@108performance.com?subject=Ballengee%20108%20Experience%20Inquiry"
                    className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors text-center rounded-lg"
                  >
                    Schedule Evaluation
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pro Package Offerings */}
        <section className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  Package Reference
                </p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  Pro Package Offerings
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  Remote Core digital training combined with in-person refinement.
                  Delivered exclusively by senior staff with priority scheduling.
                </p>
              </div>
            </AnimatedSection>

            {/* Package Table */}
            <AnimatedSection delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Package Type</th>
                      <th className="text-left py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Tier</th>
                      <th className="text-right py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Monthly</th>
                      <th className="text-right py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Total</th>
                      <th className="text-left py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">In-Person Training</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proPackages.map((pkg, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-5 px-4 font-medium">{pkg.type}</td>
                        <td className="py-5 px-4">
                          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                            pkg.tier === 'MLB' ? 'bg-white text-black' : 'bg-white/20 text-white'
                          }`}>
                            {pkg.tier}
                          </span>
                        </td>
                        <td className="py-5 px-4 text-right font-medium">{pkg.monthly}</td>
                        <td className="py-5 px-4 text-right font-black text-lg">{pkg.total}</td>
                        <td className="py-5 px-4 text-white/60">{pkg.inPerson}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            {/* Universal Deliverables */}
            <AnimatedSection delay={0.2}>
              <div className="mt-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 text-center">
                  Included in All Pro Packages
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deliverables.map((item, index) => (
                    <div key={index} className="border border-white/10 p-6 hover:border-white/30 transition-colors">
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  Transparent Pricing
                </p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  Ballengee vs. Public Rates
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  System of One partner discount. No hidden fees. No surprises.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Service</th>
                      <th className="text-right py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Public Rate</th>
                      <th className="text-right py-4 px-4 text-[10px] uppercase tracking-wider text-white/40 font-medium">Ballengee Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-5 px-4 font-medium">{item.service}</td>
                        <td className="py-5 px-4 text-right text-white/40">{item.publicRate}</td>
                        <td className="py-5 px-4 text-right font-bold text-white">{item.bgRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Differences */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
                  Beyond Price
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
                  The Ballengee Advantage
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black mb-2">Staff Priority</h3>
                    <p className="text-black/60">
                      Ballengee Pro packages include priority access to senior staff and priority scheduling for tune-ups. Public clients generally train with junior staff without priority booking.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black mb-2">Daily Support</h3>
                    <p className="text-black/60">
                      Senior-staff review within the Bridge App and bi-weekly mentorship Zooms included in all Ballengee Pro packages.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black mb-2">Standard Equipment</h3>
                    <p className="text-black/60">
                      108 Complete Product Pack (Waterbag, Waterball, Bulgarian Bag, and BP Vest) and 108 Merch Kit included as part of every contract.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Get Started
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Ready to begin?
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
                Contact us to schedule your 108 Experience evaluation and select your pathway.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:pro@108performance.com?subject=Ballengee%20Client%20Inquiry"
                  className="bg-white text-black px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  Contact Pro Team
                </a>
                <a
                  href="tel:+18652535060"
                  className="border border-white/30 text-white px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  Call Direct
                </a>
              </div>
              <p className="text-white/30 text-sm mt-8">
                pro@108performance.com
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
