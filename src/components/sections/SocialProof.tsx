'use client';

import { AnimatedSection } from '../ui/AnimatedSection';

const stats = [
  { value: '26', label: 'MLB Organizations' },
  { value: '+4 mph', label: 'Average Velocity Gain' },
  { value: '38%', label: 'Reduction in Elbow Stress' },
];

export function SocialProof() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Banner */}
        <AnimatedSection>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-12">
            Trusted by 26 Major League Organizations
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
