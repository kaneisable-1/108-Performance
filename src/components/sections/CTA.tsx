'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative py-fib-89 md:py-fib-144 px-6 bg-white text-center overflow-hidden">
      {/* Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-gray-50 whitespace-nowrap tracking-tighter leading-none">
          FEEL IT
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
            Final Threshold
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-black leading-[0.9] tracking-[-0.03em] mb-12">
            <span className="block">Ready</span>
            <span className="block">to</span>
            <span className="block text-gray-300">feel it?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Link
            href="#experience"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Start Your Journey
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
