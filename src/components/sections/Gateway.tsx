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

          {/* The 108 Experience Card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-black text-white p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 font-semibold">
                      Required First Step
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    The 108 Experience
                  </h3>
                  <p className="text-white/70 mb-6 max-w-md">
                    2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you, not a template.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                    <span>2–5 Days</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span>In-Person</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span>Knoxville, TN</span>
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-4">
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Starting at</p>
                    <p className="text-4xl md:text-5xl font-black">$2,000</p>
                  </div>
                  <Link
                    href="/programs/experience"
                    className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Book Your Experience
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* For Coaches Link */}
          <AnimatedSection delay={0.2}>
            <div className="mt-8 text-center">
              <p className="text-black/50 text-sm">
                Are you a coach?{' '}
                <Link href="/programs/coaches-experience" className="text-black font-semibold hover:underline">
                  See the Coaches Experience →
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
