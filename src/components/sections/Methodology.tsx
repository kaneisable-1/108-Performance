'use client';

import { AnimatedSection, SlideUp, FadeIn } from '../ui/AnimatedSection';
import { EXPERIENCE_108, HOMEPAGE } from '@/data/services';

export function Methodology() {
  return (
    <section id="method" className="bg-[#FAFAFA]">
      {/* Intro */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-8">
              The 108 Method
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
              {HOMEPAGE.methodology.headline}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
              {HOMEPAGE.methodology.body}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Three Layers */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERIENCE_108.methodology.map((layer, index) => (
              <SlideUp key={layer.phase} delay={index * 0.15}>
                <div
                  className={`p-8 lg:p-10 rounded-3xl h-full flex flex-col ${
                    index === 0
                      ? 'bg-black text-white'
                      : index === 1
                      ? 'bg-[#262626] text-white'
                      : 'bg-[#525252] text-white'
                  }`}
                >
                  <span className="text-sm font-medium opacity-50 mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {layer.phase}
                  </h3>
                  <p className="text-lg opacity-70 mt-auto leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>

      {/* Outcome Statement */}
      <div className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Your system. Your cues.
            </h3>
          </AnimatedSection>

          <FadeIn delay={0.1}>
            <p className="text-xl text-black/60 leading-relaxed">
              {EXPERIENCE_108.outcome}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
