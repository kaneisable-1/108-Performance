'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';

const appFeatures = [
  {
    mode: 'Game Specific',
    description: 'Sport-specific drills that transfer to game day',
    image: '/products/bridge-athletic/game-specific.png',
  },
  {
    mode: 'Anchored',
    description: 'Stability-focused training with timer tracking',
    image: '/products/bridge-athletic/anchored.png',
  },
  {
    mode: 'Dynamic',
    description: 'Movement-based exercises for athletic power',
    image: '/products/bridge-athletic/dynamic.png',
  },
];

export function AppShowcase() {
  return (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
              108 Software
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Train anywhere. Track everything.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The same programming used by pros—now in your pocket.
              Video-guided workouts, rep tracking, and progress analytics.
            </p>
          </div>
        </AnimatedSection>

        {/* Main App Display */}
        <AnimatedSection delay={0.2}>
          <div className="relative mb-16">
            <div className="max-w-3xl mx-auto">
              <Image
                src="/products/bridge-athletic/three-phones.png"
                alt="108 Performance App - Three Training Modes"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {appFeatures.map((feature, index) => (
            <AnimatedSection key={feature.mode} delay={0.1 * index}>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{feature.mode}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="https://apps.apple.com/app/bridge-athletic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <Link
                href="/programs/virtual"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
              >
                Learn about Virtual Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-white/40">
              $50/month • Included with all Virtual training programs
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
