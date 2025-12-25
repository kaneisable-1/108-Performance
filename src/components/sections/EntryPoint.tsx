'use client';

import { AnimatedSection } from '../ui/AnimatedSection';
import { EXPERIENCE_108, ATHLETE_SERVICES } from '@/data/services';
import Link from 'next/link';
import { Icon108, type Icon108Name } from '../ui/Icon108';

const pathways: Array<{
  badge: string;
  name: string;
  description: string;
  image: string;
  icon: Icon108Name;
  href: string;
}> = [
  {
    badge: 'Foundation',
    name: 'The 108 Experience',
    description: 'The door that opens everything. A 2-5 day immersive diagnostic where we learn your human architecture before we coach your player skills.',
    image: '[Experience Image]',
    icon: 'diamond',
    href: '/programs/experience',
  },
  {
    badge: 'Local',
    name: 'Tri-Star Membership',
    description: 'Unlimited in-person classes in Knoxville. Designed for athletes ready to reinforce their 108 foundation through daily elite training.',
    image: '[Tri-Star Image]',
    icon: 'sequence-bars',
    href: '/programs/tri-star',
  },
  {
    badge: 'Elite',
    name: 'Draft Prep',
    description: 'A focused pathway for draft-eligible players. Precision training for the combine. Strategy that moves you up the board.',
    image: '[Draft Prep Image]',
    icon: 'power-vector',
    href: '/programs/draft-prep',
  },
];

export function EntryPoint() {
  return (
    <section id="experience" className="relative py-fib-89 lg:py-fib-144 px-6 bg-white overflow-hidden">
      {/* Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[15vw] font-black text-gray-50 whitespace-nowrap tracking-tighter leading-none">
          YOUR PATH
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Active Pathways
            </h2>
            <p className="text-gray-500">
              Available after your initial experience.
            </p>
          </div>
        </AnimatedSection>

        {/* Pathway Cards */}
        <div className="grid md:grid-cols-3 gap-fib-21">
          {pathways.map((pathway, index) => (
            <AnimatedSection key={pathway.name} delay={0.1 * index}>
              <div className="group border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors bg-white">
                {/* Image with Icon */}
                <div className="relative aspect-[4/3] bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                  {/* Centered Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon108 name={pathway.icon} size={64} className="text-gray-300 group-hover:text-gray-400 transition-colors" />
                  </div>
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    {pathway.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-fib-21">
                  <div className="flex items-center gap-fib-13 mb-fib-8">
                    <Icon108 name={pathway.icon} size={20} className="text-black/30" />
                    <h3 className="text-lg font-bold text-black">
                      {pathway.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-fib-13 leading-relaxed">
                    {pathway.description}
                  </p>
                  <Link
                    href={pathway.href}
                    className="inline-flex items-center text-xs font-semibold text-black uppercase tracking-wider group-hover:underline"
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
