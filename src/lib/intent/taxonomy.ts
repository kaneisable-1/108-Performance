// Intent categories for 108 Performance user queries

export type IntentCategory =
  | 'PERFORMANCE_VELOCITY'
  | 'PERFORMANCE_POWER'
  | 'PERFORMANCE_GENERAL'
  | 'INJURY_ARM'
  | 'INJURY_GENERAL'
  | 'LOGISTICS_LOCAL'
  | 'LOGISTICS_REMOTE'
  | 'LOGISTICS_TRAVEL'
  | 'STAGE_YOUTH'
  | 'STAGE_HIGH_SCHOOL'
  | 'STAGE_COLLEGE'
  | 'STAGE_DRAFT'
  | 'STAGE_PRO'
  | 'COACH_LEARN'
  | 'COACH_TEAM'
  | 'COACH_LICENSE'
  | 'PRICING'
  | 'UNKNOWN';

export interface IntentResult {
  category: IntentCategory;
  confidence: number;
  title: string;
  description: string;
  href: string;
  price?: string;
  tag?: string;
  ctaText: string;
  related?: Array<{
    title: string;
    href: string;
  }>;
}

export interface IntentPattern {
  category: IntentCategory;
  patterns: RegExp[];
  keywords: string[];
  weight: number;
}

