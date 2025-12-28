// 108 Performance — Complete Service & Product Catalog
// Brand: Direct. Warm. Confident. Minimal.
// Core: "People come for the work. They stay for something else."

// ============================================
// BRAND CONFIG
// ============================================

export const BRAND = {
  name: '108 Performance',
  tagline: 'The door is open.',
  location: {
    address: '6616 Deane Hill Drive',
    city: 'Knoxville',
    state: 'TN',
    zip: '37919',
    phone: '865-253-5060',
    email: 'info@108performanceacademy.com',
  },
  hours: {
    weekdays: 'Monday–Thursday: 3:30 PM – 9:00 PM',
    weekend: 'Friday–Sunday: By appointment',
  },
  social: {
    instagram: 'https://instagram.com/108_performance',
    twitter: 'https://x.com/108_performance',
    tiktok: 'https://www.tiktok.com/@108_performance',
    facebook: 'https://www.facebook.com/108PerformanceAcademy',
    youtube: 'https://youtube.com/@108_performance',
    linkedin: 'https://www.linkedin.com/company/108-performance/',
  },
} as const;

// ============================================
// NAVIGATION
// ============================================

export const NAV = {
  primary: [
    {
      label: 'Inside',
      dropdown: [
        { label: 'The Work', href: '/the-method' },
        { label: 'The People', href: '/about' },
        { label: 'The Staying', href: '/#staying' },
      ],
    },
    {
      label: 'Your Path',
      dropdown: [
        { label: 'Athletes', href: '/athletes' },
        { label: 'Coaches', href: '/coaches' },
      ],
    },
    { label: 'The Method', href: '/the-method' },
  ],
  cta: { label: 'The Door Is Open', href: '/apply' },
} as const;

// ============================================
// THE 108 EXPERIENCE (Entry Point)
// ============================================

export const EXPERIENCE_108 = {
  id: '108-experience',
  name: 'The 108 Experience',
  tagline: 'Discover before you fix.',
  description: 'We learn who you are first—how you think, how you learn, how you coach yourself.',
  duration: '2–5 days',
  startingPrice: 2000,
  pricing: {
    singleSkill: [
      { days: 2, price: 2000 },
      { days: 3, price: 2500, recommended: true },
      { days: 4, price: 3000 },
      { days: 5, price: 3500 },
    ],
    twoSkills: [
      { days: 2, price: 2500 },
      { days: 3, price: 3000, recommended: true },
      { days: 4, price: 3500 },
      { days: 5, price: 4000 },
    ],
  },
  methodology: [
    {
      phase: 'The Human',
      headline: 'First, the Human.',
      description: 'How do you think? How do you learn? What cues already click for you? Your wiring is the foundation—everything builds from there.',
    },
    {
      phase: 'The Athlete',
      headline: 'Then, the Athlete.',
      description: "How does your body actually move? We study YOUR patterns—not a textbook model. We work with your physiology, not against it.",
    },
    {
      phase: 'The Player',
      headline: 'Finally, the Player.',
      description: 'How do you pitch, swing, throw when it matters? At 7 o\'clock. Under pressure. The skills that show up on game day are built on the layers beneath.',
    },
  ],
  outcome: 'Leave with a system. Personal cues and prompts that help you find the right pattern on your own. Not our cues—yours.',
  cta: 'Book Your Experience',
  required: true,
} as const;

// ============================================
// ATHLETE SERVICES
// ============================================

