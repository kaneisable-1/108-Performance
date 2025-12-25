'use client';

import { AnimatedSection, FadeIn } from '../ui/AnimatedSection';
import { HOMEPAGE } from '@/data/services';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 lg:py-40 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-8">
            The Paradox
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-12">
            {HOMEPAGE.paradox.headline}
          </h2>
        </AnimatedSection>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-8">
            {HOMEPAGE.paradox.body}
          </p>
        </FadeIn>

        {/* The Work */}
        <div className="mt-24 pt-16 border-t border-black/10">
          <AnimatedSection>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {HOMEPAGE.theWork.headline}
            </h3>
          </AnimatedSection>

          <FadeIn delay={0.2}>
            <p className="text-xl text-black/60 leading-relaxed max-w-2xl mx-auto">
              {HOMEPAGE.theWork.body}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
