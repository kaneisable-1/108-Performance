'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// ============================================================================
// DATA
// ============================================================================

const teamMembers = [
  {
    name: 'Eugene Bleecker',
    title: 'Founder & CEO',
    credential: 'Elite athlete coach for MLB players; pioneer in human movement.',
    image: '/team/eugene.jpg',
  },
  {
    name: 'Dr. Mark Adams',
    title: 'CTO',
    credential: 'MIT PhD physicist; 30+ years in defense & energy programs.',
    image: '/team/mark.jpg',
  },
  {
    name: 'Joel Drake',
    title: 'President',
    credential: 'Managed over $1 billion in complex technology development programs.',
    image: '/team/joel.jpg',
  },
  {
    name: 'Donnie Ecker',
    title: 'Advisor',
    credential: 'MLB Bench Coach & Offensive Coordinator.',
    image: '/team/donnie.jpg',
  },
];

const tractionMetrics = [
  { value: '954+', label: 'Paying Users' },
  { value: '$50', label: 'Monthly Subscription' },
  { value: '66+', label: 'New Users Monthly' },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function InvestorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentInterest: '',
    isAccredited: false,
    howHeard: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
        <p className="text-white/60 mb-6">
          Thank you for your interest in 108 Performance. Our team will review your request and send the full investor deck within 24 hours.
        </p>
        <p className="text-sm text-white/40">
          For immediate questions, contact Will Marshall, COO
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-white mb-6">Request Full Investor Deck</h3>

      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/60 mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/60 mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">Investment Interest</label>
            <select
              value={formData.investmentInterest}
              onChange={(e) => setFormData({ ...formData, investmentInterest: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
            >
              <option value="" className="bg-black">Select range</option>
              <option value="25k-50k" className="bg-black">$25,000 - $50,000</option>
              <option value="50k-100k" className="bg-black">$50,000 - $100,000</option>
              <option value="100k-250k" className="bg-black">$100,000 - $250,000</option>
              <option value="250k-500k" className="bg-black">$250,000 - $500,000</option>
              <option value="500k+" className="bg-black">$500,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/60 mb-2">How did you hear about us?</label>
          <input
            type="text"
            value={formData.howHeard}
            onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
            className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
            placeholder="Referral, LinkedIn, etc."
          />
        </div>

        {/* Accredited Investor Certification */}
        <div className="pt-4 border-t border-white/10">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              required
              checked={formData.isAccredited}
              onChange={(e) => setFormData({ ...formData, isAccredited: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.05] text-white focus:ring-0 focus:ring-offset-0"
            />
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
              I confirm that I am an <span className="text-white font-medium">accredited investor</span> as defined by SEC Rule 501 of Regulation D. I understand that securities offered may only be sold to accredited investors. *
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </>
          ) : (
            <>
              Request Investor Deck
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-white/30 mt-4 text-center">
        Your information is kept confidential and will only be used for investment communications.
      </p>
    </form>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function InvestorsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black">
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="min-h-[90vh] flex items-center px-6 py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] border border-white rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] border border-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                  Investor Relations
                </p>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
                  Revolutionizing Human Movement.
                  <span className="block text-white/40">Scalable.</span>
                </h1>

                <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Raising a $6M Seed Round.
                </p>

                <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
                  Own the future of individualized performance. Our proprietary software scales a proven, science-based training model into a multi-billion dollar market.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                  <a
                    href="#request-deck"
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors rounded-full"
                  >
                    Request Full Investor Deck
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <a href="#valuation" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4">
                  Learn more about our $30M Post-Money Valuation Cap →
                </a>
              </motion.div>

              {/* Right: Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="/products/bridge-athletic/three-phones.png"
                    alt="108 Performance Software - Game Specific, Anchored, and Dynamic Training Modes"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PROOF SECTION: TECHNOLOGY & SCIENCE
        ================================================================ */}
        <section className="py-24 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Competitive Moat
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Tested Algorithms. Proven Science.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technology Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
              >
                <div className="w-12 h-12 mb-6 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Defense-Grade AI.</h3>
                <p className="text-white/60 leading-relaxed">
                  Our algorithms utilize advanced machine learning and physics algorithms, originally developed for <span className="text-white font-medium">U.S. Government defense and energy applications.</span>
                </p>
              </motion.div>

              {/* Science Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-8"
              >
                <div className="w-12 h-12 mb-6 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Beyond Antiquated Training.</h3>
                <p className="text-white/60 leading-relaxed">
                  The 108 Method trains clean, efficient movement patterns based on <span className="text-white font-medium">recent scientific advances in human movement</span>, directly solving the injury epidemic associated with old models.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SCALE SECTION: MARKET & TRACTION
        ================================================================ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Growth Opportunity
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                A Business Model Built for Exponential Scale.
              </h2>
            </motion.div>

            {/* Market Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-xl font-bold text-white mb-4">Market Expansion</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Beyond our initial success in elite sports, the 108 Software is an evergreen platform designed for immediate expansion into high-value, multi-billion dollar domains:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Elite Sports', 'Healthcare', 'Military/Defense', 'Corporate Wellness'].map((market, index) => (
                  <motion.div
                    key={market}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/[0.05] rounded-xl p-4 text-center border border-white/10"
                  >
                    <p className="font-semibold text-white">{market}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Traction Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6 text-center">
                Traction and Revenue Today
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {tractionMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 text-center"
                  >
                    <p className="text-5xl font-black text-white mb-2">{metric.value}</p>
                    <p className="text-white/50 uppercase tracking-wider text-sm">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            VALUATION SECTION
        ================================================================ */}
        <section id="valuation" className="py-24 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Investment Terms
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                $30M Post-Money Valuation Cap
              </h2>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 inline-block">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Raising</p>
                    <p className="text-3xl font-black text-white">$6M</p>
                    <p className="text-white/50">Seed Round</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Valuation Cap</p>
                    <p className="text-3xl font-black text-white">$30M</p>
                    <p className="text-white/50">Post-Money</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            TEAM SECTION
        ================================================================ */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Leadership
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                An Elite Team of Experts.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center"
                >
                  {/* Placeholder for photo */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white/40">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/50 mb-3">{member.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{member.credential}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CONVERSION SECTION
        ================================================================ */}
        <section id="request-deck" className="py-24 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Vision Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                  The Opportunity
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                  The Future of Human Performance is 108.
                </h2>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  We are not just building a training app; we are building the industry standard for human movement analysis and optimization globally. We are solving the problem of antiquated training methods with proprietary technology and unmatched expertise.
                </p>
                <p className="text-xl font-bold text-white mb-8">
                  Invest in the company that is revolutionizing human movement.
                </p>

                {/* Contact Info */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                  <p className="text-sm text-white/40 mb-2">Direct Contact</p>
                  <p className="text-lg font-bold text-white">Will Marshall</p>
                  <p className="text-white/60">Chief Operating Officer</p>
                  <a href="mailto:will@108performance.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm mt-2 inline-block">
                    will@108performance.com
                  </a>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <InvestorForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            LEGAL DISCLAIMER
        ================================================================ */}
        <section className="py-12 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-white/30 leading-relaxed text-center">
              This page does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer or solicitation will be made only by means of definitive offering documents, including a private placement memorandum, which will be provided to prospective investors. Securities offered have not been registered under the Securities Act of 1933, as amended, or any state securities laws and may not be offered or sold except pursuant to an exemption from, or in a transaction not subject to, the registration requirements of the Securities Act and applicable state securities laws. Investment involves substantial risk, including the possible loss of principal.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