export const ATHLETE_SERVICES = {
  triStar: {
    id: 'tri-star',
    name: 'Tri Star',
    tagline: 'Unlimited training. Knoxville.',
    description: 'Show up. Get better. $499/month.',
    schedule: 'Monday–Thursday. 3:30–8:00 PM.',
    features: ['Hitting', 'Throwing', 'RFD', 'No session limits'],
    pricing: {
      monthly: 499,
      annual: 5500,
      annualSavings: 488,
    },
    location: 'Knoxville area only',
    requires: '108 Experience',
    cta: 'Start Training',
  },
  virtualExperience: {
    id: 'virtual-experience',
    name: 'Virtual Experience',
    tagline: 'Your coach in your pocket.',
    description: 'Train from anywhere. $550/month.',
    features: [
      'Daily programming',
      'Video feedback',
      'Direct coach access',
      'Your cues reinforced',
      'Progress tracked',
    ],
    pricing: {
      monthly: 550,
      annual: 6000,
      annualSavings: 600,
    },
    requires: '108 Experience',
    cta: 'Start Training',
  },
  virtualPro: {
    id: 'virtual-pro',
    name: 'Virtual Pro',
    tagline: 'Remote daily. In-person quarterly.',
    description: 'Six trips to Knoxville. $1,000/month.',
    features: [
      'Daily remote coaching',
      'Hands-on refinement every 60 days',
      '18 training days per year',
      'Senior staff access',
    ],
    pricing: {
      monthly: 1000,
      annual: 10000,
    },
    note: 'Travel not included.',
    cta: 'Apply Now',
  },
  collegePrep: {
    id: 'college-prep',
    name: 'College Prep',
    tagline: 'Get better. Get seen.',
    description: 'Training plus recruiting. $1,250/month.',
    features: [
      'You train. We build your profile.',
      'Open doors to the right programs',
      'Target schools',
      'Showcase prep',
      'Coach connections',
      'NIL access',
    ],
    pricing: {
      monthly: 1250,
      annual: 13500,
      annualSavings: 1500,
    },
    ageRange: '15–22',
    requires: '108 Experience',
    cta: 'Apply Now',
  },
  draftPrep: {
    id: 'draft-prep',
    name: 'Draft Prep',
    tagline: 'Every round is money.',
    description: 'Draft positioning. $1,500/month.',
    stat: {
      value: '$500K+',
      label: 'Difference between rounds 5 and 10.',
    },
    features: [
      'Strategy gets you drafted higher',
      'Optimize what scouts measure',
      'The right events',
      'The right people',
      'The right timing',
    ],
    pricing: {
      monthly: 1500,
      annual: 15000,
      annualSavings: 3000,
    },
    cta: 'Apply Now',
  },
  proExperience: {
    id: 'pro-experience',
    name: 'Pro Experience',
    tagline: 'Protect your career window.',
    description: 'MiLB and MLB programs.',
    features: [
      'Senior staff',
      'Priority access',
      'Independent perspective your org can\'t provide',
      'In-season and off-season support',
    ],
    tiers: [
      { name: 'MiLB', description: 'Full-season or off-season. Fly-in and fly-away.' },
      { name: 'MLB', description: 'Elite staff. Priority one. Bi-weekly mentorship.' },
    ],
    cta: 'Contact Coach',
  },
} as const;

// ============================================
// COACH SERVICES
// ============================================

export const COACH_SERVICES = {
  coachesExperience: {
    id: 'coaches-experience',
    name: 'Coaches Experience',
    tagline: 'Shadow the method.',
    description: '2–5 days at 108. $500/day.',
    features: [
      'Full immersion',
      'Open to close',
      'Watch. Ask. Learn.',
      'See how we develop players firsthand',
    ],
    pricing: {
      perDay: 500,
    },
    prereq: '32 questions first. We want to know how you think before you arrive.',
    note: 'Step 1 of The Collective pathway.',
    cta: 'Apply Now',
  },
  coachesMentorship: {
    id: 'coaches-mentorship',
    name: 'Coaches Mentorship',
    tagline: 'Keep growing.',
    description: 'Monthly calls. Bridge access. Starting at $297/month.',
    features: [
      'Same programming we use at 108',
      'Same cues. Same system.',
      'Monthly with our staff',
      'Will Marshall. Jose Rijo-Berger.',
      'Live Q&A. Deep dives.',
    ],
    pricing: {
      originals: { price: 297, note: 'Locked forever. First 10 only.' },
      standard: { price: 500, note: 'Open enrollment.' },
    },
    requires: 'Coaches Experience + hosted Tour',
    cta: 'Apply',
  },
  poweredBy108: {
    id: 'powered-by-108',
    name: 'Powered by 108',
    tagline: 'Run on a proven system.',
    description: 'Full facility partnership.',
    features: [
      'Training framework',
      'Playbooks',
      'Staff training',
      'Ongoing support',
      '4 Tour Experiences included',
      'Weekly programming',
      'Monthly Zooms',
    ],
    pricing: {
      year1: 20000,
      year2Plus: 10000,
    },
    note: 'By application only.',
    cta: 'Request Partnership Info',
  },
} as const;

// ============================================
// SPECIAL PROGRAMS
// ============================================

