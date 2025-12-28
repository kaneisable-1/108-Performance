'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

// ============================================================================
// DATA
// ============================================================================

const brandIdentity = {
  philosophy: 'Human → Athlete → Player',
  mantra: 'Greatness isn\'t a gift; it\'s an obsession.',
  status: 'Data influenced, Results driven',
};

const notableDraftPicks = [
  { name: 'Paul Skenes', pick: '#1 Overall', year: '2023', highlight: true },
  { name: 'Tommy Troy', pick: '1st Round', year: '2023' },
  { name: 'Matt McLain', pick: '1st Round', year: '2021' },
  { name: 'Nolan Schanuel', pick: '1st Round', year: '2023' },
  { name: 'Chase Dolander', pick: '1st Round', year: '2023' },
  { name: 'Matt Shaw', pick: '1st Round', year: '2023' },
  { name: 'Bryce Rainer', pick: '1st Round', year: '2024' },
  { name: 'Ethan Schiefelbien', pick: '1st Round', year: '2024' },
];

const performanceMetrics = [
  {
    category: 'Pro Hitting',
    icon: 'bat',
    stats: [
      { label: 'Average OPS Increase', value: '32%', color: 'from-blue-500 to-cyan-400' },
      { label: 'Average Slugging Increase', value: '39%', color: 'from-blue-500 to-cyan-400' },
    ],
  },
  {
    category: 'Pitching Performance',
    icon: 'arm',
    stats: [
      { label: 'Velocity Increase (Sequencing)', value: '3-5 mph', color: 'from-orange-500 to-yellow-400' },
      { label: 'Valgus Torque Reduction (Recoil)', value: '38%', color: 'from-green-500 to-emerald-400' },
    ],
  },
  {
    category: 'Softball',
    icon: 'softball',
    stats: [
      { label: 'Youth Velocity Jump (18 months)', value: '20-24 mph', color: 'from-pink-500 to-rose-400' },
    ],
  },
];

const dashboardData = [
  { category: 'MLB Draft', metric: 'Paul Skenes (#1 Overall) + multiple 1st Rounders', icon: 'trophy' },
  { category: 'Pro Hitting', metric: '32% OPS increase, 39% Slugging increase', icon: 'chart' },
  { category: 'Arm Health', metric: '38% decrease in valgus torque via Recoil', icon: 'shield' },
  { category: 'Throwing Velo', metric: '3-5 mph increase through trunk-to-arm transfer', icon: 'speed' },
  { category: 'HS Pipeline', metric: 'Staff improved from sub-80 to 6-8 players at 86-91 mph', icon: 'users' },
];

