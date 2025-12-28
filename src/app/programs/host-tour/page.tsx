'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';

const hostTourFaqs = [
  {
    question: 'How many athletes can participate?',
    answer: 'Typically 15-30 athletes per tour. We keep it small for quality instruction.',
  },
  {
    question: 'What equipment do I need to provide?',
    answer: 'Standard facility equipment. We bring our specialized gear.',
  },
  {
    question: 'Can I charge athletes more than $500?',
    answer: 'The $500 is our fee. You can charge whatever your market supports.',
  },
  {
    question: 'How far in advance do I need to schedule?',
    answer: 'Minimum 60 days. 90+ days preferred for marketing time.',
  },
  {
    question: 'Do you help promote the tour?',
    answer: "We provide marketing materials. Local promotion is your responsibility.",
  },
  {
    question: 'What ages/skill levels work best?',
    answer: '12U through college-age. Mixed skill levels are fine—we individualize instruction.',
  },
];

const included = [
  '2-day camp at your facility',
  '108 coaching staff on-site',
  'Full method demonstration',
  'Athlete assessments included',
  'Parent education session',
  'Partnership fit evaluation',
];

const benefits = [
  { title: 'Test the Fit', description: 'See how the 108 method works with YOUR athletes in YOUR facility.' },
  { title: 'Revenue Opportunity', description: 'Charge your athletes, we provide the experience.' },
  { title: 'No Risk', description: 'Try the partnership before committing to licensing.' },
  { title: 'Community Building', description: 'Bring elite development to your local athletes.' },
];

export default function HostTourPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Submit to Google Forms
    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdBVaahwu9fkYIKm4XLXb8RYGyXznsHXCW9KQSvEO50JfYWsg/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      setIsSubmitted(true);
    } catch {
      // Google Forms no-cors mode will always "fail" but still submit
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-white py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block bg-black text-white text-xs uppercase tracking-wider px-4 py-2 mb-6"
              >
                Step 2 — Coaches Path
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Host a Tour
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Bring 108 to you. We come to your facility for 2-day camps to see if the method fits your town. Test the partnership before committing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$500</p>
                  <p className="text-gray-500">/athlete</p>
                </div>
                <motion.a
                  href="#apply"
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-black text-white px-8 py-5 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors inline-block"
                >
                  Apply to Host
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-black border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/NQOO_IFjfqQ?rel=0&modestbranding=1"
                  title="108 Tour Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-white/40 text-xs mt-3 text-center">Watch: See what a Tour Experience looks like</p>
            </motion.div>
          </div>
        </section>

        {/* Prerequisite Banner */}
        <section className="bg-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                <strong className="text-black">Prerequisite:</strong> Must complete the Coaches Experience first.
              </p>
              <Link href="/programs/coaches-experience" className="text-sm font-semibold underline hover:no-underline">
                Learn about Coaches Experience →
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
                We bring 108 to you.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {included.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <p className="text-lg">{item}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Why Host</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Benefits for your facility.
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
                  className="bg-white p-8 shadow-lg"
                >
                  <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Application Form */}
        <section id="apply" className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Application</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Apply to host a tour.
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Complete the form below and we'll reach out to discuss dates and logistics.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 p-12 text-center"
              >
                <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-3">Application received.</h3>
                <p className="text-gray-500 mb-6">
                  We'll review your facility details and reach out within 48 hours to discuss next steps.
                </p>
                <Link href="/programs/coaches-experience" className="text-sm font-semibold underline">
                  While you wait, learn about the Coaches Experience →
                </Link>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                {/* Contact Information */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="entry.1770132899"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="entry.1439920903"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="entry.1275903207"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="entry.265236111"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Facility Details */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Facility Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="facilityDescription" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your facility
                      </label>
                      <textarea
                        id="facilityDescription"
                        name="entry.1089127257"
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                        placeholder="Describe your field/facility, equipment available, indoor/outdoor, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Facility Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="entry.1081268188"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="entry.250368492"
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                          placeholder="Houston"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="entry.2091596934"
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                          placeholder="TX"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="entry.58353569"
                          required
                          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                          placeholder="77001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Availability</h3>
                  <div>
                    <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred tour dates
                    </label>
                    <textarea
                      id="dates"
                      name="entry.564716862"
                      required
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                      placeholder="Provide 3 potential dates you'd like to host the tour (minimum 60 days out)"
                    />
                  </div>
                </div>

                {/* Audience & Reach */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Audience & Reach</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="playerPool" className="block text-sm font-medium text-gray-700 mb-2">
                        Player pool in your area
                      </label>
                      <textarea
                        id="playerPool"
                        name="entry.1343912091"
                        required
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                        placeholder="Travel teams, rec leagues, age groups, estimated number of athletes you can reach"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailList" className="block text-sm font-medium text-gray-700 mb-2">
                        Email list size & engagement
                      </label>
                      <textarea
                        id="emailList"
                        name="entry.220108456"
                        required
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                        placeholder="How many contacts? How often do you email? What's your typical open rate?"
                      />
                    </div>
                    <div>
                      <label htmlFor="socials" className="block text-sm font-medium text-gray-700 mb-2">
                        Social media profiles
                      </label>
                      <textarea
                        id="socials"
                        name="entry.251799244"
                        required
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                        placeholder="Instagram, Twitter/X, Facebook handles and follower counts"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website (if applicable)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="entry.131620840"
                        className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                        placeholder="https://yourfacility.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-gray-100">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ y: isSubmitting ? 0 : 2 }}
                    whileTap={{ y: isSubmitting ? 0 : 4 }}
                    className={`w-full sm:w-auto px-12 py-4 font-bold uppercase tracking-wider transition-all ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-gray-900'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                  <p className="mt-4 text-xs text-gray-400">
                    By submitting, you agree to be contacted about hosting a 108 Tour Experience.
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
            >
              What's Next
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-12"
            >
              After the Tour
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/programs/coaches-mentorship" className="group">
                <div className="bg-white/10 p-8 transition-all group-hover:bg-white/20">
                  <span className="inline-block text-xs uppercase tracking-wider text-white/50 mb-4">Step 3</span>
                  <h3 className="text-2xl font-black mb-3">Coaches Mentorship</h3>
                  <p className="text-white/60 text-sm mb-4">Monthly access with senior staff.</p>
                  <p className="text-2xl font-black">$297<span className="text-lg font-normal text-white/50">/mo</span></p>
                </div>
              </Link>
              <Link href="/programs/powered-by-108" className="group">
                <div className="bg-white text-black p-8 transition-all group-hover:shadow-xl">
                  <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-4">Step 4</span>
                  <h3 className="text-2xl font-black mb-3">Powered by 108</h3>
                  <p className="text-gray-600 text-sm mb-4">Full licensing partnership.</p>
                  <p className="text-2xl font-black">$20,000<span className="text-lg font-normal text-gray-500"> Year 1</span></p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={hostTourFaqs} title="Questions about Hosting a Tour" />

        {/* CTA */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready to host?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Complete the Coaches Experience first, then schedule your tour.
            </motion.p>
            <Link href="/programs/coaches-experience">
              <motion.button
                whileHover={{ y: 2 }}
                whileTap={{ y: 4 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
              >
                Start with Coaches Experience
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