export const SPECIAL_PROGRAMS = {
  tourExperience: {
    id: 'tour-experience',
    name: 'Tour Experience',
    tagline: '108 in your town.',
    description: '2-day camps. $500/athlete.',
    features: [
      'High-energy sessions',
      'Real coaching',
      'See if our approach fits before you commit',
    ],
    pricing: {
      perAthlete: 500,
    },
    nextStep: 'Apply for the 108 Experience. Continue your training.',
    cta: 'View Events',
  },
  performanceInstitute: {
    id: 'performance-institute',
    name: 'Performance Institute',
    tagline: 'Train and learn. Full-time.',
    description: 'Grades 6-12. Baseball and Softball.',
    features: [
      'Full-time training academy with real academics',
      '9 months. 4-5 days/week.',
      'ASU Prep Global',
      'NCAA-compliant curriculum',
      'Dual enrollment available',
    ],
    pricing: {
      afterScholarship: [
        { tier: 'PI Starter', price: 14500 },
        { tier: 'PI Standard', price: 17000 },
        { tier: 'PI+', price: 25000 },
      ],
      scholarship: 10000,
    },
    applicationOpen: 'June 1, 2025',
    cta: 'Apply for Scholarship',
  },
  softball: {
    id: 'softball',
    name: 'Softball',
    tagline: 'Built for how women move.',
    description: 'Same philosophy. Softball-specific.',
    credibility: "Team USA. D1 Pac-12. Professional. Our staff played and coached at the top.",
    features: ['Pitching', 'Hitting', 'The 108 approach—for softball'],
    cta: 'Find Softball Training',
  },
  internship: {
    id: 'internship',
    name: 'Internship',
    tagline: 'Learn by doing.',
    description: '3-6 months. Full immersion.',
    features: [
      'Not an observation program',
      "You're in the cage. On the mound.",
      'Working with real athletes under real pressure',
      'Direct mentorship from senior staff',
    ],
    mentors: ['Eugene', 'Will', 'Nate', 'Mac', 'Tyler'],
    application: '52 questions. 30-45 minutes. Tell us how you think.',
    cta: 'Start Application',
  },
} as const;

// ============================================
// STAFF
// ============================================

export const STAFF = [
  {
    id: 'eugene',
    name: 'Eugene Bleecker',
    title: 'Founder & CEO',
    bio: 'The architect of the 108 methodology. Decades studying movement, developing players, and building a system that produces results no one else can replicate.',
  },
  {
    id: 'will',
    name: 'Will Marshall',
    title: 'COO & Throwing Director',
    bio: 'Oversees throwing development and facility operations. His approach to arm health and velocity has helped pitchers at every level add velocity while staying healthy.',
  },
  {
    id: 'nate',
    name: 'Nate Headley',
    title: 'Hitting Coordinator',
    bio: 'Leads the hitting program. Teaches coaches and athletes how to see swing flaws, communicate adjustments, and build hitters who can make in-game changes.',
  },
  {
    id: 'mac',
    name: 'Ryan McMillan (Mac)',
    title: 'Program Designer',
    bio: 'Builds the training programs that power 108 athletes. From daily sessions to long-term periodization.',
  },
  {
    id: 'tyler',
    name: 'Tyler Shorter',
    title: 'Director of Performance',
    bio: 'Oversees strength, conditioning, and recovery. The bridge between the weight room and the field.',
  },
  {
    id: 'jamie',
    name: 'Jamie Bleecker',
    title: 'Softball Director',
    bio: 'Team USA. D1 Pac-12 All-American. 4-time All-American pitcher at Fresno State. Brings elite-level expertise to softball training.',
  },
] as const;

// ============================================
// FAQ
// ============================================

export const FAQ = [
  {
    question: 'What is the 108 Experience?',
    answer: "2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you, not generic fixes that fade by game day.",
  },
  {
    question: 'Do I have to do the 108 Experience first?',
    answer: 'Yes. Every path starts at the same door. We need to understand how you think before we can help you move.',
  },
  {
    question: 'What if I\'m not local to Knoxville?',
    answer: 'Virtual Experience. Daily programming, video feedback, direct coach access—training that transfers from wherever you are.',
  },
  {
    question: 'What ages do you work with?',
    answer: 'From 12 to MLB. Youth athletes, high schoolers, college players, and professionals all train under one roof.',
  },
  {
    question: 'What makes 108 different?',
    answer: "We don't teach a system. We help you find yours. Human → Athlete → Player. The best adjustment is the one you can make at 7 o'clock without a coach whispering in your ear.",
  },
  {
    question: 'Do you work with softball players?',
    answer: 'Yes. Same philosophy, softball-specific. Jamie Bleecker (Team USA, D1 Pac-12 All-American) leads our softball program.',
  },
  {
    question: 'What is "The Staying"?',
    answer: "Athletes train for 3-4 hours. Then they sit on the couch for 3 more—watching film, helping each other figure things out. They don't have to be here. They choose to stay. That's the proof.",
  },
  {
    question: 'Can coaches come learn the 108 method?',
    answer: 'Yes. Coaches Experience: 2-5 days in the lab. See why cookie-cutter doesn\'t work. Ask anything.',
  },
] as const;

// ============================================
// HOMEPAGE CONTENT
// ============================================