const caseStudies = [
  {
    id: 'brandon-dixon',
    athlete: 'Brandon Dixon',
    organization: 'Cincinnati Reds',
    level: 'MLB',
    tier: 'Tier 1',
    title: 'Bypassing the AAA Ceiling through Neuromuscular Control',
    problem: {
      summary: 'Brandon Dixon was a highly physical athlete playing in AAA who struggled with adjustability and plate coverage.',
      details: [
        'Stood too upright with weight in heels',
        'Over 60 degrees of internal rotation in lead hip',
        'No cross-body tension—disconnected swing',
        'High strikeout-to-walk ratio',
      ],
    },
    intervention: {
      summary: '108 Performance committed 250 hours during one off-season to overhaul movement solutions.',
      details: [
        'Instability Training: Rotations using 108 Waterbags on foam pads barefoot',
        'Variable Resistance: Green Loop Bands around thighs for glute activation',
        'Ball Striking Efficiency: Soccer balls for rotational efficiency',
        'Focus on "Moving from the Middle" to tighten fascial network',
      ],
    },
    results: {
      headline: '.261 → .347 AVG',
      subheadline: 'OPS & Slugging up 150+ points',
      details: 'Led to a Major League call-up where he spent the remainder of the season.',
    },
    toolkit: ['Pro Experience', '108 Waterbags (MAMO)', '108 Anchor Bands', 'Cortex Board'],
  },
  {
    id: 'jake-marisnick',
    athlete: 'Jake Marisnick',
    organization: 'Houston Astros',
    level: 'MLB',
    tier: 'Tier 1',
    title: 'Overhauling Power via Space and Direction',
    problem: {
      summary: 'A premiere athlete (6\'4", 225 lbs) with only 17 career home runs over five seasons.',
      details: [
        'Long swing that was pushy, handsy, and steep',
        'Landed tall and open, killing space to work behind the ball',
        'Body not working for his barrel',
        'Destroyed adjustability to off-speed pitches',
      ],
    },
    intervention: {
      summary: 'First month and a half involved zero bat-to-ball work—purely Movement Intelligence.',
      details: [
        'Med Ball Under Arms drill to clear lead elbow',
        'Core Velo Belt Assist to force bracing against lead leg',
        'Stop Swings and "Get punched in the stomach" cues at contact',
        'Created awareness of good vs. bad movement patterns',
      ],
    },
    results: {
      headline: '17 → 40 HR Pace',
      subheadline: '16 HRs in first 200 at-bats',
      details: 'Finished that stretch with a .755 OPS and 105 wRC+.',
    },
    toolkit: ['Pro Experience', 'Biomechanics Lab', 'Core Velocity Belt', 'Med Balls'],
  },
  {
    id: 'kumar-rocker',
    athlete: 'Kumar Rocker',
    organization: 'Texas Rangers',
    level: 'MLB',
    tier: 'Tier 1',
    title: 'The 8-Month Trench: Reclaiming the Draft Floor',
    problem: {
      summary: 'After being the 10th overall pick in 2021, the Mets declined to sign due to shoulder concerns.',
      details: [
        'Mechanics characterized as a "linear push"',
        'Relied on high-intent "head whack" rather than efficient sequencing',
        'Limited to 94-95 mph with questionable durability',
      ],
    },
    intervention: {
      summary: 'Rocker spent eight months in Knoxville, training six hours a day.',
      details: [
        'Rotational Rate of Force Development via Waterbag Peel Backs',
        'The Recoil Pattern to decrease elbow stress',
        'Trunk as primary engine rather than arm drag',
        'Reaction Boxes to fix stride direction',
      ],
    },
    results: {
      headline: '10th → 3rd Overall',
      subheadline: 'Effortless 99 mph with best recovery of his career',
      details: 'Secured a larger signing bonus despite the injury stigma.',
    },
    toolkit: ['108 Experience', 'Pro Training', 'MAMO Waterbags', 'Reaction Boxes'],
  },
  {
    id: 'matt-liberatore',
    athlete: 'Matt Liberatore',
    organization: 'St. Louis Cardinals',
    level: 'MLB',
    tier: 'Tier 2',
    tag: 'Virtual Success',
    title: 'Digital Translation: The Coach in Your Pocket',
    problem: {
      summary: 'Needed to regain lost velocity mid-season while traveling—no lab visit possible.',
      details: [
        'Looking to regain lost velocity in mid-July',
        'Required solution implementable while traveling',
        'Could not visit the lab in Knoxville',
      ],
    },
    intervention: {
      summary: 'Utilized the 108 Virtual Experience via mobile app.',
      details: [
        'Followed specific drills via the 108 app',
        'Focused on sequencing and arm path efficiency',
        'Explored movement variations never tried before',
        'Bypassed hardwired "automaticity"',
      ],
    },
    results: {
      headline: '+4 mph in 2 weeks',
      subheadline: 'Avg & max fastball velocity increased remotely',
      details: 'Ended the season with improved charts and pitch shapes.',
    },
    toolkit: ['Virtual Experience', '108 Training App'],
  },
  {
    id: 'steve-dalkowski',
    athlete: '"Steve Dalkowski"',
    organization: 'Durham Bulls',
    level: 'MiLB',
    tier: 'Tier 2',
    tag: 'Injury Prevention',
    title: 'Biomechanical De-risking through Torque Reduction',
    problem: {
      summary: 'High-round draft pick with injury-plagued season and shoulder impingement.',
      details: [
        'Elbow torque at 108.5 Nm/sec (high risk)',
        'Shoulder torque at 262 Nm/sec (2x+ preferred limit)',
        'Early Trunk Rotation (ETR)',
        'Inefficient "catapult" arm action',
      ],
    },
    intervention: {
      summary: 'Pattern modification through non-throwing arm patterning.',
      details: [
        'Created kinesthetic awareness for arm in space',
        'Shortened stride for optimal length-tension',
        'Adjusted back foot position on rubber',
        'New hand break to allow arm to unwind as whip',
      ],
    },
    results: {
      headline: '62% Torque Reduction',
      subheadline: 'Elbow: 108 → 57 Nm/sec | Shoulder: 262 → 98 Nm/sec',
      details: 'Returned to competition pain-free with improved velocity.',
    },
    toolkit: ['108 Experience', 'Lab Partnership', 'SIMI 3D MoCap', 'Bertec Force Plates'],
  },
];

