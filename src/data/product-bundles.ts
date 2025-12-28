// ============================================================================
// 108 PERFORMANCE - PRODUCT BUNDLES & DELIVERABLES
// ============================================================================
// This file defines all physical products, digital tools, and program bundles
// for consistent presentation across service offerings.
// ============================================================================

// ----------------------------------------------------------------------------
// PHYSICAL PRODUCTS - The Equipment
// ----------------------------------------------------------------------------

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image?: string;
  icon: 'waterbag' | 'waterball' | 'bulgarian' | 'vest' | 'merch' | 'app' | 'box';
}

export const PRODUCTS: Record<string, Product> = {
  waterbag: {
    id: 'waterbag',
    name: '108 Waterbag',
    shortName: 'Waterbag',
    description: 'The foundational rotational training tool. Builds the feels you\'ll use daily.',
    image: '/shop/waterbag-programming.png',
    icon: 'waterbag',
  },
  waterball: {
    id: 'waterball',
    name: '108 Waterball',
    shortName: 'Waterball',
    description: 'Dynamic weight shifting for explosive rotational power.',
    icon: 'waterball',
  },
  bulgarianBag: {
    id: 'bulgarianBag',
    name: '108 Bulgarian Bag',
    shortName: 'Bulgarian Bag',
    description: 'Full-body rotational strength and conditioning.',
    icon: 'bulgarian',
  },
  bpVest: {
    id: 'bpVest',
    name: '108 BP Vest',
    shortName: 'BP Vest',
    description: 'Constraint-based training. Keeps movement patterns honest.',
    icon: 'vest',
  },
  merchKit: {
    id: 'merchKit',
    name: '108 Merch Kit',
    shortName: 'Merch Kit',
    description: 'Exclusive 108 gear: hoodies, shirts, and training apparel.',
    icon: 'merch',
  },
};

// ----------------------------------------------------------------------------
// DIGITAL TOOLS - The Performance OS
// ----------------------------------------------------------------------------

export interface DigitalTool {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image?: string;
  icon: 'app' | 'video' | 'chat' | 'zoom' | 'data';
  pricing?: {
    initial: string;
    ongoing: string;
    note?: string;
  };
}

export const DIGITAL_TOOLS: Record<string, DigitalTool> = {
  bridgeApp: {
    id: 'bridgeApp',
    name: 'Bridge Athletic App',
    shortName: 'Bridge App',
    description: 'Your Performance OS. Daily programming, video library, and progress tracking.',
    image: '/products/bridge-athletic/three-phones.png',
    icon: 'app',
    pricing: {
      initial: 'First month FREE',
      ongoing: '$50/month',
      note: 'Included with training programs',
    },
  },
  videoLibrary: {
    id: 'videoLibrary',
    name: 'Video Drill Library',
    shortName: 'Video Library',
    description: 'Access YOUR personalized drills and cues anytime.',
    icon: 'video',
  },
  coachChat: {
    id: 'coachChat',
    name: 'Private Coach Chat',
    shortName: 'Coach Chat',
    description: 'Direct line to your coach. Real responses, not automated.',
    icon: 'chat',
  },
  groupZooms: {
    id: 'groupZooms',
    name: 'Group Mentorship Zooms',
    shortName: 'Group Zooms',
    description: 'Live sessions with 108 staff and athletes.',
    icon: 'zoom',
  },
  biWeeklyZooms: {
    id: 'biWeeklyZooms',
    name: 'Bi-Weekly Senior Staff Zooms',
    shortName: 'Bi-Weekly Zooms',
    description: 'Priority access with Will Marshall and senior coaching staff.',
    icon: 'zoom',
  },
};

// ----------------------------------------------------------------------------
// PRODUCT PACKS - Bundled Equipment
// ----------------------------------------------------------------------------

export interface ProductPack {
  id: string;
  name: string;
  tagline: string;
  description: string;
  products: string[]; // Array of product IDs
  value?: string; // e.g., "$450 value"
}

export const PRODUCT_PACKS: Record<string, ProductPack> = {
  completeProductPack: {
    id: 'completeProductPack',
    name: '108 Complete Product Pack',
    tagline: 'Everything you need to train',
    description: 'The full arsenal of 108 training equipment for daily rotational development.',
    products: ['waterbag', 'waterball', 'bulgarianBag', 'bpVest'],
    value: '$450 value',
  },
  starterPack: {
    id: 'starterPack',
    name: '108 Starter Pack',
    tagline: 'Begin your journey',
    description: 'Essential equipment to start rotational training.',
    products: ['waterbag'],
    value: '$65 value',
  },
};

// ----------------------------------------------------------------------------
// PROGRAM DELIVERABLES - What Each Program Includes
// ----------------------------------------------------------------------------

export interface ProgramDeliverables {
  id: string;
  programName: string;
  tagline: string;
  physicalProducts: {
    productPack?: string; // ID from PRODUCT_PACKS
    merchKit: boolean;
    additionalProducts?: string[]; // Additional product IDs
  };
  digitalTools: {
    bridgeApp: boolean;
    bridgeAppPricing?: 'included' | 'first-month-free' | 'paid';
    videoLibrary: boolean;
    coachChat: boolean;
    zoomType?: 'group-bimonthly' | 'group-weekly' | 'biweekly-senior';
    zoomFrequency?: string;
  };
  training: {
    dailyProgramming: boolean;
    videoReview: boolean;
    inPersonDays?: number;
    inPersonTrips?: number;
  };
  services?: string[]; // Additional services like recruiting, draft prep, etc.
}