export const HOMEPAGE = {
  hero: {
    headline: 'The door is open.',
    subhead: 'A training facility. A place people stay.',
    cta: 'Come Inside',
  },
  paradox: {
    headline: 'People come for the work. They stay for something else.',
    body: "Athletes train here for 3-4 hours. Then they sit on the couch for hours more—watching film, talking, helping each other figure things out. They don't have to be here. They choose to stay.",
  },
  theWork: {
    headline: 'The work is serious.',
    body: "This isn't a club. It's training that produces results. PRs. Velocity. The breakthrough moment when something finally clicks. The couch comes after the PR.",
    cta: 'See The Method',
  },
  methodology: {
    headline: 'Human. Athlete. Player.',
    body: 'Most programs start with your sport. We start with you. How do you think? How do you learn? What cues already work? We understand you before we instruct you. The best adjustment is the one you can make on your own.',
  },
  staying: {
    headline: 'The staying is the proof.',
    body: "You don't have to leave when you're done. Most people don't. They watch film. They talk. They sit on the couch and argue about last night's game. This isn't a feature we designed. It's what happened when we built a place where people actually want to be.",
  },
  yourPath: {
    headline: 'Your path.',
    subhead: 'Everyone starts with the 108 Experience. Everything after is built on what we learn together.',
    cards: ['The 108 Experience', 'Ongoing Training', 'For Coaches'],
  },
  finalCta: {
    headline: 'You have to feel it to believe it.',
    cta: 'Experience 108',
  },
} as const;

// ============================================
// CTA COPY
// ============================================

export const CTA_COPY = {
  primary: 'Experience 108.',
  secondary: 'The door is open.',
  buttons: {
    hero: 'Come Inside',
    experience: 'Book Your Experience',
    apply: 'Apply Now',
    contact: 'Contact Coach',
    events: 'View Events',
  },
} as const;

// ============================================
// SHOP / MERCH
// ============================================

export const SHOP = {
  storeUrl: 'https://108merch.com',
  featured: [
    {
      id: 'anti-rotation-tee',
      name: 'Anti Rotation Rotation Club Tee',
      price: 25,
      category: 'Apparel',
      image: '/shop/anti-rotation-tee.png',
      shopifyUrl: 'https://108merch.com/products/anti-rotation-rotation-club-graphic-t-shirt',
      tag: 'Best Seller',
    },
    {
      id: 'champion-sweatshirt',
      name: 'Champion 108 Logo Sweatshirt',
      price: 40,
      category: 'Apparel',
      image: '/shop/champion-sweatshirt.jpg',
      shopifyUrl: 'https://108merch.com/products/champion-108-logo-sweatshirt',
      tag: 'Best Seller',
    },
    {
      id: 'camo-hat',
      name: 'Limited Edition Camo Hat',
      price: 25,
      category: 'Hats',
      image: '/shop/camo-hat.png',
      shopifyUrl: 'https://108merch.com/collections/hats/products/limited-edition-camo-hat',
      tag: 'Limited',
    },
    {
      id: 'navy-patch-hat',
      name: 'Navy 108 Leather Patch Hat',
      price: 25,
      category: 'Hats',
      image: '/shop/navy-patch-hat.png',
      shopifyUrl: 'https://108merch.com/collections/hats/products/navy-108-leather-patch-hat',
    },
    {
      id: 'anchor-bands',
      name: '108 Anchor Bands',
      price: 75,
      category: 'Training',
      image: '/shop/anchor-bands.png',
      shopifyUrl: 'https://108merch.com/products/108-anchor-bands',
      tag: 'Training Gear',
    },
    {
      id: 'waterbag-programming',
      name: 'Pro Waterbag Programming',
      price: 599,
      category: 'Training',
      image: '/shop/waterbag-programming.png',
      shopifyUrl: 'https://108merch.com/products/pro-waterbag-programming-hitting',
      tag: 'Pro Series',
    },
    {
      id: 'old-school-book',
      name: 'Old School vs New School',
      price: 29.99,
      category: 'Books',
      image: '/shop/old-school-book.png',
      shopifyUrl: 'https://108merch.com/products/old-school-vs-new-school',
      tag: 'Book',
    },
    {
      id: 'mustache-tee',
      name: '108 Mustache T-Shirt',
      price: 25,
      category: 'Apparel',
      image: '/shop/mustache-tee.png',
      shopifyUrl: 'https://108merch.com/products/108-mustache-t-shirt',
    },
  ],
} as const;

// Type exports
export type Staff = typeof STAFF[number];
export type AthleteService = typeof ATHLETE_SERVICES[keyof typeof ATHLETE_SERVICES];
export type CoachService = typeof COACH_SERVICES[keyof typeof COACH_SERVICES];
export type ShopProduct = typeof SHOP.featured[number];
