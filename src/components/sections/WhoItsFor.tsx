'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import { FAQ } from '@/data/services';

// Extract the "What ages" answer for context
const ageRange = FAQ.find(f => f.question.includes('ages'))?.answer;

export function WhoItsFor() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A] text-center">
      <div className="max-w-xl mx-auto space-y-8">
        <AnimatedSection>
          <p className="text-xl md:text-2xl text-white/70">
            For athletes who are tired of
            <br />
            <span className="text-white">cookie-cutter programs.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-xl md:text-2xl text-white/70">
            For players who want training
            <br />
            <span className="text-white">that transfers at 7 o'clock.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xl md:text-2xl text-white/70">
            For the ones
            <br />
            <span className="text-white">still searching.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <p className="text-lg text-white/40 mt-12 pt-8 border-t border-white/10">
            From 12 to MLB. Youth athletes, high schoolers,
            <br />
            college players, and professionals—all under one roof.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