export const PROGRAM_DELIVERABLES: Record<string, ProgramDeliverables> = {
  // The Gateway - Initial Evaluation
  experience: {
    id: 'experience',
    programName: 'The 108 Experience',
    tagline: 'Your system starts here',
    physicalProducts: {
      productPack: 'completeProductPack',
      merchKit: true,
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'first-month-free',
      videoLibrary: true,
      coachChat: false,
      zoomType: undefined,
    },
    training: {
      dailyProgramming: false,
      videoReview: false,
      inPersonDays: 5,
    },
  },

  // Remote Core - Ongoing Remote Coaching
  virtual: {
    id: 'virtual',
    programName: 'Virtual Experience',
    tagline: 'Your coach, anywhere',
    physicalProducts: {
      merchKit: false, // Uses equipment from 108 Experience
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'included',
      videoLibrary: true,
      coachChat: true,
      zoomType: 'group-bimonthly',
      zoomFrequency: '2x per month',
    },
    training: {
      dailyProgramming: true,
      videoReview: true,
    },
  },

  // Virtual Pro - Amateur Pathway (Ages 12-16)
  virtualPro: {
    id: 'virtualPro',
    programName: 'Virtual Pro',
    tagline: 'The best of both worlds',
    physicalProducts: {
      productPack: 'completeProductPack',
      merchKit: true,
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'included',
      videoLibrary: true,
      coachChat: true,
      zoomType: 'group-bimonthly',
      zoomFrequency: '2x per month',
    },
    training: {
      dailyProgramming: true,
      videoReview: true,
      inPersonDays: 18,
      inPersonTrips: 6,
    },
  },

  // College Prep - Training + Recruiting
  collegePrep: {
    id: 'collegePrep',
    programName: 'College Prep',
    tagline: 'Training + Recruiting',
    physicalProducts: {
      productPack: 'completeProductPack',
      merchKit: true,
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'included',
      videoLibrary: true,
      coachChat: true,
      zoomType: 'group-weekly',
      zoomFrequency: 'Weekly',
    },
    training: {
      dailyProgramming: true,
      videoReview: true,
      inPersonDays: 18,
      inPersonTrips: 6,
    },
    services: [
      'Target school identification',
      'Showcase preparation & strategy',
      'Video packaging for coaches',
      'Direct coach connections',
      'Campus visit preparation',
      'Recruiting timeline management',
    ],
  },

  // Draft Prep - Optimize Draft Position
  draftPrep: {
    id: 'draftPrep',
    programName: 'Draft Prep',
    tagline: 'Every round is $500K+',
    physicalProducts: {
      productPack: 'completeProductPack',
      merchKit: true,
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'included',
      videoLibrary: true,
      coachChat: true,
      zoomType: 'group-weekly',
      zoomFrequency: 'Weekly',
    },
    training: {
      dailyProgramming: true,
      videoReview: true,
      inPersonDays: 18,
      inPersonTrips: 6,
    },
    services: [
      'Scout measurable optimization',
      'Data packaging for teams',
      'Scout relationship building',
      'Showcase strategy',
      'Draft timeline management',
    ],
  },

  // Pro Experience - Professional Athletes
  proExperience: {
    id: 'proExperience',
    programName: 'Pro Experience',
    tagline: 'Protect your window',
    physicalProducts: {
      productPack: 'completeProductPack',
      merchKit: true,
    },
    digitalTools: {
      bridgeApp: true,
      bridgeAppPricing: 'included',
      videoLibrary: true,
      coachChat: true,
      zoomType: 'biweekly-senior',
      zoomFrequency: 'Bi-weekly with senior staff',
    },
    training: {
      dailyProgramming: true,
      videoReview: true,
    },
    services: [
      'Senior staff only coaching',
      'Priority access to Will Marshall',
      'Offseason intensive blocks',
      'Career navigation guidance',
      'Independent program design',
    ],
  },
};

// ----------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------

export function getProductsFromPack(packId: string): Product[] {
  const pack = PRODUCT_PACKS[packId];
  if (!pack) return [];
  return pack.products.map(productId => PRODUCTS[productId]).filter(Boolean);
}

export function getProgramProducts(programId: string): {
  products: Product[];
  merchKit: boolean;
  packName?: string;
  packValue?: string;
} {
  const deliverables = PROGRAM_DELIVERABLES[programId];
  if (!deliverables) {
    return { products: [], merchKit: false };
  }

  const { physicalProducts } = deliverables;
  const products = physicalProducts.productPack
    ? getProductsFromPack(physicalProducts.productPack)
    : [];

  return {
    products,
    merchKit: physicalProducts.merchKit,
    packName: physicalProducts.productPack
      ? PRODUCT_PACKS[physicalProducts.productPack]?.name
      : undefined,
    packValue: physicalProducts.productPack
      ? PRODUCT_PACKS[physicalProducts.productPack]?.value
      : undefined,
  };
}

// ----------------------------------------------------------------------------
// DISPLAY TEXT HELPERS
// ----------------------------------------------------------------------------

export const PRODUCT_ICONS: Record<string, React.ReactNode> = {};

export function getBridgeAppPricingText(type: 'included' | 'first-month-free' | 'paid'): string {
  switch (type) {
    case 'included':
      return 'Included with program';
    case 'first-month-free':
      return 'First month free, then $50/mo';
    case 'paid':
      return '$50/month';
    default:
      return '';
  }
}

export function getZoomTypeText(type?: 'group-bimonthly' | 'group-weekly' | 'biweekly-senior'): string {
  switch (type) {
    case 'group-bimonthly':
      return 'Group mentorship Zooms (2x/month)';
    case 'group-weekly':
      return 'Weekly check-in calls';
    case 'biweekly-senior':
      return 'Bi-weekly calls with senior staff';
    default:
      return '';
  }
}
