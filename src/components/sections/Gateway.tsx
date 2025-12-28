'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Gateway() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
                The Gateway
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-6">
                Every path starts here.
              </h2>
              <p className="text-lg text-black/60 max-w-xl mx-auto">
                Before we train you, we learn you. How you think. How you move. What clicks.
              </p>
            </div>
          </AnimatedSection>

          {/* Side-by-side Cards: Athletes & Coaches */}
          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Athletes Card */}
              <div className="bg-black text-white p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-semibold">
                    For Athletes
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">
                    Required First Step
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  The 108 Experience
                </h3>
                <p className="text-white/70 mb-6 text-sm">
                  2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-8">
                  <span>2–5 Days</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full" />
                  <span>In-Person</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full" />
                  <span>Knoxville, TN</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Starting at</p>
                    <p className="text-3xl font-black">$2,000</p>
                  </div>
                  <Link
                    href="/programs/experience"
                    className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Coaches Card */}
              <div className="bg-black text-white p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-semibold">
                    For Coaches
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">
                    Required First Step
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  Coaches Experience
                </h3>
                <p className="text-white/70 mb-6 text-sm">
                  A day in our lab. See why cookie-cutter doesn't work. Understand the system before you bring it to your athletes.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-8">
                  <span>1 Day</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full" />
                  <span>In-Person</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full" />
                  <span>Knoxville, TN</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Investment</p>
                    <p className="text-3xl font-black">$500<span className="text-lg font-normal text-white/50">/day</span></p>
                  </div>
                  <Link
                    href="/programs/coaches-experience"
                    className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Can't Travel Note */}
          <AnimatedSection delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-black/50 text-sm">
                Can't travel to Knoxville?{' '}
                <Link href="/programs/tour" className="text-black font-semibold hover:underline">
                  See our Tour Experience in select cities →
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
