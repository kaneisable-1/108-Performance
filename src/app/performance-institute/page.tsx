'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// ============================================================================
// DATA
// ============================================================================

const pillars = [
  {
    icon: 'academic',
    title: 'Academic Excellence',
    description: 'NCAA-compliant mastery learning',
  },
  {
    icon: 'baseball',
    title: 'Baseball & Softball',
    description: 'Elite skill development',
  },
  {
    icon: 'strength',
    title: 'Strength Training',
    description: 'Movement-first conditioning',
  },
  {
    icon: 'development',
    title: 'Personal Development',
    description: 'Leadership & character',
  },
];

const academicFeatures = [
  'NCAA-compliant curriculum',
  'No late penalties — focus on comprehension',
  'Never choose between GPA and development',
  'On-site academic liaison support',
];

const techStack = [
  { name: 'HitTrax', description: 'Exit velocity & launch angle' },
  { name: 'YakkerTech', description: 'Pitch tracking & spin rate' },
  { name: 'Rapsodo', description: 'Ball flight analytics' },
  { name: 'SensorEdge', description: 'Biomechanics monitoring' },
];

const pricingTiers = [
  {
    id: 'starter',
    name: 'PI Starter',
    price: 14500,
    originalPrice: 24500,
    features: [
      'Daily training sessions',
      'Mini Master Classes',
      'Strength & conditioning',
      'Recovery protocols',
    ],
  },
  {
    id: 'standard',
    name: 'PI Standard',
    price: 17000,
    originalPrice: 27000,
    features: [
      'Daily training sessions',
      'Full Master Classes',
      'On-site academic liaison',
      'Strength & conditioning',
      'Recovery protocols',
    ],
  },
  {
    id: 'plus',
    name: 'PI+',
    price: 25000,
    originalPrice: 35000,
    recommended: true,
    features: [
      'ASU Prep Global Education',
      'Daily training sessions',
      'Full Master Classes',
      'On-site academic liaison',
      'Strength & conditioning',
      'Recovery protocols',
      'Quarterly progress reports',
    ],
  },
];

const enrollmentSteps = [
  {
    number: '01',
    title: 'Submit Application',
    description: 'Open for middle and high school athletes',
  },
  {
    number: '02',
    title: 'Scholarship Review',
    description: 'Complete THE108WAY Foundation form',
  },
  {
    number: '03',
    title: 'Onboarding',
    description: 'Meet with Academy Director to finalize your phase plan',
  },
];

// ============================================================================
// ICON COMPONENTS
// ============================================================================

function IconAcademic({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3L1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4" />
    </svg>
  );
}

function IconBaseball({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M6.5 6c1.5 2 1.5 4 0 6s-1.5 4 0 6M17.5 6c-1.5 2-1.5 4 0 6s1.5 4 0 6" />
    </svg>
  );
}

