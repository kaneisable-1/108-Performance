'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import { HOMEPAGE } from '@/data/services';
import Link from 'next/link';

export function Problem() {
  return (
    <section className="relative py-fib-89 lg:py-fib-144 px-6 bg-white overflow-hidden">
      {/* Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gray-50 whitespace-nowrap tracking-tighter leading-none">
          DISCOVER
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Start Here - Pathway Finder */}
        <AnimatedSection>
          <div className="text-center mb-24">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
              Start Here
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Find Your Pathway
            </h2>
            <p className="text-gray-500 mb-8">
              Not sure where to start? Tell us your situation and we'll point the way.
            </p>
            {/* Search input placeholder */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center border border-gray-200 rounded-full px-6 py-4 bg-white">
                <span className="text-gray-400 mr-2">🔍</span>
                <span className="text-gray-400 text-sm flex-1 text-left">
                  I'm a college pitcher looking for more velocity...
                </span>
                <button className="bg-black text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Find Path
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Everything starts with the Experience - Golden Ratio Grid */}
        <div className="grid lg:grid-cols-[61.8fr_38.2fr] gap-fib-55 items-center">
          <AnimatedSection>
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-[-0.02em] mb-6">
              <span className="block">Everything</span>
              <span className="block">starts</span>
              <span className="block">with the</span>
              <span className="block text-gray-300">Experience.</span>
            </h2>
            <p className="text-sm text-gray-600 italic mb-4 max-w-md">
              "You cannot fix what you do not understand. The 108 Experience is the diagnostic mandatory for every athlete."
            </p>
            <p className="text-sm text-gray-500 max-w-md">
              Whether you're a local pro or a remote college recruit, your journey begins with a 2-5 day immersive in Knoxville. We learn your brain, your body, and your history. Only then do we open the pathways.
            </p>
          </AnimatedSection>

          {/* Image placeholder */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  [Athlete Image]
                </div>
              </div>
              <Link
                href="#experience"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-gray-50 transition-colors"
              >
                Explore The 108 Experience
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
