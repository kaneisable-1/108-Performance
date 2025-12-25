'use client';

import { AnimatedSection, FadeIn } from '../ui/AnimatedSection';
import { HOMEPAGE } from '@/data/services';

export function TheStaying() {
  return (
    <section className="relative py-32 lg:py-48 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-black to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-8">
            The Staying
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {HOMEPAGE.staying.headline}
          </h2>
        </AnimatedSection>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            {HOMEPAGE.staying.body}
          </p>
        </FadeIn>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
