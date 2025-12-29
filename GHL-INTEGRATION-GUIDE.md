# 108 Performance - GHL Integration Guide

**Document Version:** 1.0
**Last Updated:** December 2024
**Site URL:** https://108-apple-landing.vercel.app

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [All Pages & URLs](#2-all-pages--urls)
3. [Interactive Applications](#3-interactive-applications)
4. [Current Contact Points & CTAs](#4-current-contact-points--ctas)
5. [API Endpoints](#5-api-endpoints)
6. [Integration Opportunities](#6-integration-opportunities)
7. [Recommended GHL Setup](#7-recommended-ghl-setup)
8. [Implementation Checklist](#8-implementation-checklist)
9. [Service Questionnaires & Form Fields](#9-service-questionnaires--form-fields)
10. [CTA & Contact Point Reference](#10-cta--contact-point-reference)

---

## 1. Architecture Overview

### Tech Stack
- **Framework:** Next.js 16.1.1 (React 19)
- **Hosting:** Vercel (Edge deployment, global CDN)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Context API

### Current State
- **No form backend** - All conversions currently use mailto links or external redirects
- **No database** - Client-side state only (questionnaire data not persisted)
- **No CRM integration** - This is what GHL will provide

### Key Files for Integration
```
/src/app/
├── page.tsx                    # Homepage with FindYourPath
├── ballengee/page.tsx          # Ballengee pathway finder
├── programs/experience/page.tsx # Main conversion page
└── api/
    ├── intent/route.ts         # AI classification endpoint
    └── transcript/route.ts     # YouTube transcript endpoint

/src/components/
├── sections/FindYourPath.tsx   # Homepage questionnaire
├── ui/StickyCTA.tsx            # Dynamic sticky CTA
└── ui/Footer.tsx               # Footer with contact info

/src/context/
├── CTAContext.tsx              # Stores user pathway selections
└── IntentContext.tsx           # AI search state
```

---

## 2. All Pages & URLs

### Main Marketing Pages

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Main landing with FindYourPath questionnaire |
| Programs Overview | `/programs` | All program listings |
| The 108 Experience | `/programs/experience` | **PRIMARY CONVERSION** - Entry point for all athletes |
| Tri-Star Membership | `/programs/tri-star` | Local (Knoxville) training |
| Virtual Experience | `/programs/virtual` | Remote-only coaching |
| Virtual Pro | `/programs/virtual-pro` | Remote + in-person hybrid |
| College Prep | `/programs/college-prep` | College recruiting support |
| Draft Prep | `/programs/draft-prep` | MLB draft positioning |
| Pro Experience | `/programs/pro-experience` | Professional athlete program |

### Coach Programs

| Page | URL | Purpose |
|------|-----|---------|
| Coaches Experience | `/programs/coaches-experience` | 1-day coaching immersion |
| Coaches Mentorship | `/programs/coaches-mentorship` | Ongoing coach development |
| Host a Tour | `/programs/host-tour` | Bring 108 to your facility |
| Powered by 108 | `/programs/powered-by-108` | Facility licensing ($20k/year) |
| Tour Experience | `/programs/tour` | 2-day camps in select cities |

### Partner & Specialty Pages

| Page | URL | Purpose |
|------|-----|---------|
| **Ballengee Partner** | `/ballengee` | Professional athlete partner pricing (MLB/MiLB) |
| Athletes | `/athletes` | Roster showcase |
| Staff | `/staff` | Team bios |
| Results | `/results` | Success stories |
| NIL Program | `/nil` | NIL athlete opportunities |
| Performance Institute | `/performance-institute` | Full-time academy |
| Careers | `/careers` | Job opportunities |
| Investors | `/investors` | Investment information |

### Shop (External)

| Page | URL | Destination |
|------|-----|-------------|
| Shop | `/shop` | Links to `https://108merch.com` |
| BP Vest | `/shop/bp-vest` | Product page → Shopify |
| Waterbag | `/shop/waterbag-training` | Product page → Shopify |

---

## 3. Interactive Applications

### 3.1 FindYourPath Questionnaire (Homepage)

**Location:** Homepage (`/`) - Section ID: `#find-your-path`
**Component:** `/src/components/sections/FindYourPath.tsx`

#### User Flow

```
Step 1: User Type
├── "I'm an Athlete" → Step 2
├── "I'm a Parent" → Step 2
└── "I'm a Coach" → Step 5 (Coach Goal)

Step 2: Location
├── "Yes, we're local" (Knoxville) → Step 3
└── "No, we'll travel in" → Step 3

Step 3: Experience Check
├── "Yes, I have" (completed 108 Experience) → Step 4 (if non-local) OR Recommendation
└── "Not yet" → Recommendation (always 108 Experience)

Step 4: Travel Frequency (non-local only)
├── "Every 2 months" (6x/year) → Recommendation
├── "Occasionally" (1-2x/year) → Recommendation
└── "Can't travel regularly" → Recommendation

Step 5: Coach Goal
├── "Learn the 108 System" → Coach Recommendation
├── "Train My Team" → Coach Recommendation
└── "License the System" → Coach Recommendation

→ Final: Recommendation Display with CTA
```

#### Data Payload

```typescript
{
  userType: 'athlete' | 'parent' | 'coach',
  location: 'local' | 'non-local' | null,
  hasExperience: 'yes' | 'no' | null,
  travelFrequency: 'quarterly' | 'once' | 'cant-travel' | null,
  coachGoal: 'learn' | 'team' | 'license' | null,
  recommendation: {
    title: string,      // e.g., "The 108 Experience"
    price: string,      // e.g., "From $2,000"
    href: string,       // e.g., "/programs/experience"
    tag: string         // e.g., "Required First Step"
  }
}
```

#### Recommendation Logic

| Scenario | Recommendation | Price |
|----------|----------------|-------|
| No Experience (any) | The 108 Experience | From $2,000 |
| Local + Has Experience | Tri-Star Membership | $499/mo |
| Non-local + Quarterly Travel | Virtual Pro | $1,000/mo |
| Non-local + Occasional Travel | Virtual Experience | $550/mo |
| Non-local + Can't Travel | Virtual Experience | $550/mo |
| Coach - Learn | Coaches Experience | $500/day |
| Coach - Team | Host a Tour | $500/athlete |
| Coach - License | Powered by 108 | $20,000/year |

---

### 3.2 Ballengee Pathway Finder

**Location:** `/ballengee`
**Component:** `/src/app/ballengee/page.tsx` (embedded in page)

#### User Flow

```
Step 1: Player Tier
├── "MLB" → Step 2
└── "MiLB" → Step 2

Step 2: Training Type
├── "Pro Experience" (Virtual + In-Person) → Step 3
└── "Virtual Only" → Recommendation

Step 3: In-Person Style (Pro Experience only)
├── "Scheduled Package" (bundled tune-ups) → Step 4
├── "Flexible À la Carte" ($500/day) → Recommendation (Path A)
└── "Visits Only" (no virtual) → Recommendation (Path D)

Step 4: Commitment Length (Scheduled only)
├── "Full Year" (12 months) → Recommendation (Path B)
└── "Offseason" (4 months) → Recommendation (Path C)

→ Final: Recommendation with pricing grid
```

#### Data Payload

```typescript
{
  tier: 'mlb' | 'milb',
  trainingType: 'virtual-only' | 'pro-experience',
  inPersonStyle: 'scheduled' | 'flexible' | 'visits-only' | null,
  commitment: 'annual' | 'offseason' | null,
  recommendation: {
    pathway: 'Virtual' | 'A' | 'B' | 'C' | 'D',
    title: string,
    monthly: string,
    total: string,
    visits: string,
    features: string[]
  }
}
```

#### Pricing Matrix

| Tier | Path | Package | Monthly | Total | In-Person |
|------|------|---------|---------|-------|-----------|
| MLB | B | 12-Month Pro | $1,000 | $10,000 | 6 × 3-day |
| MLB | C | Offseason Pro | $625 | $7,500 | 4 × 3-day |
| MiLB | B | 12-Month Pro | $625 | $7,500 | 6 × 3-day |
| MiLB | C | Offseason Pro | $417 | $5,000 | 4 × 3-day |
| Any | A | Remote + À la Carte | Virtual + $500/day | Varies | Book as needed |
| Any | D | Visits Only | $500/day | Pay-as-you-go | No priority |
| Any | Virtual | Virtual Only | TBD | TBD | None |

**Required First Step:** All paths require The 108 Experience ($3,500 Ballengee rate)

---

## 4. Current Contact Points & CTAs

### Email Contact Points

| Location | Email | Subject Line | Trigger |
|----------|-------|--------------|---------|
| Ballengee - Contact Pro Team | `pro@108performance.com` | `Ballengee Client - Path [X] Inquiry` | Recommendation CTA |
| Ballengee - Schedule Evaluation | `pro@108performance.com` | `Ballengee 108 Experience Inquiry` | 108 Experience section |
| Footer | `info@108performanceacademy.com` | (none) | Footer link |

### Phone Contact

| Location | Number | Format |
|----------|--------|--------|
| Ballengee Page | `+1 865-253-5060` | "Call Direct" button |
| Footer | `865-253-5060` | Text display |

### Physical Address

```
108 Performance 
6616 Deane Hill Drive
Knoxville, TN 37919
```

### External Links

| Destination | URL | Location |
|-------------|-----|----------|
| Shopify Store | `https://108merch.com` | Shop pages |
| Instagram | `https://instagram.com/108performance` | Footer |
| YouTube | `https://youtube.com/@108performance` | Footer |
| TikTok | `https://tiktok.com/@108performance` | Footer |
| Twitter/X | `https://twitter.com/108performance` | Footer |
| Facebook | `https://facebook.com/108performance` | Footer |
| LinkedIn | `https://linkedin.com/company/108performance` | Footer |

---

## 5. API Endpoints

### 5.1 Intent Classification API

**Endpoint:** `POST /api/intent`
**Purpose:** AI-powered search that classifies user queries and returns program recommendations

#### Request
```json
{
  "query": "I want to throw harder"
}
```

#### Response
```json
{
  "category": "PERFORMANCE_VELOCITY",
  "confidence": 0.85,
  "title": "The 108 Experience",
  "description": "Start here. We'll decode your movement...",
  "price": "From $2,000",
  "href": "/programs/experience",
  "ctaText": "Book Your Experience",
  "related": [
    { "title": "Virtual Pro", "href": "/programs/virtual-pro" }
  ]
}
```

#### Categories
- `PERFORMANCE_VELOCITY` - Velocity improvement
- `PERFORMANCE_POWER` - Power/strength
- `PERFORMANCE_GENERAL` - General performance
- `INJURY_ARM` - Arm pain/injury
- `INJURY_GENERAL` - General injury
- `LOGISTICS_LOCAL` - Local training
- `LOGISTICS_REMOTE` - Remote options
- `LOGISTICS_TRAVEL` - Travel-in options
- `STAGE_YOUTH` / `STAGE_HIGH_SCHOOL` / `STAGE_COLLEGE` / `STAGE_DRAFT` / `STAGE_PRO`
- `COACH_LEARN` / `COACH_TEAM` / `COACH_LICENSE`
- `PRICING` - Cost questions
- `UNKNOWN` - Unclassified

### 5.2 Transcript API

**Endpoint:** `POST /api/transcript`
**Purpose:** Extract YouTube video transcripts (internal use)

---

## 6. Integration Opportunities

### 6.1 Priority Integrations

#### A. FindYourPath Completion → GHL

**Trigger:** User completes questionnaire and views recommendation
**Webhook Call:** On recommendation display

```javascript
// Add to FindYourPath.tsx after recommendation is generated
fetch('YOUR_GHL_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    source: 'findyourpath',
    timestamp: new Date().toISOString(),
    userType,
    location,
    hasExperience,
    travelFrequency,
    coachGoal,
    recommendation: rec.title,
    recommendedPrice: rec.price,
    recommendedUrl: rec.href
  })
});
```

#### B. Ballengee Pathway Completion → GHL

**Trigger:** User completes Ballengee questionnaire
**Webhook Call:** On recommendation display

```javascript
// Add to ballengee/page.tsx after recommendation is generated
fetch('YOUR_GHL_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    source: 'ballengee_pathway',
    timestamp: new Date().toISOString(),
    tier,
    trainingType,
    inPersonStyle,
    commitment,
    pathway: rec.pathway,
    packageName: rec.title,
    monthlyPrice: rec.monthly,
    totalPrice: rec.total
  })
});
```

#### C. Convert Mailto to Form Submission

**Current:** `mailto:pro@108performance.com`
**Recommended:** Replace with modal form that:
1. Collects: Name, Email, Phone, Message
2. Submits to GHL webhook
3. Shows confirmation
4. Falls back to mailto if webhook fails

### 6.2 Secondary Integrations

| Trigger | Data | Priority |
|---------|------|----------|
| Page visit tracking | URL, referrer, timestamp | Low |
| Intent search query | Query text, result category | Medium |
| CTA button clicks | Button text, destination URL | Low |
| Video engagement | Video ID, watch time | Low |

---

## 7. Recommended GHL Setup

### 7.1 Custom Fields

Create these contact custom fields in GHL:

```
-- Source Tracking --
source_page: text
source_questionnaire: dropdown [findyourpath, ballengee, direct]
utm_source: text
utm_medium: text
utm_campaign: text

-- FindYourPath Data --
fp_user_type: dropdown [athlete, parent, coach]
fp_location: dropdown [local, non-local]
fp_has_experience: dropdown [yes, no]
fp_travel_frequency: dropdown [quarterly, once, cant-travel]
fp_coach_goal: dropdown [learn, team, license]
fp_recommendation: text

-- Ballengee Data --
bg_tier: dropdown [mlb, milb]
bg_training_type: dropdown [virtual-only, pro-experience]
bg_in_person_style: dropdown [scheduled, flexible, visits-only]
bg_commitment: dropdown [annual, offseason]
bg_pathway: dropdown [Virtual, A, B, C, D]
bg_package_total: text
```

### 7.2 Pipelines

#### Pipeline 1: Athlete Journey
```
Stage 1: Website Lead
  ↓ (questionnaire completed)
Stage 2: Qualified - Needs Experience
  ↓ (booked evaluation)
Stage 3: Experience Scheduled
  ↓ (completed evaluation)
Stage 4: Post-Experience
  ↓ (enrolled in program)
Stage 5: Active Client
```

#### Pipeline 2: Ballengee Pro
```
Stage 1: Ballengee Lead
  ↓ (pathway selected)
Stage 2: Path Selected - Pending Contact
  ↓ (spoke with pro team)
Stage 3: Experience Scheduled
  ↓ (completed)
Stage 4: Pro Package Active
```

#### Pipeline 3: Coach/B2B
```
Stage 1: Coach Inquiry
Stage 2: Experience Scheduled
Stage 3: Mentorship Active / Tour Scheduled / Licensing Discussion
Stage 4: Active Partner
```

### 7.3 Tags

```
-- Source Tags --
source:website
source:ballengee
source:referral

-- User Type Tags --
type:athlete
type:parent
type:coach

-- Stage Tags --
stage:youth
stage:high-school
stage:college
stage:draft-eligible
stage:professional

-- Tier Tags (Ballengee) --
tier:mlb
tier:milb

-- Program Interest Tags --
interest:experience
interest:tri-star
interest:virtual
interest:virtual-pro
interest:college-prep
interest:draft-prep
interest:coaches

-- Status Tags --
status:new-lead
status:qualified
status:scheduled
status:active
status:churned
```

### 7.4 Automations

#### Automation 1: New Website Lead
```
Trigger: Webhook received (source = findyourpath)
Actions:
1. Create/Update Contact
2. Add tag: source:website, type:[userType]
3. Add to Pipeline: Athlete Journey → Stage 1
4. If hasExperience = no:
   - Add tag: interest:experience
   - Send email: "Your 108 Journey Starts Here"
5. If hasExperience = yes:
   - Add tag based on recommendation
   - Send email: "Welcome Back - Your Next Step"
```

#### Automation 2: Ballengee Lead
```
Trigger: Webhook received (source = ballengee_pathway)
Actions:
1. Create/Update Contact
2. Add tags: source:ballengee, tier:[tier]
3. Add to Pipeline: Ballengee Pro → Stage 2
4. Set custom fields (pathway, package, pricing)
5. Internal notification to Pro Team
6. Send email: "Your Ballengee Partnership Details"
```

---

## 8. Implementation Checklist

### Phase 1: GHL Setup
- [ ] Create custom fields (see 7.1)
- [ ] Create pipelines (see 7.2)
- [ ] Create tags (see 7.3)
- [ ] Create webhook endpoints for each form
- [ ] Build email templates

### Phase 2: Website Integration (Developer Tasks)
- [ ] Add webhook call to FindYourPath completion
- [ ] Add webhook call to Ballengee pathway completion
- [ ] Create contact form modal component
- [ ] Replace mailto links with form modal
- [ ] Add form to Experience page
- [ ] Test all webhook payloads

### Phase 3: Automation Setup
- [ ] Build "New Website Lead" automation
- [ ] Build "Ballengee Lead" automation
- [ ] Build "Coach Inquiry" automation
- [ ] Set up internal notifications
- [ ] Create email sequences

### Phase 4: Testing
- [ ] Test FindYourPath → GHL flow (all paths)
- [ ] Test Ballengee → GHL flow (all paths)
- [ ] Test email delivery
- [ ] Test pipeline stage progression
- [ ] Verify tag application

---

## 9. Service Questionnaires & Form Fields

This section documents the actual questionnaire fields for each service offering. GHL forms should mirror these fields.

---

### 9.1 The 108 Experience (Player Application)

**Page:** `/programs/experience`
**Form Type:** Multi-section application (5 sections)
**Estimated Completion Time:** 15-20 minutes

#### Section 1: General Information & Logistics

| Field | Type | Options/Format | Required |
|-------|------|----------------|----------|
| Email Address | email | — | Yes |
| First Name | text | — | Yes |
| Last Name | text | — | Yes |
| Date of Birth | date | MM/DD/YYYY | Yes |
| Height | text | ft/in | Yes |
| Weight | number | lbs | Yes |
| Shirt Size | dropdown | S, M, L, XL, XXL | Yes |
| How did you hear about 108? | dropdown | Instagram, TikTok, Twitter, YouTube, Referred by Friend/Coach | Yes |
| Phone Number | phone | — | Yes |
| Current School | text | — | Yes |
| Home Address | text | — | Yes |
| City | text | — | Yes |
| State | dropdown | US States | Yes |
| Zip Code | text | — | Yes |
| Who should 108 call for pricing/scheduling? | dropdown | Player, Parent 1, Parent 2 | Yes |
| Training Duration | dropdown | 2 Days, 3 Days, 5 Days | Yes |
| Potential Training Dates | multi-select | Date blocks (Sept–March) | Yes |
| Parent 1 Full Name | text | — | Yes |
| Parent 1 Phone | phone | — | Yes |
| Parent 1 Email | email | — | Yes |
| Parent 2 Full Name | text | — | No |
| Parent 2 Phone | phone | — | No |
| Parent 2 Email | email | — | No |
| Emergency Contact Name | text | — | Yes |
| Emergency Contact Phone | phone | — | Yes |

#### Section 2: Positions Information

| Field | Type | Options/Format | Required |
|-------|------|----------------|----------|
| Handedness | dropdown | RHT/RHH, RHT/LHH, RHT/Switch, LHT/LHH, LHT/RHH, LHT/Switch, Ambidextrous | Yes |
| Sport | dropdown | Baseball, Softball | Yes |
| Primary Position | dropdown | Pitcher Only, Two Way, C, 1B, 2B, SS, 3B, OF | Yes |
| Development Focus | dropdown | Hitting, Pitching, Two Way | Yes |

#### Section 3: Getting to Know You As A Player

| Field | Type | Required |
|-------|------|----------|
| What is your greatest strength as a player? | textarea | Yes |
| What is your greatest weakness? | textarea | Yes |
| Past and current injuries/limitations | textarea | Yes |
| 6-month goals | textarea | Yes |
| 12-month goals | textarea | Yes |
| Who in the MLB do you think your game resembles and why? | textarea | Yes |
| How would you describe yourself to a coach? | textarea | Yes |
| What would your teammates or coaches say about you? | textarea | Yes |
| What are you looking to get out of your 108 Experience? | textarea | Yes |

#### Section 4: Hitting Skill Development

*Note: Pitchers only should leave this section blank*

| Field | Type | Options/Format | Required |
|-------|------|----------------|----------|
| Areas of Strength | multi-select | Speed/Quickness, Strength/Power, Agility/Balance/Coordination/Timing | Conditional |
| Areas of Weakness | multi-select | Speed/Quickness, Strength/Power, Agility/Balance/Coordination/Timing | Conditional |
| Identity: Who are you as a hitter? What keeps you in the lineup? | textarea | Conditional |
| What are you currently working on or trying to change and why? | textarea | Conditional |
| What is something your coach is constantly telling you to work on? | textarea | Conditional |
| Zones you hit best | multi-select | Up and In, Up Middle, Up and Away, Middle In, Middle Middle, Middle Away, Down and In, Down Middle, Down and Away | Conditional |
| Zones you hit worst | multi-select | (same options) | Conditional |
| Pitches you hit best | multi-select | Fastball, Curveball, Slider, Changeup, Cutter | Conditional |
| Pitches you hit worst | multi-select | (same options) | Conditional |
| Best parts of your game | multi-select | Barrel Control, Plate Discipline, Mental Fortitude, Power, Speed, Contact | Conditional |
| Worst parts of your game | multi-select | (same options) | Conditional |
| 3 drills you do regularly and why | textarea | Conditional |
| 3 cues/thoughts in the cage or at the plate | textarea | Conditional |
| Describe the feeling when things are going well (beach ball visualization) | textarea | Conditional |
| What happens when things start to snowball/go downhill? | textarea | Conditional |
| What were you thinking/doing differently when things "clicked" in the past? | textarea | Conditional |
| If teaching someone to hit, what are the 3 most important things? | textarea | Conditional |

#### Section 5: Pitching Skill Development

*Note: Hitters who do not pitch should leave this section blank*

| Field | Type | Options/Format | Required |
|-------|------|----------------|----------|
| Where does your arm hurt? | multi-select | Shoulder, Elbow, Forearm, Wrist, None | Conditional |
| When does it hurt? | multi-select | Before throwing, During throwing, After throwing, Never | Conditional |
| What makes you an effective pitcher? Why does the coach give you the ball? | textarea | Conditional |
| Do you prefer being a starter or reliever? | dropdown | Starter, Reliever, No preference | Conditional |
| Do you perform better in pressure or non-pressure situations? Why? | textarea | Conditional |
| Best parts of your pitching | multi-select | Velocity, Command, Nasty Breaking Balls, Composure, Competitiveness, Deception | Conditional |
| Worst parts of your pitching | multi-select | (same options) | Conditional |
| 3-2 count, bases loaded, 9th inning: What pitch, where, and why? | textarea | Conditional |
| What is your go-to out pitch? | textarea | Conditional |
| When command is off, where do you miss? | multi-select | Inside, Outside, High, Low | Conditional |
| 3 drills you do regularly and why | textarea | Conditional |
| 3 cues/thoughts during catch or on the mound | textarea | Conditional |
| Describe what it felt like when you were "dealing" | textarea | Conditional |
| What happens when things start to snowball on the mound? | textarea | Conditional |
| What were you thinking/doing when your arm felt incredible? | textarea | Conditional |
| If teaching someone to pitch, what are the 3 most important things? | textarea | Conditional |

#### GHL Field Mapping

```
-- Contact Fields --
email → Email
first_name → First Name
last_name → Last Name
phone → Phone Number
date_of_birth → Date of Birth (custom)
address1 → Home Address
city → City
state → State
postal_code → Zip Code

-- Custom Fields to Create --
exp_height: text
exp_weight: text
exp_shirt_size: dropdown
exp_source: dropdown (how heard about 108)
exp_school: text
exp_billing_contact: dropdown
exp_training_duration: dropdown
exp_training_dates: text
exp_parent1_name: text
exp_parent1_phone: text
exp_parent1_email: text
exp_parent2_name: text
exp_parent2_phone: text
exp_parent2_email: text
exp_emergency_name: text
exp_emergency_phone: text
exp_handedness: dropdown
exp_sport: dropdown
exp_position: dropdown
exp_focus: dropdown
exp_strengths: textarea
exp_weaknesses: textarea
exp_injuries: textarea
exp_goals_6mo: textarea
exp_goals_12mo: textarea
exp_mlb_comp: textarea
exp_self_description: textarea
exp_teammate_description: textarea
exp_experience_goals: textarea

-- Tags to Apply --
source:experience-application
sport:[baseball|softball]
position:[position]
focus:[hitting|pitching|two-way]
```

---

### 9.2 108 Tri Star Experience (Player Intake Form)

**Purpose:** Simple intake form for young players interested in 108 training and education.

**Form Introduction:** "Howdy yall! please fill out the form below so that we can follow up with information about education and training at 108!"

#### Player Information
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Age | number | Yes |
| Phone Number | tel | Yes |
| Email | email | Yes |

#### Parent/Guardian Information
| Field | Type | Required |
|-------|------|----------|
| Parent First Name | text | Yes |
| Parent Last Name | text | Yes |
| Parent Phone Number | tel | Yes |
| Parent Email | email | Yes |

```
-- GHL Custom Fields --
tristar_first_name: text
tristar_last_name: text
tristar_age: number
tristar_phone: text
tristar_email: text
tristar_parent_first_name: text
tristar_parent_last_name: text
tristar_parent_phone: text
tristar_parent_email: text

-- Tags to Apply --
source:tristar-intake
type:youth-player
```

---

### 9.3 Pro Experience (Interest Form)

**Purpose:** Simple intake for professional athletes interested in 108 Pro Experience. A client coordinator or athlete rep will follow up to discuss details.

**Note:** Virtual Experience, Virtual Pro, College Prep, and Draft Prep do not require separate questionnaires - these are player pathways that branch from the 108 Experience application.

#### Contact Information
| Field | Type | Required | Options |
|-------|------|----------|---------|
| First Name | text | Yes | - |
| Last Name | text | Yes | - |
| Preferred Contact Method | radio | Yes | Text, Email |
| What are you looking for? | textarea | Yes | - |
| How quickly are you looking to begin? | dropdown | Yes | Immediately, Within 1 month, Within 3 months, Just exploring |

```
-- GHL Custom Fields --
pro_first_name: text
pro_last_name: text
pro_contact_method: dropdown (text, email)
pro_looking_for: textarea
pro_timeline: dropdown

-- Tags to Apply --
source:pro-experience-interest
type:professional-athlete

-- Automation --
Notify: 108 Pro Experience Client Coordinator / Athlete Rep
Action: Follow up via preferred contact method
```

---

### 9.4 Coaches Experience (Application Form)

**Purpose:** Application for coaches interested in the 2-5 day immersion at 108's facility ($500/day). This is a **mutual evaluation** - 108 is selective about which coaches they partner with.

**Note:** The philosophy questions are key fit indicators designed to filter for coaches who are open-minded and genuinely interested vs. those just looking for credentials.

#### Section 1: Contact Information
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Email | email | Yes |
| Phone Number | tel | Yes |
| Preferred Contact Method | radio | Yes |

**Preferred Contact Method Options:** Text, Email

#### Section 2: Coaching Background
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Current Role/Title | text | Yes | - |
| Organization/Facility Name | text | Yes | - |
| Years of Coaching Experience | dropdown | Yes | 0-2 years, 3-5 years, 6-10 years, 10+ years |
| Primary Sport Focus | dropdown | Yes | Baseball, Softball, Both |
| Age Groups You Work With | checkbox | Yes | Youth (8-12), Middle School (13-14), High School (15-18), College, Professional |
| Approx. Number of Athletes You Currently Train | dropdown | Yes | 1-10, 11-25, 26-50, 50+ |

#### Section 3: Philosophy & Approach (Key Fit Indicators)
| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| In one sentence, describe your current coaching philosophy | textarea | Yes | Reveals alignment with 108's athlete-first approach |
| What aspects of your current approach are you most confident in? | textarea | Yes | Shows self-awareness and openness |
| What aspects of your coaching do you feel need the most development? | textarea | Yes | Indicates growth mindset and honesty |
| How did you hear about 108 Performance? | dropdown | Yes | Marketing attribution |
| What specifically about the 108 method interests you? | textarea | Yes | Tests genuine interest vs. credential hunting |

**How Heard Options:** Referral, Social Media, YouTube, Podcast, Website, Word of Mouth, Other

#### Section 4: Goals & Commitment
| Field | Type | Required | Options |
|-------|------|----------|---------|
| What do you hope to gain from the Coaches Experience? | checkbox | Yes | Learn new methodology, Evaluate partnership potential, Improve my coaching skills, Bring ideas back to my facility, Other |
| Are you interested in the full partnership path (Mentorship → Powered by 108)? | radio | Yes | Yes - actively interested, Possibly - want to learn more, Just exploring education options |
| Preferred timeframe to attend | dropdown | Yes | Within 1 month, 1-3 months, 3-6 months, Flexible |
| Preferred duration | dropdown | Yes | 2 days, 3 days, 4 days, 5 days |

#### Section 5: Facility & Operations (Partnership Potential)
| Field | Type | Required | Conditional |
|-------|------|----------|-------------|
| Do you own or operate a training facility? | radio | Yes | - |
| Facility Location (City, State) | text | Conditional | Show if "Yes" |
| Briefly describe your facility and current offerings | textarea | Conditional | Show if "Yes" or "In development" |

**Facility Options:** Yes, No, In development

```
-- GHL Custom Fields --
coach_first_name: text
coach_last_name: text
coach_email: text
coach_phone: text
coach_contact_method: dropdown (text, email)
coach_role: text
coach_organization: text
coach_years_experience: dropdown
coach_sport_focus: dropdown
coach_age_groups: multi-select
coach_athlete_count: dropdown
coach_philosophy: textarea
coach_strengths: textarea
coach_development_areas: textarea
coach_source: dropdown
coach_108_interest: textarea
coach_goals: multi-select
coach_partnership_interest: dropdown
coach_timeframe: dropdown
coach_duration: dropdown
coach_has_facility: dropdown
coach_facility_location: text
coach_facility_description: textarea

-- Tags to Apply --
source:coaches-experience-application
sport:[baseball|softball|both]
partnership-interest:[active|exploring|education-only]
has-facility:[yes|no|in-development]

-- Automation --
Notify: 108 Coaches Experience Coordinator
Action: Review application for fit evaluation
```

---

### 9.5 Coaches Mentorship (Application Form)

**Purpose:** Application for ongoing mentorship program ($297-$500/month). Most applicants have completed the Coaches Experience, but some may apply directly.

**Includes:** Monthly calls with Will Marshall & Jose Rijo-Berger, full system access, video review, private community, quarterly deep-dives, direct messaging with senior staff.

#### Section 1: Contact Information
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Email | email | Yes |
| Phone Number | tel | Yes |

#### Section 2: Your 108 Journey
| Field | Type | Required | Options/Notes |
|-------|------|----------|---------------|
| Have you completed the 108 Coaches Experience? | radio | Yes | Yes, No - but I'm familiar with the method, No - I'm new to 108 |
| If yes, when did you attend? | text | Conditional | Show if "Yes" selected |
| How are you currently using 108 concepts in your coaching? | textarea | Yes | - |

#### Section 3: Mentorship Goals
| Field | Type | Required | Options |
|-------|------|----------|---------|
| What areas do you most want to develop through mentorship? | checkbox | Yes | Hitting instruction, Pitching instruction, Movement/athleticism, Athlete psychology, Business/facility growth, Implementation support |
| What's your biggest challenge implementing the 108 method? | textarea | Yes | - |
| Are you interested in the Powered by 108 licensing path? | radio | Yes | Yes - that's my goal, Maybe in the future, No - just want education |

#### Section 4: Commitment & Logistics
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Preferred membership tier | dropdown | Yes | Standard ($297/mo), Premium ($500/mo) |
| When would you like to start? | dropdown | Yes | Immediately, Next month, Within 3 months |

```
-- GHL Custom Fields --
mentorship_first_name: text
mentorship_last_name: text
mentorship_email: text
mentorship_phone: text
mentorship_completed_experience: dropdown
mentorship_experience_date: text
mentorship_current_use: textarea
mentorship_development_areas: multi-select
mentorship_biggest_challenge: textarea
mentorship_licensing_interest: dropdown
mentorship_tier: dropdown
mentorship_start_date: dropdown

-- Tags to Apply --
source:coaches-mentorship-application
completed-experience:[yes|familiar|new]
licensing-interest:[yes|maybe|no]
tier:[standard|premium]

-- Automation --
Notify: 108 Mentorship Coordinator
Action: If "No - I'm new to 108" → suggest Coaches Experience first
```

---

### 9.6 Host a Tour (108 Tour Experience Application)

**Purpose:** Application for facilities/organizations wanting to host a 108 Tour Experience at their location ($500/athlete for 2-day camps). Used to determine feasibility and marketing reach.

**Form Introduction:** "Thank you for your interest in hosting a 108 Tour Experience #THE108WAY. The information below is necessary for us to determine feasibility of hosting a tour stop at your location. Please fill out the form completely and to the best of your ability."

**Source:** https://docs.google.com/forms/d/e/1FAIpQLSdBVaahwu9fkYIKm4XLXb8RYGyXznsHXCW9KQSvEO50JfYWsg/viewform

#### Section 1: Contact Information
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Phone Number | tel | Yes |
| Email | email | Yes |

#### Section 2: Facility Information
| Field | Type | Required |
|-------|------|----------|
| Location of your field and facility - please give a brief description of the venue and amenities | textarea | Yes |
| Facility or Field Address | text | Yes |
| City | text | Yes |
| State | text | Yes |
| Zip Code | text | Yes |

#### Section 3: Scheduling
| Field | Type | Required |
|-------|------|----------|
| Please provide 3 potential dates that you are interested in hosting a 108 Tour Experience at your location | textarea | Yes |

#### Section 4: Player Pool & Reach
| Field | Type | Required |
|-------|------|----------|
| What is the potential player pool in your grasp? Travel teams, players on membership at the facility, AND what are the age ranges of those players? | textarea | Yes |
| What is the size of your email list? How frequently do you send emails to that list? How responsive are people to those email blasts you make? | textarea | Yes |
| Please provide the handles/profiles to your primary social media accounts where you have influence (Instagram, Facebook, Twitter, YouTube, TikTok, etc.) | textarea | Yes |
| Please provide your website if you have one | url | No |

```
-- GHL Custom Fields --
tour_first_name: text
tour_last_name: text
tour_phone: text
tour_email: text
tour_facility_description: textarea
tour_address: text
tour_city: text
tour_state: text
tour_zip: text
tour_potential_dates: textarea
tour_player_pool: textarea
tour_email_list_info: textarea
tour_social_handles: textarea
tour_website: text

-- Tags to Apply --
source:tour-experience-application
state:[state]

-- Automation --
Notify: 108 Tour Coordinator
Action: Evaluate feasibility based on player pool and marketing reach
```

---

### 9.7 Powered by 108 (Licensing Application)

**Purpose:** Application for full 108 licensing partnership ($20,000 Year 1, ~$10,000+ renewal). This is the highest tier of the coaching partnership path - full system licensing, branded materials, staff training, and ongoing support.

**Source:** https://docs.google.com/forms/d/e/1FAIpQLSfpwAIWbJ_d6npUOqRFjxy-51qFEFIs107R6dqSXqArxTCqPQ/viewform

#### Contact Information
| Field | Type | Required |
|-------|------|----------|
| Email | email | Yes |
| First Name | text | Yes |
| Last Name | text | Yes |
| Phone Number | tel | Yes |
| Email (confirmation) | email | Yes |

#### Facility Information
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Do you have an existing facility or are you interested in opening a brand new facility? | radio | Yes | Existing, New |
| Proposed/Existing Facility Address | text | Yes | - |

#### Business & Financial
| Field | Type | Required |
|-------|------|----------|
| Total capital to invest or last year's revenue | text | Yes |

#### Goals & Referral
| Field | Type | Required |
|-------|------|----------|
| How do you feel a Powered by 108 relationship will help you? | textarea | Yes |
| How did you find out about 108? Did someone refer you? If so, who? | textarea | Yes |

```
-- GHL Custom Fields --
pb108_email: text
pb108_first_name: text
pb108_last_name: text
pb108_phone: text
pb108_facility_status: dropdown (existing, new)
pb108_facility_address: text
pb108_capital_revenue: text
pb108_goals: textarea
pb108_referral_source: textarea

-- Tags to Apply --
source:powered-by-108-application
facility-status:[existing|new]
priority:high

-- Automation --
Notify: 108 Licensing Team (Will Marshall)
Action: High-priority review - potential $20K+ partnership
Flag: If referral mentioned, credit referrer
```

---

### 9.8 Ballengee Partner Program (Player Application)

**Purpose:** Application for professional baseball players accessing 108 training through the Ballengee partnership. Answers route players to the appropriate package based on their preferences.

**Pathways:**
- **Virtual Experience** - Remote training only
- **Path A** - Scheduled in-person + annual commitment
- **Path B** - Scheduled in-person + offseason only
- **Path C** - Flexible in-person + annual commitment
- **Path D** - Visits only (no regular schedule)

*Pricing varies by tier (MLB vs MiLB)*

#### Section 1: Contact Information
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Email | email | Yes |
| Phone Number | tel | Yes |
| Preferred Contact Method | radio | Yes |

**Contact Method Options:** Text, Email

#### Section 2: Professional Status
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Current Level | dropdown | Yes | MLB (40-man roster), MiLB (Minor League) |
| Current Organization/Team | text | Yes | - |
| Position | dropdown | Yes | Pitcher, Catcher, Infielder, Outfielder, Two-Way |
| Agent Name | text | No | - |
| Agent Email | email | No | - |

#### Section 3: Training Preferences
| Field | Type | Required | Options | Conditional |
|-------|------|----------|---------|-------------|
| Are you interested in virtual-only training or do you want in-person options? | radio | Yes | Virtual only, Include in-person training | - |
| Preferred in-person style | radio | Conditional | Scheduled sessions at 108, Flexible/as-needed, Facility visits only | Show if "Include in-person" |
| Commitment length | radio | Conditional | Year-round, Offseason only | Show if "Scheduled sessions" |
| Where are you based during the offseason? | text | Yes | - | - |

#### Section 4: Goals & Timeline
| Field | Type | Required | Options |
|-------|------|----------|---------|
| Primary focus area | checkbox | Yes | Hitting, Pitching, Movement/Athleticism, Mental Game, Injury Prevention/Recovery |
| What are you hoping to improve or achieve? | textarea | Yes | - |
| When are you looking to start? | dropdown | Yes | Immediately, This offseason, Next season, Just exploring |

#### Section 5: Referral
| Field | Type | Required |
|-------|------|----------|
| How did you hear about the Ballengee partnership? | textarea | Yes |

```
-- GHL Custom Fields --
ballengee_first_name: text
ballengee_last_name: text
ballengee_email: text
ballengee_phone: text
ballengee_contact_method: dropdown
ballengee_level: dropdown (mlb, milb)
ballengee_team: text
ballengee_position: dropdown
ballengee_agent_name: text
ballengee_agent_email: text
ballengee_training_type: dropdown (virtual, in-person)
ballengee_in_person_style: dropdown (scheduled, flexible, visits)
ballengee_commitment: dropdown (annual, offseason)
ballengee_offseason_location: text
ballengee_focus_areas: multi-select
ballengee_goals: textarea
ballengee_start_timeline: dropdown
ballengee_referral_source: textarea

-- Calculated Field: Recommended Pathway --
IF training_type = "virtual" THEN "Virtual Experience"
ELSE IF in_person_style = "scheduled" AND commitment = "annual" THEN "Path A"
ELSE IF in_person_style = "scheduled" AND commitment = "offseason" THEN "Path B"
ELSE IF in_person_style = "flexible" THEN "Path C"
ELSE IF in_person_style = "visits" THEN "Path D"

-- Tags to Apply --
source:ballengee-partner-application
level:[mlb|milb]
pathway:[virtual|path-a|path-b|path-c|path-d]
position:[pitcher|catcher|infielder|outfielder|two-way]
priority:high

-- Automation --
Notify: 108 Pro Experience Coordinator
Action: Route to appropriate pathway pricing
Flag: Include agent in communications if provided
```

---

## 10. CTA & Contact Point Reference

This section documents all CTAs, contact points, and links across the website for GHL automation integration.

---

### 10.1 Email Addresses

| Email | Purpose | Pages Used |
|-------|---------|------------|
| `info@108performanceacademy.com` | General contact | Footer, Shop, Waterbag Training |
| `nil@108performance.com` | NIL program applications | NIL page (`/nil`) |
| `pro@108performance.com` | Professional athlete inquiries | Ballengee page (`/ballengee`) |
| `will@108performance.com` | Investor relations | Investors page (`/investors`) |

---

### 10.2 Phone Numbers

| Number | Purpose | Pages Used |
|--------|---------|------------|
| `865-253-5060` | Main office | Ballengee page, constants |

---

### 10.3 Social Media Links

| Platform | Handle | URL |
|----------|--------|-----|
| Instagram | @108_performance | `https://instagram.com/108_performance` |
| YouTube | @108_performance | `https://youtube.com/@108_performance` |
| X/Twitter | @108_performance | `https://x.com/108_performance` |
| TikTok | @108_performance | `https://www.tiktok.com/@108_performance` |
| Facebook | 108PerformanceAcademy | `https://www.facebook.com/108PerformanceAcademy` |
| LinkedIn | 108-performance | `https://www.linkedin.com/company/108-performance/` |

---

### 10.4 External Links

| Destination | URL | Used On |
|-------------|-----|---------|
| 108 Merch (Main) | `https://108merch.com` | Navigation, Shop |
| 108 Merch (Apparel) | `https://108merch.com/collections/apparel` | Navigation |
| 108 Merch (Hats) | `https://108merch.com/collections/hats` | Navigation |
| 108 Merch (Training) | `https://108merch.com/collections/training` | Navigation, Shop |
| BP Vest Product | `https://108merch.com/products/bp-vest` | BP Vest page |
| Bridge Athletic App | `https://apps.apple.com/app/bridge-athletic` | Shop, Waterbag Training, App Showcase |

---

### 10.5 Page-by-Page CTA Breakdown

#### Homepage (`/`)
| CTA | Destination | Type |
|-----|-------------|------|
| Find Your Path (Nav) | `#find-your-path` | Scroll anchor |
| Find Your Path (Sticky) | `#find-your-path` | Scroll anchor |
| Book Your Experience | `/programs/experience` | Internal |
| See All Athletes | `/athletes` | Internal |

#### Ballengee Partner Page (`/ballengee`)
| CTA | Destination | Type |
|-----|-------------|------|
| Contact Pro Team | `mailto:pro@108performance.com?subject=Ballengee%20Client%20-%20Path%20[X]%20Inquiry` | Email |
| Call Direct | `tel:+18652535060` | Phone |
| Schedule Evaluation | `mailto:pro@108performance.com?subject=Ballengee%20108%20Experience%20Inquiry` | Email |

#### NIL Page (`/nil`)
| CTA | Destination | Type |
|-----|-------------|------|
| Apply Now | `mailto:nil@108performance.com?subject=NIL%20Application` | Email |
| Talk to 108 | `mailto:nil@108performance.com` | Email |
| See all 64+ athletes | `/athletes` | Internal |

#### Investors Page (`/investors`)
| CTA | Destination | Type |
|-----|-------------|------|
| Contact Will Marshall | `mailto:will@108performance.com` | Email |
| Request Investor Deck | `#request-deck` | Form anchor |

#### Shop Pages (`/shop`, `/shop/bp-vest`, `/shop/waterbag-training`)
| CTA | Destination | Type |
|-----|-------------|------|
| Order BP Vest | `https://108merch.com/products/bp-vest` | External |
| Download App | `https://apps.apple.com/app/bridge-athletic` | External |
| Team Training Inquiry | `mailto:info@108performance.com?subject=Team%20Training%20Inquiry` | Email |

#### Program Pages (All)
| CTA | Destination | Type |
|-----|-------------|------|
| The 108 Experience | `/programs/experience` | Internal |
| (Various program links) | `/programs/[program]` | Internal |

#### Footer (Global)
| CTA | Destination | Type |
|-----|-------------|------|
| Contact | `mailto:info@108performanceacademy.com` | Email |
| All social links | See Section 10.3 | External |
| Privacy | `#privacy` | Anchor (no page) |
| Terms | `#terms` | Anchor (no page) |

---

### 10.6 GHL Integration Opportunities

**High-Priority Email Capture Points:**
1. FindYourPath questionnaire completion → Capture recommendation + contact
2. Ballengee pathway finder completion → Capture pathway + tier + contact
3. NIL application clicks → Capture before mailto redirect
4. Investor deck requests → Form submission

**Mailto Replacement Candidates:**
Replace these mailto links with GHL forms for better lead capture:
- `info@108performanceacademy.com` → General inquiry form
- `nil@108performance.com` → NIL application form
- `pro@108performance.com` → Pro Experience inquiry form

**Click Tracking:**
Track clicks on:
- All "Book Experience" CTAs
- External Shopify links (108merch.com)
- App Store links (Bridge Athletic)
- Social media links

---

## Contact

**Technical Questions:** Contact the development team
**GHL Questions:** Contact your GHL consultant
**Business Logic:** Contact 108 Performance team

---

*This document is for internal use by the GHL integration consultant. Do not distribute externally.*
