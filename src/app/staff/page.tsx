'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// ============================================================================
// DATA
// ============================================================================

interface StaffMember {
  name: string;
  title: string;
  education: string[];
  certifications: string[];
  bio: string;
  social?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface StaffCategory {
  category: string;
  description: string;
  members: StaffMember[];
}

const staffData: StaffCategory[] = [
  {
    category: 'Leadership & Methodology Architects',
    description: 'The visionaries behind the 108 system.',
    members: [
      {
        name: 'Eugene Bleecker',
        title: 'Founder & CEO',
        education: ['Associate Degree in Communications'],
        certifications: ['Certified 108 Coach'],
        bio: 'Known as the architect of the 108 methodology, Bleecker has spent decades studying human movement and developing a results-driven training system. He oversees all developmental tracks, including athletic, academic, and life skills programs.',
      },
      {
        name: 'William S. M. Marshall',
        title: 'COO & Pitching Director',
        education: ['BBA', 'MBA (in progress)'],
        certifications: ['Certified 108 Coach'],
        bio: 'Marshall oversees facility operations and throwing development, specifically focusing on arm efficiency and velocity. He also provides life and financial mentorship to athletes.',
      },
      {
        name: 'Ryan Lee McMillan',
        title: 'Program Designer',
        education: ['BA in Psychology and General Studies'],
        certifications: ['Certified 108 Coach'],
        bio: 'Also referred to as "Mac," he builds the training programs powering 108 athletes, ranging from daily sessions to long-term periodization.',
      },
      {
        name: 'Jose Rijo-Berger',
        title: 'Academy Director & Business Dev.',
        education: ['BA in Social Work'],
        certifications: ['Certified 108 Coach'],
        bio: 'Rijo-Berger manages the operations of the Performance Institute and serves as a hitting and performance coach.',
      },
    ],
  },
  {
    category: 'Athletic Skill & Performance Coordinators',
    description: 'The coaches who execute the system daily.',
    members: [
      {
        name: 'Nathan Headley',
        title: 'Hitting Coordinator',
        education: ['BBA', 'MS in Sports Management'],
        certifications: ['Certified 108 Coach'],
        bio: 'Headley leads the hitting program, specializing in identifying swing flaws and teaching athletes how to make in-game adjustments.',
      },
      {
        name: 'Tyler Shorter',
        title: 'Director of Performance',
        education: ['BA in Psychology'],
        certifications: ['CSCS', 'Certified 108 Coach'],
        bio: 'Shorter acts as the bridge between the weight room and the field, specializing in strength, conditioning, and recovery.',
      },
      {
        name: 'William Adam Snyder',
        title: 'Pitching Coach',
        education: ['BA in Sports Management'],
        certifications: ['Certified 108 Coach'],
        bio: 'Snyder leads daily pitching training with a focus on arm efficiency.',
      },
      {
        name: 'Nicholas A. Osborne',
        title: 'Hitting Instructor',
        education: ['BBA in Business Management'],
        certifications: ['Certified 108 Coach'],
        bio: 'Osborne guides daily hitting drills and rotational strength development.',
      },
      {
        name: 'Jacob Gwynne',
        title: 'Youth Program Director',
        education: ['BA in History', 'Minor in Education'],
        certifications: ['Certified 108 Coach'],
        bio: 'Gwynne leads the curriculum for youth athletes and focuses on life skills development.',
      },
    ],
  },
  {
    category: 'Softball Leadership',
    description: 'Elite expertise for the softball program.',
    members: [
      {
        name: 'Jamie Southern-Wiggins',
        title: 'Softball Director',
        education: ['Teacher Certification'],
        certifications: ['US National Team Gold Medalist', 'Four-Time All-American (Fresno State)'],
        bio: 'A former US National Team gold medalist and four-time All-American pitcher at Fresno State, Southern-Wiggins brings elite expertise to the softball program with a focus on female pitching guidance and development.',
      },
      {
        name: 'Bodie Mark Parker',
        title: 'Softball Development & Social Media',
        education: ['AS in Psychology'],
        certifications: ['Certified 108 Coach'],
        bio: 'Parker is a softball trainer and rotational force specialist who also coaches athletes on NIL (Name, Image, Likeness) and branding.',
      },
    ],
  },
  {
    category: 'Academic & Administrative Support',
    description: 'The team ensuring athlete success beyond the field.',
    members: [
      {
        name: 'Leanne Denny',
        title: 'Director of Academics',
        education: ['BA in Education', 'Master\'s in Theology'],
        certifications: [],
        bio: 'Denny oversees student scheduling, workload management, and guidance counseling.',
      },
      {
        name: 'Lindsay Case',
        title: 'Education Liaison',
        education: ['Background in Theology'],
        certifications: ['Certified Elementary Educator'],
        bio: 'Case controls student pacing and advancement while overseeing overall student development.',
      },
      {
        name: 'Ashley Marie Finley',
        title: 'Teacher–Tutor',
        education: ['BA in Elementary Education'],
        certifications: ['Certified Elementary Educator'],
        bio: 'Finley specializes in ELA, writing, reading, and oratorical development.',
      },
      {
        name: 'Rebecca Rijo-Berger',
        title: 'Director of Curriculum',
        education: ['BA in Elementary Education'],
        certifications: ['Certified Educator'],
        bio: 'She oversees curriculum vetting and the life-skills curriculum.',
      },
      {
        name: 'Cooper Ryan Gee',
        title: 'Content Curator & Dir. of Media',
        education: ['BA in Entrepreneurship'],
        certifications: [],
        bio: 'Gee creates multimedia content regarding player journeys and provides NIL education.',
      },
      {
        name: 'Kelli McDaniel',
        title: 'Admin & Facility Coordinator',
        education: ['AAS in Photographic Technology'],
        certifications: [],
        bio: 'McDaniel handles facility operations, onboarding, payments, and scheduling.',
      },
      {
        name: 'Casey Kostrzewa',
        title: 'Social Media Coordinator',
        education: ['BA in Health/Behavioral Sciences', 'MBA'],
        certifications: ['Certified 108 Coach'],
        bio: 'Focused on branding and NIL content creation.',
      },
    ],
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function StaffCard({ member, isExpanded, onToggle }: {
  member: StaffMember;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-bold text-white/30">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-white">{member.name}</h3>
            <p className="text-sm text-white/50">{member.title}</p>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-white/50 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              {/* Bio */}
              <p className="text-white/70 leading-relaxed mb-6">{member.bio}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Education */}
                {member.education.length > 0 && (
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Education</p>
                    <ul className="space-y-1">
                      {member.education.map((edu, i) => (
                        <li key={i} className="text-sm text-white/60">{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certifications */}
                {member.certifications.length > 0 && (
                  <div className="bg-white/[0.03] rounded-xl p-4">
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Certifications</p>
                    <ul className="space-y-1">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="text-sm text-white/60">{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Social Links (placeholder for future) */}
              {member.social && (
                <div className="flex gap-3 mt-4">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function StaffPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMember = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  // Count total staff
  const totalStaff = staffData.reduce((acc, cat) => acc + cat.members.length, 0);

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                The 108 Team
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                Meet the staff.
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                {totalStaff} professionals dedicated to athlete development—on and off the field.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Staff Categories */}
        {staffData.map((category, catIndex) => (
          <section
            key={category.category}
            className={`py-16 px-6 border-b border-white/10 ${catIndex % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.category}
                </h2>
                <p className="text-white/50">{category.description}</p>
              </motion.div>

              <div className="space-y-3">
                {category.members.map((member) => (
                  <StaffCard
                    key={member.name}
                    member={member}
                    isExpanded={expandedMember === member.name}
                    onToggle={() => toggleMember(member.name)}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to train with us?
              </h2>
              <p className="text-white/60 mb-8">
                Experience the 108 methodology firsthand.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/programs/experience"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Book The 108 Experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:info@108performance.com"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
