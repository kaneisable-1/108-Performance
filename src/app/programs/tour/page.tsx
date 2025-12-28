'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { PageFAQ } from '@/components/ui/PageFAQ';

const tourFaqs = [
  {
    question: 'What is a Tour Experience?',
    answer: 'A 2-day intensive camp where 108 coaches come to a facility near you. More swings, more throws, real development—not your typical camp.',
  },
  {
    question: 'How is this different from other camps?',
    answer: 'Traditional camps mean large groups, limited reps, and lots of waiting. Tour Experience is the opposite: small groups, maximum reps, individualized instruction.',
  },
  {
    question: 'What do athletes take home?',
    answer: 'Every athlete leaves with their personalized movement system documented, plus equipment (water bags, BP vest) to continue training at home.',
  },
  {
    question: 'What ages can attend?',
    answer: '12U through college-age athletes. We individualize instruction regardless of skill level.',
  },
  {
    question: 'Do parents need to stay?',
    answer: 'Parents are welcome to watch. We also include a parent education session so you understand what your athlete is learning.',
  },
  {
    question: 'What if there\'s no tour near me?',
    answer: 'Request a tour! If you\'re a coach or facility owner, you can host a tour and bring 108 to your community.',
  },
];

const included = [
  '2 full days of intensive training',
  'Small group instruction (15-30 athletes)',
  '108 coaching staff on-site',
  'Personalized movement assessment',
  'Your custom system documented',
  'Water bags & BP vest to take home',
  'Parent education session',
  'Path to continued development',
];

const differentiators = [
  {
    traditional: 'Large groups (50-100+)',
    tour: 'Small groups (15-30)',
  },
  {
    traditional: 'Limited reps, lots of waiting',
    tour: 'Maximum reps, minimal downtime',
  },
  {
    traditional: 'Generic instruction',
    tour: 'Individualized coaching',
  },
  {
    traditional: 'Entertainment-focused',
    tour: 'Development-focused',
  },
  {
    traditional: 'Nothing to take home',
    tour: 'Equipment + your documented system',
  },
];

// Sample upcoming tours - replace with real data later
const upcomingTours = [
  {
    city: 'Nashville, TN',
    facility: 'Elite Baseball Academy',
    dates: 'January 18-19, 2025',
    spotsLeft: 8,
  },
  {
    city: 'Atlanta, GA',
    facility: 'Georgia Performance Center',
    dates: 'February 1-2, 2025',
    spotsLeft: 12,
  },
  {
    city: 'Charlotte, NC',
    facility: 'Carolina Training Complex',
    dates: 'February 15-16, 2025',
    spotsLeft: 5,
  },
];

export default function TourExperiencePage() {
  const [zipCode, setZipCode] = useState('');
  const [searchResults, setSearchResults] = useState<typeof upcomingTours | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show all tours. Later integrate with real zip code lookup
    setSearchResults(upcomingTours);
  };

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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
              >
                108 Comes to You
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Tour<br />
                <span className="text-white/40">Experience</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-8 max-w-xl"
              >
                What if a camp was the most productive environment you've ever trained in? More swings, more throws, real development in a fraction of the time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div>
                  <p className="text-6xl font-black">$500</p>
                  <p className="text-white/50">/athlete</p>
                  <p className="text-xs text-white/40 mt-1">2-day intensive</p>
                </div>
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  onClick={() => {
                    document.getElementById('find-tour')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-black px-8 py-5 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Find a Tour Near You
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-[#0d0d0d] py-16">
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

        {/* The Problem with Camps */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">The Difference</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Not your typical camp.
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Large groups, limited reps, minimal instruction, maximized waiting. Sound familiar? That's not productive. Here's how we're different.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
                {/* Header */}
                <div className="bg-gray-100 p-6 border-b border-r border-gray-200">
                  <p className="font-black text-gray-400 uppercase text-sm tracking-wider">Traditional Camps</p>
                </div>
                <div className="bg-black p-6 border-b border-gray-200">
                  <p className="font-black text-white uppercase text-sm tracking-wider">Tour Experience</p>
                </div>

                {/* Rows */}
                {differentiators.map((item, index) => (
                  <>
                    <div key={`trad-${index}`} className="p-6 border-b border-r border-gray-200 flex items-center">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-500">{item.traditional}</span>
                      </div>
                    </div>
                    <div key={`tour-${index}`} className="p-6 border-b border-gray-200 flex items-center bg-gray-50">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{item.tour}</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-gray-50 py-24">
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
                <span className="text-gray-300">In 2 days.</span>
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

        {/* Find a Tour */}
        <section id="find-tour" className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Find a Tour</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Enter your zip code.
              </h2>
              <p className="text-white/60">
                We'll show you the nearest Tour Experiences.
              </p>
            </motion.div>

            {/* Zip Code Search */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSearch}
              className="max-w-md mx-auto mb-12"
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter zip code"
                  className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
                  maxLength={5}
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider"
                >
                  Search
                </motion.button>
              </div>
            </motion.form>

            {/* Results */}
            {searchResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-white/60 text-center mb-6">
                  {searchResults.length} upcoming tours found
                </p>
                {searchResults.map((tour, index) => (
                  <motion.div
                    key={tour.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-black mb-1">{tour.city}</h3>
                      <p className="text-white/50 text-sm">{tour.facility}</p>
                      <p className="text-white/70 text-sm mt-2">{tour.dates}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm ${tour.spotsLeft <= 5 ? 'text-red-400' : 'text-white/50'}`}>
                        {tour.spotsLeft} spots left
                      </span>
                      <motion.button
                        whileHover={{ y: 2 }}
                        whileTap={{ y: 4 }}
                        className="bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-wider"
                      >
                        Register
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Show all tours link */}
            {!searchResults && (
              <div className="text-center">
                <button
                  onClick={() => setSearchResults(upcomingTours)}
                  className="text-white/50 hover:text-white text-sm underline"
                >
                  Or view all upcoming tours
                </button>
              </div>
            )}
          </div>
        </section>

        {/* For Coaches: Host a Tour */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">For Coaches & Facilities</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                No tour near you?<br />
                <span className="text-gray-300">Host one.</span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Bring the 108 Tour Experience to your facility. We come to you with everything needed for a 2-day camp. Test the partnership before committing.
              </p>
              <Link href="/programs/host-tour">
                <motion.button
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 4 }}
                  className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider"
                >
                  Learn About Hosting
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={tourFaqs} title="Questions about Tour Experience" />

        {/* CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Ready for real development?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 mb-8"
            >
              Find a Tour Experience near you and see the difference.
            </motion.p>
            <motion.button
              whileHover={{ y: 2 }}
              whileTap={{ y: 4 }}
              onClick={() => {
                document.getElementById('find-tour')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider"
            >
              Find a Tour
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
