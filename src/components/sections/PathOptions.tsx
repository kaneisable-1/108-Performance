'use client';

import Link from 'next/link';
import { AnimatedSection } from '../ui/AnimatedSection';

const primaryPaths = [
  {
    name: 'Tri Star',
    description: 'Local unlimited access in Knoxville.',
    price: '$499',
    period: '/mo',
    href: '/programs/tri-star',
    tag: 'In-Person',
  },
  {
    name: 'Virtual Experience',
    description: 'Remote coaching anywhere.',
    price: '$550',
    period: '/mo',
    href: '/programs/virtual',
    tag: 'Remote',
  },
  {
    name: 'Virtual Pro',
    description: 'Hybrid: Remote + 6 trips/year.',
    price: '$1,000',
    period: '/mo',
    href: '/programs/virtual-pro',
    tag: 'Best Value',
    highlighted: true,
  },
];

const levelUpPaths = [
  {
    name: 'College Prep',
    description: 'Training + Recruiting. Get better. Get seen.',
    price: '$1,250',
    period: '/mo',
    href: '/programs/college-prep',
  },
  {
    name: 'Draft Prep',
    description: 'Every round is money. Draft positioning.',
    price: '$1,500',
    period: '/mo',
    href: '/programs/draft-prep',
  },
];

export function PathOptions() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
              After The Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-black/60 max-w-xl mx-auto">
              Once you've completed The 108 Experience, these sustained training options become available.
            </p>
          </div>
        </AnimatedSection>

        {/* Primary Paths - 3 Cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {primaryPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={`group block p-8 transition-all h-full ${
                  path.highlighted
                    ? 'bg-black text-white card-float-dark'
                    : 'bg-white text-black border border-black/10 card-float'
                }`}
              >
                {path.highlighted ? (
                  <span className="inline-block text-[10px] uppercase tracking-wider border border-white text-white px-3 py-1 mb-6">
                    {path.tag}
                  </span>
                ) : (
                  <span className={`inline-block text-[10px] uppercase tracking-wider px-3 py-1 mb-6 ${
                    path.highlighted ? 'border border-white text-white' : 'text-black/40'
                  }`}>
                    {path.tag}
                  </span>
                )}
                <h3 className={`text-2xl font-black mb-3 ${path.highlighted ? 'text-white' : 'text-black'}`}>
                  {path.name}
                </h3>
                <p className={`text-sm mb-6 ${path.highlighted ? 'text-white/60' : 'text-black/60'}`}>
                  {path.description}
                </p>
                <p className={`text-3xl font-black ${path.highlighted ? 'text-white' : 'text-black'}`}>
                  {path.price}
                  <span className={`text-lg font-normal ${path.highlighted ? 'text-white/50' : 'text-black/40'}`}>
                    {path.period}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={0.2}>
          <div className="border-t border-black/10 pt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-8 text-center">
              Ready to Level Up?
            </p>

            {/* Level Up Paths - 2 Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {levelUpPaths.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group block p-6 bg-white border border-black/10 card-float"
                >
                  <h3 className="text-xl font-black text-black mb-2">
                    {path.name}
                  </h3>
                  <p className="text-sm text-black/60 mb-4">
                    {path.description}
                  </p>
                  <p className="text-2xl font-black text-black">
                    {path.price}
                    <span className="text-base font-normal text-black/40">{path.period}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Pro Note */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-black/40 text-sm">
              Already playing professionally?{' '}
              <Link href="/programs/pro-experience" className="text-black font-semibold hover:underline">
                See Pro Experience →
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
