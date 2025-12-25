'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import { HOMEPAGE } from '@/data/services';

export function Proof() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto text-center">
        {/* The Staying */}
        <AnimatedSection>
          <p className="text-sm text-white/40 uppercase tracking-[0.3em] mb-8">
            The Staying
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {HOMEPAGE.staying.headline}
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-white/50 leading-relaxed mb-16 max-w-2xl mx-auto">
            {HOMEPAGE.staying.body}
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center gap-12 md:gap-24 text-center">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-white/50">Years testing</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">1st Round</p>
              <p className="text-sm text-white/50">Draft picks</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Daily</p>
              <p className="text-sm text-white/50">Refinement</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
