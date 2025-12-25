'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-fib-89 md:py-fib-144 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-black leading-[0.95] tracking-[-0.03em] mb-fib-34">
            <span className="block">Ready to</span>
            <span className="block text-gray-300">feel it?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Link
            href="/programs/experience"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Book Your 108 Experience
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