const organizationalInfluence = {
  mlbOrganizations: 26,
  coachingPipeline: 20,
  softballLead: 'Jamie Bleecker (Southern) - 4x All-American, Gold Medalist',
};

// ============================================================================
// ICON COMPONENTS
// ============================================================================

function IconTrophy({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21h8m-4-4v4M5 3h14l-1.5 9a3.5 3.5 0 01-3.5 3h-4a3.5 3.5 0 01-3.5-3L5 3z" />
      <path d="M5 3H3v3a3 3 0 003 3M19 3h2v3a3 3 0 01-3 3" />
    </svg>
  );
}

function IconChart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 6-6" />
    </svg>
  );
}

function IconShield({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconSpeed({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <path d="M16.5 7.5l-4.5 4.5" />
    </svg>
  );
}

function IconUsers({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconBat({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20l5-5M14 5l5 5-9 9-5-5 9-9z" />
      <circle cx="18" cy="6" r="2" />
    </svg>
  );
}

function IconArm({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 21v-4a4 4 0 014-4h4l5-5" />
      <circle cx="19" cy="8" r="2" />
      <path d="M14 13l-2 2" />
    </svg>
  );
}

function IconSoftball({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 6c2 2 2 4 0 6s-2 4 0 6M16 6c-2 2-2 4 0 6s2 4 0 6" />
    </svg>
  );
}

function IconChevron({ className = '', expanded = false }: { className?: string; expanded?: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: expanded ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

function getIcon(iconName: string, className: string) {
  switch (iconName) {
    case 'trophy': return <IconTrophy className={className} />;
    case 'chart': return <IconChart className={className} />;
    case 'shield': return <IconShield className={className} />;
    case 'speed': return <IconSpeed className={className} />;
    case 'users': return <IconUsers className={className} />;
    case 'bat': return <IconBat className={className} />;
    case 'arm': return <IconArm className={className} />;
    case 'softball': return <IconSoftball className={className} />;
    default: return <IconChart className={className} />;
  }
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function ResultsPage() {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'tier1' | 'tier2'>('all');

  const filteredStudies = activeTab === 'all'
    ? caseStudies
    : caseStudies.filter(s => s.tier.toLowerCase().replace(' ', '') === activeTab);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="bg-black py-24 lg:py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                {brandIdentity.status}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
              >
                The Proof.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/50 font-medium mb-4"
              >
                {brandIdentity.philosophy}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-white/30 italic"
              >
                "{brandIdentity.mantra}"
              </motion.p>
            </motion.div>

            {/* Hero Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <p className="text-4xl md:text-6xl font-black text-white">26</p>
                <p className="text-xs md:text-sm text-white/40 uppercase tracking-wider mt-2">MLB Orgs</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-4xl md:text-6xl font-black text-white">#1</p>
                <p className="text-xs md:text-sm text-white/40 uppercase tracking-wider mt-2">Overall Pick</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-6xl font-black text-white">8</p>
                <p className="text-xs md:text-sm text-white/40 uppercase tracking-wider mt-2">1st Rounders</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            DRAFT PICKS SECTION
        ================================================================ */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">MLB Draft</p>
              <h2 className="text-3xl md:text-4xl font-black text-black">Notable Draft Picks</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {notableDraftPicks.map((pick, index) => (
                <motion.div
                  key={pick.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-2xl text-center ${
                    pick.highlight
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-black'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider mb-2 ${
                    pick.highlight ? 'text-white/50' : 'text-gray-400'
                  }`}>
                    {pick.year}
                  </p>
                  <p className={`font-black text-lg mb-1 ${
                    pick.highlight ? 'text-white' : 'text-black'
                  }`}>
                    {pick.name}
                  </p>
                  <p className={`text-sm font-semibold ${
                    pick.highlight ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {pick.pick}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            PERFORMANCE METRICS SECTION
        ================================================================ */}
        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Performance Lab</p>
              <h2 className="text-3xl md:text-4xl font-black text-black">Measured Results</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      {getIcon(metric.icon, 'w-6 h-6 text-white')}
                    </div>
                    <h3 className="font-bold text-lg">{metric.category}</h3>
                  </div>

                  <div className="space-y-6">
                    {metric.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-baseline mb-2">
                          <p className="text-sm text-gray-500">{stat.label}</p>
                          <p className="text-2xl font-black">{stat.value}</p>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                            className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            DASHBOARD TABLE SECTION
        ================================================================ */}
        <section className="bg-black py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">108 Dashboard</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Development Metrics</h2>
            </motion.div>

            <div className="space-y-4">
              {dashboardData.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getIcon(item.icon, 'w-5 h-5 md:w-6 md:h-6 text-white/70')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">{item.category}</p>
                    <p className="text-white text-sm md:text-base truncate md:whitespace-normal">{item.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CASE STUDIES SECTION
        ================================================================ */}
        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Case Studies</p>
              <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
                The Staying is the Proof
              </h2>

              {/* Filter Tabs */}
              <div className="inline-flex bg-gray-200 rounded-full p-1">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'tier1', label: 'Full Overhauls' },
                  { id: 'tier2', label: 'Targeted Gains' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      activeTab === tab.id
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    {/* Card Header - Always Visible */}
                    <button
                      onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                      className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs uppercase tracking-wider text-gray-400">
                            {study.organization} / {study.level}
                          </span>
                          {study.tag && (
                            <span className="text-[10px] uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                              {study.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-black">{study.athlete}</h3>
                        <p className="text-gray-500 text-sm mt-1">{study.title}</p>
                      </div>

                      {/* Result Preview */}
                      <div className="hidden md:block text-right">
                        <p className="text-2xl font-black text-black">{study.results.headline}</p>
                        <p className="text-sm text-gray-500">{study.results.subheadline}</p>
                      </div>

                      <IconChevron
                        className="w-6 h-6 text-gray-400 flex-shrink-0"
                        expanded={expandedStudy === study.id}
                      />
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedStudy === study.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-4 border-t border-gray-100">
                            {/* Mobile Result */}
                            <div className="md:hidden mb-6 p-4 bg-black text-white rounded-xl">
                              <p className="text-2xl font-black">{study.results.headline}</p>
                              <p className="text-sm text-white/70">{study.results.subheadline}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                              {/* The Issue */}
                              <div>
                                <p className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                                  The Issue
                                </p>
                                <p className="text-gray-700 mb-4">{study.problem.summary}</p>
                                <ul className="space-y-2">
                                  {study.problem.details.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="w-1 h-1 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* The Work */}
                              <div>
                                <p className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                                  The 108 Work
                                </p>
                                <p className="text-gray-700 mb-4">{study.intervention.summary}</p>
                                <ul className="space-y-2">
                                  {study.intervention.details.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                      <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Result & Toolkit */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                              <div className="flex flex-wrap items-start justify-between gap-6">
                                <div className="hidden md:block">
                                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Result</p>
                                  <p className="text-gray-700">{study.results.details}</p>
                                </div>
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">108 Toolkit</p>
                                  <div className="flex flex-wrap gap-2">
                                    {study.toolkit.map((tool, i) => (
                                      <span
                                        key={i}
                                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                                      >
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ================================================================
            ORGANIZATIONAL INFLUENCE SECTION
        ================================================================ */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Industry Influence</p>
              <h2 className="text-3xl md:text-4xl font-black text-black">
                From Niche to Category-Defining
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <p className="text-6xl font-black text-black mb-2">26</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">MLB Organizations</p>
                <p className="text-xs text-gray-400 mt-2">Consulting Partnerships</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <p className="text-6xl font-black text-black mb-2">20+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Former 108 Staff</p>
                <p className="text-xs text-gray-400 mt-2">Now Coaching in Pro/Big Leagues</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 bg-black text-white rounded-2xl"
              >
                <p className="text-xl font-black mb-2">Softball</p>
                <p className="text-sm text-white/70">Led by Jamie Bleecker</p>
                <p className="text-xs text-white/50 mt-2">4x All-American, Gold Medalist</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PHILOSOPHY QUOTE SECTION
        ================================================================ */}
        <section className="bg-black py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-12">The Analogy</p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/70 leading-relaxed mb-8">
                Traditional coaching is like reading a <span className="text-white font-semibold">dictionary</span> of mechanics
                and wondering why you can't write <span className="text-white font-semibold">poetry</span>.
              </p>
              <p className="text-xl md:text-2xl text-white font-semibold">
                We teach you the grammar of your nervous system
                and the rhythm of your biological engine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================================================================
            CTA SECTION
        ================================================================ */}
        <section className="bg-white py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-black mb-4"
            >
              Ready to start?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-8"
            >
              Every path begins with The 108 Experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/programs/experience"
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-full"
              >
                Book Your Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