function IconStrength({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6.5 6.5L17.5 17.5M6.5 17.5L17.5 6.5" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function IconDevelopment({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconCheck({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function getIcon(iconName: string, className: string) {
  switch (iconName) {
    case 'academic': return <IconAcademic className={className} />;
    case 'baseball': return <IconBaseball className={className} />;
    case 'strength': return <IconStrength className={className} />;
    case 'development': return <IconDevelopment className={className} />;
    default: return <IconAcademic className={className} />;
  }
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function PerformanceInstitute() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black">
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-white rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* TPI Logo */}
              <div className="mb-10">
                <Image
                  src="/tpi-logo.png"
                  alt="The Performance Institute - Powered by 108"
                  width={400}
                  height={120}
                  className="mx-auto h-auto w-auto max-w-[300px] md:max-w-[400px]"
                  priority
                />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8">
                The door is open.
              </h1>

              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                Where elite development meets academic excellence.
                A full-time academy for those who seek truth in the trenches.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors rounded-full"
                >
                  Apply for Immediate Enrollment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Rolling Enrollment Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/70">Rolling Enrollment Now Open</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            DEFINITION SECTION
        ================================================================ */}
        <section className="py-24 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                A full-time academy.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Not a travel team. Not a clinic.
                A nine-month immersion into the 108 Performance OS.
              </p>
            </motion.div>

            {/* Four Pillars Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                    {getIcon(pillar.icon, 'w-6 h-6 text-white')}
                  </div>
                  <h3 className="font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/50">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-white/60 text-lg max-w-3xl mx-auto mt-12 leading-relaxed"
            >
              We combine elite baseball and softball training with accredited academics,
              personal development, and leadership coaching to transform student-athletes
              into exceptional competitors.
            </motion.p>
          </div>
        </section>

        {/* ================================================================
            ACADEMICS SECTION
        ================================================================ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Academics
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Mastery over memorization.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl">
                Accredited online education through ASU Prep Global with on-site monitoring.
              </p>
            </motion.div>

            {/* Features Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {academicFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* ASU Prep Global Badge */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-black text-white">ASU</span>
                </div>
                <div>
                  <p className="font-semibold text-white">ASU Prep Global</p>
                  <p className="text-sm text-white/50">Accredited Online Education Partner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            THE LAB SECTION
        ================================================================ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                The Lab
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Train the Greyhound.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl">
                Daily high-intent skill sessions, strength training, and recovery protocols.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
                Technology Stack
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/[0.05] rounded-xl p-4 text-center"
                  >
                    <p className="font-bold text-white mb-1">{tech.name}</p>
                    <p className="text-xs text-white/50">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-white/50 text-sm mt-6">
                Same technology used by MLB professionals — quarterly biomechanics evolution tracking
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            PRICING SECTION
        ================================================================ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Investment
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Invest in self-mastery.
              </h2>
            </motion.div>

            {/* Scholarship Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl p-6 mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">⭐</span>
                <p className="text-xl font-bold text-white">$10,000 Scholarship</p>
              </div>
              <p className="text-white/70">
                First 20 students receive scholarship from THE108WAY Foundation
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    tier.recommended
                      ? 'bg-white text-black'
                      : 'bg-white/[0.05] border border-white/10 text-white'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <h3 className={`text-xl font-bold mb-4 ${tier.recommended ? 'text-black' : 'text-white'}`}>
                    {tier.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-black ${tier.recommended ? 'text-black' : 'text-white'}`}>
                        ${tier.price.toLocaleString()}
                      </span>
                    </div>
                    <p className={`text-sm line-through ${tier.recommended ? 'text-black/40' : 'text-white/40'}`}>
                      ${tier.originalPrice.toLocaleString()}
                    </p>
                    <p className={`text-xs mt-1 ${tier.recommended ? 'text-black/60' : 'text-white/60'}`}>
                      per 9-month program
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <IconCheck className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          tier.recommended ? 'text-black' : 'text-green-400'
                        }`} />
                        <span className={`text-sm ${tier.recommended ? 'text-black/80' : 'text-white/70'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#apply"
                    className={`block w-full text-center py-3 font-semibold rounded-full transition-colors ${
                      tier.recommended
                        ? 'bg-black text-white hover:bg-black/80'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Apply Now
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-white/40 text-sm mt-8">
              * Scholarship pricing shown. Limited to first 20 students.
            </p>
          </div>
        </section>

        {/* ================================================================
            ENROLLMENT SECTION
        ================================================================ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Enrollment
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Start any day.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Rolling enrollment now open for middle and high school athletes.
                Our mastery-based curriculum allows you to begin your journey immediately.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {enrollmentSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < enrollmentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/20" />
                  )}

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <span className="text-xl font-black text-white">{step.number}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/60">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Season Start Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center bg-white/[0.05] border border-white/10 rounded-2xl p-6"
            >
              <p className="text-white/70">
                <span className="font-semibold text-white">Official seasonal start: September 3rd</span>
                <br />
                <span className="text-white/50">(But you don't have to wait)</span>
              </p>
            </motion.div>

            {/* Analogy Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-white/50 italic max-w-3xl mx-auto">
                "Traditional schools are like trains that only leave the station once a year.
                The Performance Institute is a high-performance highway.
                The road is open right now."
              </p>
            </motion.blockquote>
          </div>
        </section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <section id="apply" className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to begin?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                {/* Apply Card */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Submit Application</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Start your enrollment process today
                  </p>
                  <a
                    href="https://forms.gle/placeholder" // Replace with actual form URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Schedule Call Card */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Speak with Jose Rio Berger
                  </p>
                  <a
                    href="https://calendly.com/placeholder" // Replace with actual Calendly URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Book Call
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-white/50 text-sm">
                <p>
                  Contact: <span className="text-white font-medium">Jose Rio Berger</span>, Academy Director
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
