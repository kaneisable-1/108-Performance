'use client';

import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';
import { EXPERIENCE_108 } from '@/data/services';
import { Icon108 } from '../ui/Icon108';

export function Method() {
  return (
    <section id="method" className="bg-black text-white">
      {/* Hero Text with Images */}
      <div className="py-fib-89 lg:py-fib-144 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Golden Ratio Grid: 61.8% text / 38.2% images */}
          <div className="grid lg:grid-cols-[61.8fr_38.2fr] gap-fib-34 items-center">
            {/* Left - Text */}
            <div>
              <AnimatedSection>
                <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black leading-[0.9] tracking-[-0.03em]">
                  <span className="block">Human.</span>
                  <span className="block text-gray-500">Athlete.</span>
                  <span className="block text-gray-500">Player.</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-gray-400 max-w-xl mt-fib-34 leading-relaxed">
                  We learn how you think before we look at how you move.
                </p>
              </AnimatedSection>
            </div>

            {/* Right - Three Images */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-3 gap-2 h-[400px] lg:h-[500px]">
                {/* Human - Interview/Conversation */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/method-human.jpg"
                    alt="Human - Understanding the person"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs uppercase tracking-wider text-white/70">Human</p>
                  </div>
                </div>

                {/* Athlete - Water Bag Drills */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/method-athlete.png"
                    alt="Athlete - Movement training"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs uppercase tracking-wider text-white/70">Athlete</p>
                  </div>
                </div>

                {/* Player - Hitting/Throwing */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/method-player.jpg"
                    alt="Player - Sport-specific skills"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs uppercase tracking-wider text-white/70">Player</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Three Phases - 01/02/03 Grid */}
      <div className="py-fib-89 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-fib-34">
            {EXPERIENCE_108.methodology.map((layer, index) => {
              const icons = ['phi-circles', 'motion-arc', 'target'] as const;
              return (
                <AnimatedSection key={layer.phase} delay={0.1 * index}>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl md:text-7xl font-black text-gray-800">
                        0{index + 1}
                      </span>
                      <Icon108 name={icons[index]} size={32} className="text-white/20" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                      The {layer.phase.replace('The ', '')}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
