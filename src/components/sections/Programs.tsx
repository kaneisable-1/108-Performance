'use client';

import { AnimatedSection, ScaleIn } from '../ui/AnimatedSection';
import { EXPERIENCE_108, ATHLETE_SERVICES, HOMEPAGE } from '@/data/services';
import Link from 'next/link';

const programs = [
  {
    id: ATHLETE_SERVICES.triStar.id,
    name: ATHLETE_SERVICES.triStar.name,
    tagline: ATHLETE_SERVICES.triStar.tagline,
    description: ATHLETE_SERVICES.triStar.description,
    price: `$${ATHLETE_SERVICES.triStar.pricing.monthly}/month`,
  },
  {
    id: ATHLETE_SERVICES.virtualExperience.id,
    name: ATHLETE_SERVICES.virtualExperience.name,
    tagline: ATHLETE_SERVICES.virtualExperience.tagline,
    description: ATHLETE_SERVICES.virtualExperience.description,
    price: `$${ATHLETE_SERVICES.virtualExperience.pricing.monthly}/month`,
  },
  {
    id: ATHLETE_SERVICES.collegePrep.id,
    name: ATHLETE_SERVICES.collegePrep.name,
    tagline: ATHLETE_SERVICES.collegePrep.tagline,
    description: ATHLETE_SERVICES.collegePrep.description,
    price: `$${ATHLETE_SERVICES.collegePrep.pricing.monthly}/month`,
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-32 lg:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.3em] text-black/40 mb-8">
              {HOMEPAGE.yourPath.headline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Everyone starts with the Experience.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-black/60 max-w-xl mx-auto">
              {HOMEPAGE.yourPath.subhead}
            </p>
          </AnimatedSection>
        </div>

        {/* Featured: The 108 Experience */}
        <ScaleIn>
          <div id="experience" className="bg-black text-white rounded-3xl p-8 lg:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs uppercase tracking-widest text-white/50 mb-4">
                  Start Here
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {EXPERIENCE_108.name}
                </h3>
                <p className="text-xl text-white/50 mb-4">
                  {EXPERIENCE_108.tagline}
                </p>
                <p className="text-lg text-white/70 mb-6 leading-relaxed">
                  {EXPERIENCE_108.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 bg-white/10 rounded-full">
                    {EXPERIENCE_108.duration}
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full">
                    Starting at ${EXPERIENCE_108.startingPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  {EXPERIENCE_108.cta}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScaleIn>

        {/* Other Programs */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ScaleIn key={program.id} delay={index * 0.1}>
              <div className="bg-[#FAFAFA] rounded-2xl p-6 lg:p-8 h-full flex flex-col group hover:bg-[#F0F0F0] transition-colors">
                <h4 className="text-xl font-bold text-black mb-2">{program.name}</h4>
                <p className="text-sm text-black/50 mb-4">{program.tagline}</p>
                <p className="text-black/60 mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-black">{program.price}</span>
                  <Link
                    href={`/${program.id}`}
                    className="text-sm font-medium text-black/50 hover:text-black transition-colors flex items-center gap-1"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