// Pattern definitions for client-side matching
export const intentPatterns: IntentPattern[] = [
  // Performance - Velocity
  {
    category: 'PERFORMANCE_VELOCITY',
    patterns: [
      /velo(city)?/i,
      /throw\s*(ing)?\s*hard(er)?/i,
      /mph/i,
      /faster\s*fastball/i,
      /pitch(ing)?\s*speed/i,
      /arm\s*speed/i,
    ],
    keywords: ['velocity', 'velo', 'throw harder', 'mph', 'fastball', 'speed', 'arm speed'],
    weight: 1.0,
  },
  // Performance - Power
  {
    category: 'PERFORMANCE_POWER',
    patterns: [
      /exit\s*velo/i,
      /hit\s*hard(er)?/i,
      /power/i,
      /bat\s*speed/i,
      /swing/i,
      /launch\s*angle/i,
      /barrel/i,
    ],
    keywords: ['exit velo', 'hit harder', 'power', 'bat speed', 'swing', 'launch angle', 'barrel'],
    weight: 1.0,
  },
  // Performance - General
  {
    category: 'PERFORMANCE_GENERAL',
    patterns: [
      /get\s*better/i,
      /improve/i,
      /train(ing)?/i,
      /work\s*out/i,
      /development/i,
      /level\s*up/i,
    ],
    keywords: ['better', 'improve', 'training', 'develop', 'level up'],
    weight: 0.6,
  },
  // Injury - Arm
  {
    category: 'INJURY_ARM',
    patterns: [
      /arm\s*(hurts|pain|sore)/i,
      /elbow\s*(hurts|pain|sore)/i,
      /shoulder\s*(hurts|pain|sore)/i,
      /ucl/i,
      /tommy\s*john/i,
      /injury/i,
      /coming\s*back\s*from/i,
      /rehab/i,
    ],
    keywords: ['arm pain', 'elbow', 'shoulder', 'injury', 'ucl', 'tommy john', 'rehab', 'hurts'],
    weight: 1.2,
  },
  // Injury - General
  {
    category: 'INJURY_GENERAL',
    patterns: [
      /hurt/i,
      /pain/i,
      /sore/i,
      /injured/i,
    ],
    keywords: ['hurt', 'pain', 'sore', 'injured'],
    weight: 0.8,
  },
  // Logistics - Local
  {
    category: 'LOGISTICS_LOCAL',
    patterns: [
      /knoxville/i,
      /local/i,
      /in\s*person/i,
      /live\s*near/i,
      /nearby/i,
      /tennessee/i,
    ],
    keywords: ['knoxville', 'local', 'in person', 'tennessee', 'nearby'],
    weight: 0.9,
  },
  // Logistics - Remote
  {
    category: 'LOGISTICS_REMOTE',
    patterns: [
      /remote/i,
      /virtual/i,
      /online/i,
      /can'?t\s*travel/i,
      /from\s*home/i,
      /out\s*of\s*(state|town)/i,
    ],
    keywords: ['remote', 'virtual', 'online', "can't travel", 'from home'],
    weight: 0.9,
  },
  // Logistics - Travel
  {
    category: 'LOGISTICS_TRAVEL',
    patterns: [
      /travel/i,
      /fly\s*(in|out)/i,
      /visit/i,
      /come\s*to/i,
      /trip/i,
    ],
    keywords: ['travel', 'fly in', 'visit', 'trip'],
    weight: 0.7,
  },
  // Stage - Youth
  {
    category: 'STAGE_YOUTH',
    patterns: [
      /my\s*(son|kid|child|daughter)/i,
      /\b(10|11|12|13)\s*(year|yr)/i,
      /youth/i,
      /young/i,
      /little\s*league/i,
      /parent/i,
    ],
    keywords: ['son', 'kid', 'child', 'youth', 'young', 'little league', 'parent'],
    weight: 1.0,
  },
  // Stage - High School
  {
    category: 'STAGE_HIGH_SCHOOL',
    patterns: [
      /high\s*school/i,
      /\b(14|15|16|17|18)\s*(year|yr)/i,
      /freshman|sophomore|junior|senior/i,
      /varsity/i,
      /jv/i,
    ],
    keywords: ['high school', 'varsity', 'freshman', 'sophomore', 'junior', 'senior'],
    weight: 0.9,
  },
  // Stage - College
  {
    category: 'STAGE_COLLEGE',
    patterns: [
      /college/i,
      /d1|d2|d3|division/i,
      /ncaa/i,
      /recruit/i,
      /commit/i,
      /scholarship/i,
      /juco/i,
    ],
    keywords: ['college', 'd1', 'd2', 'd3', 'ncaa', 'recruit', 'commit', 'scholarship'],
    weight: 1.0,
  },
  // Stage - Draft
  {
    category: 'STAGE_DRAFT',
    patterns: [
      /draft/i,
      /mlb\s*draft/i,
      /scout/i,
      /showcase/i,
      /pro\s*ball/i,
      /minor\s*league/i,
    ],
    keywords: ['draft', 'mlb', 'scout', 'showcase', 'pro', 'minor league'],
    weight: 1.1,
  },
  // Stage - Pro
  {
    category: 'STAGE_PRO',
    patterns: [
      /professional/i,
      /mlb/i,
      /major\s*league/i,
      /big\s*league/i,
      /affiliated/i,
    ],
    keywords: ['professional', 'mlb', 'major league', 'affiliated'],
    weight: 1.1,
  },
  // Coach - Learn
  {
    category: 'COACH_LEARN',
    patterns: [
      /i('m|\s*am)\s*a?\s*coach/i,
      /learn\s*(your|the|108)?\s*system/i,
      /coaching\s*(education|development)/i,
      /become\s*a\s*coach/i,
      /coach\s*training/i,
    ],
    keywords: ['coach', 'learn system', 'coaching education', 'coach training'],
    weight: 1.0,
  },
  // Coach - Team
  {
    category: 'COACH_TEAM',
    patterns: [
      /my\s*team/i,
      /train\s*my\s*(team|players|athletes)/i,
      /bring\s*(108|you)\s*to/i,
      /host/i,
      /our\s*facility/i,
    ],
    keywords: ['my team', 'train team', 'host', 'our facility'],
    weight: 1.0,
  },
  // Coach - License
  {
    category: 'COACH_LICENSE',
    patterns: [
      /license/i,
      /franchise/i,
      /partner/i,
      /open\s*a\s*(108|facility)/i,
      /powered\s*by/i,
    ],
    keywords: ['license', 'franchise', 'partner', 'powered by'],
    weight: 1.0,
  },
  // Pricing
  {
    category: 'PRICING',
    patterns: [
      /how\s*much/i,
      /cost/i,
      /price/i,
      /\$/i,
      /afford/i,
      /payment/i,
    ],
    keywords: ['cost', 'price', 'how much', 'afford', 'payment'],
    weight: 0.8,
  },
];

// Response mapping for each intent category
export const intentResponses: Record<IntentCategory, Omit<IntentResult, 'category' | 'confidence'>> = {
  PERFORMANCE_VELOCITY: {
    title: 'The 108 Experience',
    description: 'Velocity is an output. We find the inputs that unlock YOUR velocity—not a template. 2-5 days where we learn your wiring.',
    href: '/programs/experience',
    price: 'From $2,000',
    tag: 'Start Here',
    ctaText: 'Book Your Experience',
    related: [
      { title: 'See our velocity results', href: '/results' },
      { title: 'Virtual coaching options', href: '/programs/virtual' },
    ],
  },
  PERFORMANCE_POWER: {
    title: 'The 108 Experience',
    description: 'Exit velo and bat speed come from the right movement patterns for YOUR body. Start with The Experience to build your foundation.',
    href: '/programs/experience',
    price: 'From $2,000',
    tag: 'Start Here',
    ctaText: 'Book Your Experience',
    related: [
      { title: 'See our hitting results', href: '/results' },
      { title: 'Find your path', href: '/#find-your-path' },
    ],
  },
  PERFORMANCE_GENERAL: {
    title: 'Find Your Path',
    description: 'Tell us more about your goals and situation. We\'ll match you with the right program.',
    href: '/#find-your-path',
    tag: 'Questionnaire',
    ctaText: 'Find Your Path',
    related: [
      { title: 'The 108 Experience', href: '/programs/experience' },
      { title: 'All programs', href: '/programs' },
    ],
  },
  INJURY_ARM: {
    title: 'Let\'s Talk First',
    description: 'Arm health is our priority. We\'d like to understand your situation before recommending a path. Let\'s connect.',
    href: '/contact',
    tag: 'Priority Support',
    ctaText: 'Contact Us',
    related: [
      { title: 'Our methodology', href: '/#method' },
      { title: 'Virtual assessment', href: '/programs/virtual' },
    ],
  },
  INJURY_GENERAL: {
    title: 'Let\'s Assess Your Situation',
    description: 'Health comes first. Reach out and we\'ll discuss the best approach for your situation.',
    href: '/contact',
    tag: 'Support',
    ctaText: 'Contact Us',
    related: [
      { title: 'Our methodology', href: '/#method' },
    ],
  },
  LOGISTICS_LOCAL: {
    title: 'Tri-Star Membership',
    description: 'For local athletes who\'ve completed The Experience: unlimited training at our Knoxville facility.',
    href: '/programs/tri-star',
    price: '$499/mo',
    tag: 'Local Athletes',
    ctaText: 'Learn More',
    related: [
      { title: 'First: The 108 Experience', href: '/programs/experience' },
      { title: 'Find your path', href: '/#find-your-path' },
    ],
  },
  LOGISTICS_REMOTE: {
    title: 'Virtual Experience',
    description: 'Your coach in your pocket. Daily programming, video feedback, and direct access—from anywhere.',
    href: '/programs/virtual',
    price: 'From $550/mo',
    tag: 'Remote Training',
    ctaText: 'Learn More',
    related: [
      { title: 'Virtual Pro (w/ visits)', href: '/programs/virtual-pro' },
      { title: 'First: The 108 Experience', href: '/programs/experience' },
    ],
  },
  LOGISTICS_TRAVEL: {
    title: 'The 108 Experience',
    description: 'Travel to Knoxville for 2-5 days. We learn your wiring, build your system, then support you remotely after.',
    href: '/programs/experience',
    price: 'From $2,000',
    tag: 'Fly In',
    ctaText: 'Book Your Experience',
    related: [
      { title: 'Tour Experience (select cities)', href: '/programs/tour' },
      { title: 'Virtual options', href: '/programs/virtual' },
    ],
  },
  STAGE_YOUTH: {
    title: 'Find Your Path (Parent)',
    description: 'Great that you\'re researching for your son or daughter. Let\'s find the right fit for their age and goals.',
    href: '/#find-your-path',
    tag: 'For Parents',
    ctaText: 'Find Your Path',
    related: [
      { title: 'The 108 Experience', href: '/programs/experience' },
      { title: 'Our methodology', href: '/#method' },
    ],
  },
  STAGE_HIGH_SCHOOL: {
    title: 'The 108 Experience',
    description: 'High school is the foundation. Start with The Experience to build YOUR system before the college recruiting process.',
    href: '/programs/experience',
    price: 'From $2,000',
    tag: 'High School',
    ctaText: 'Book Your Experience',
    related: [
      { title: 'College Prep add-on', href: '/programs/college-prep' },
      { title: 'Find your path', href: '/#find-your-path' },
    ],
  },
  STAGE_COLLEGE: {
    title: 'The 108 Experience + College Prep',
    description: 'Start with The Experience, then add College Prep for recruiting support and showcase optimization.',
    href: '/programs/experience',
    price: 'From $2,000',
    tag: 'College Track',
    ctaText: 'Book Your Experience',
    related: [
      { title: 'College Prep details', href: '/programs/college-prep' },
      { title: 'Our college athletes', href: '/athletes' },
    ],
  },
  STAGE_DRAFT: {
    title: 'Draft Prep',
    description: 'Draft positioning, showcase optimization, and the polish you need to stand out to scouts.',
    href: '/programs/draft-prep',
    price: '$1,500/mo',
    tag: 'Draft Eligible',
    ctaText: 'Learn More',
    related: [
      { title: 'First: The 108 Experience', href: '/programs/experience' },
      { title: 'Our drafted athletes', href: '/athletes' },
    ],
  },
  STAGE_PRO: {
    title: 'Pro Experience',
    description: 'For professional athletes seeking off-season development or in-season support.',
    href: '/programs/pro-experience',
    tag: 'Professional',
    ctaText: 'Contact Us',
    related: [
      { title: 'Our pro roster', href: '/athletes' },
    ],
  },
  COACH_LEARN: {
    title: 'Coaches Experience',
    description: 'A day in our lab. See why cookie-cutter doesn\'t work. Understand the system before you bring it to your athletes.',
    href: '/programs/coaches-experience',
    price: '$500/day',
    tag: 'For Coaches',
    ctaText: 'Apply Now',
    related: [
      { title: 'Coaches Mentorship', href: '/programs/coaches-mentorship' },
      { title: 'Powered by 108', href: '/programs/powered-by-108' },
    ],
  },
  COACH_TEAM: {
    title: 'Host a Tour',
    description: 'Bring The 108 Experience to your facility. 2-day camp for your athletes, led by our coaches.',
    href: '/programs/host-tour',
    price: '$500/athlete',
    tag: 'At Your Facility',
    ctaText: 'Learn More',
    related: [
      { title: 'First: Coaches Experience', href: '/programs/coaches-experience' },
      { title: 'Tour dates', href: '/programs/tour' },
    ],
  },
  COACH_LICENSE: {
    title: 'Powered by 108',
    description: 'Full curriculum licensing, branding rights, ongoing support. Build a 108 facility in your market.',
    href: '/programs/powered-by-108',
    price: '$20,000/year',
    tag: 'Licensing',
    ctaText: 'Learn More',
    related: [
      { title: 'Required: Coaches Experience', href: '/programs/coaches-experience' },
    ],
  },
  PRICING: {
    title: 'View All Programs',
    description: 'See all our programs with pricing. Most athletes start with The 108 Experience ($2,000+).',
    href: '/programs',
    ctaText: 'View Programs',
    related: [
      { title: 'The 108 Experience', href: '/programs/experience' },
      { title: 'Find your path', href: '/#find-your-path' },
    ],
  },
  UNKNOWN: {
    title: 'Find Your Path',
    description: 'Tell us about your goals and we\'ll match you with the right program.',
    href: '/#find-your-path',
    ctaText: 'Find Your Path',
    related: [
      { title: 'The 108 Experience', href: '/programs/experience' },
      { title: 'All programs', href: '/programs' },
    ],
  },
};
