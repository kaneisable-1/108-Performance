'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';

const poweredBy108Faqs = [
  {
    question: 'Is this a franchise?',
    answer: "No. It's a licensing partnership. You own your business. We license you the methodology.",
  },
  {
    question: 'What are the ongoing costs?',
    answer: '$20,000 Year 1 includes setup and training. Renewal fees vary based on partnership level.',
  },
  {
    question: 'Do you limit how many facilities can be Powered by 108?',
    answer: 'Yes. We protect territories and maintain quality. Not every applicant is accepted.',
  },
  {
    question: 'What support do I get after licensing?',
    answer: 'Ongoing mentorship access, annual certification, updates to methodology, and marketing support.',
  },
  {
    question: 'Can I lose my license?',
    answer: 'Yes. If quality standards slip or brand guidelines are violated, we can terminate the partnership.',
  },
  {
    question: 'How long does the full process take?',
    answer: 'Typically 6-12 months from Coaches Experience to full licensing. We don\'t rush fit evaluation.',
  },
];

const included = [
  'Full 108 system licensing rights',
  'Complete methodology documentation',
  'Branded materials and assets',
  'Staff training program',
  'Ongoing mentorship access',
  'Annual in-person certification',
  'Marketing support',
  'Technology stack access',
];

const benefits = [
  { title: 'Proven System', description: 'Implement a method tested over 15 years with first-round draft picks.' },
  { title: 'Differentiation', description: 'Stand out from cookie-cutter facilities with a unique approach.' },
  { title: 'Support', description: 'Ongoing access to 108 staff for implementation questions.' },
  { title: 'Community', description: 'Join a network of Powered by 108 facilities.' },
];

export default function PoweredBy108Page() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-black text-white py-32">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="bg-white p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/50">Step 4 — Full Partnership</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Powered by 108
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                Full partnership. Your space, our system. Everything you need to run on the 108 system and bring elite development to your community.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-7xl font-black">$20,000</p>
                  <p className="text-white/50">Year 1 Licensing Fee</p>
                </div>
                <Link href="https://link.apisystem.tech/widget/survey/rRS8SHjyfeyS7I78qIoZ" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-white text-black px-8 py-5 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Apply for Licensing
                  </motion.button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-6">Purchase Now: </p>
                </div>
                <Link href="https://link.fastpaydirect.com/payment-link/696febdd53f21b21fbfc61b7" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    $20,000 for Year 1
                  </motion.button>
                </Link>
                <Link href="https://link.fastpaydirect.com/payment-link/696febfd7dba832d3eba315e" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ y: 2 }}
                    whileTap={{ y: 4 }}
                    className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                  >
                    Renew Here
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prerequisite Banner */}
        <section className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                <strong className="text-white">Prerequisite:</strong> Must complete Coaches Experience and demonstrate partnership fit.
              </p>
              <Link href="/programs/coaches-experience" className="text-sm font-semibold text-white underline hover:no-underline">
                Start with Coaches Experience →
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">What's Included</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Everything you need.<br />
                <span className="text-gray-300">Nothing held back.</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {included.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <p className="text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Why Partner</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                The 108 advantage.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Investment */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              The Investment
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              A partnership, not a franchise.
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8"
              >
                <p className="text-5xl font-black mb-2">$20,000</p>
                <p className="text-white/50">Year 1 Licensing Fee</p>
                <p className="text-sm text-white/40 mt-4">Includes full setup, training, and implementation support.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 p-8"
              >
                <p className="text-5xl font-black mb-2">Annual</p>
                <p className="text-white/50">Renewal Fee</p>
                <p className="text-sm text-white/40 mt-4">Continued access, updates, and ongoing support. Pricing varies.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 text-center"
            >
              The Path to Partnership
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-16 text-center"
            >
              How to become Powered by 108.
            </motion.h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Coaches Experience', description: 'Complete the mandatory first step. Shadow the method.' },
                { step: '2', title: 'Host a Tour', description: 'Bring 108 to your facility. Test the fit with your athletes.' },
                { step: '3', title: 'Coaches Mentorship', description: 'Learn the system. Start implementing with guidance.' },
                { step: '4', title: 'Licensing Agreement', description: 'Formalize the partnership. Become Powered by 108.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 bg-gray-50 p-6"
                >
                  <span className="text-4xl font-black text-gray-300">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-black mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={poweredBy108Faqs} title="Questions about Licensing" />

        {/* CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to partner?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-8"
            >
              Start the journey with the Coaches Experience.
            </motion.p>
            <Link href="/programs/coaches-experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider"
              >
                Apply for Coaches Experience
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
