'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const usageMethods = [
  {
    title: 'Assist & Resist',
    description: 'Use the vest to pull the hitter forward to fix "stuck" mechanics or resist the turn to force better posture.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16h16M8 16l4-4M8 16l4 4M24 16l-4-4M24 16l-4 4" />
      </svg>
    ),
  },
  {
    title: 'Contrast Training',
    description: 'Alternate between the vest and regular swings to bypass the brain\'s automaticity and help new patterns "click and stick".',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="16" r="6" />
        <circle cx="22" cy="16" r="6" />
        <path d="M16 10v12" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: 'Bracing',
    description: 'Train "kime" or instantaneous tensing at the correct moment, helping the hitter compress the cork of the ball without "muscling up" early.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="16" height="16" rx="2" />
        <path d="M12 16h8M16 12v8" />
      </svg>
    ),
  },
];

const pricingTiers = [
  {
    name: 'Individual BP Vest',
    price: '$499',
    description: 'The standalone vest for serious athletes.',
    features: [
      '108 BP Vest',
      'Usage guide & drill library access',
      'Adjustable resistance system',
      'Fits all body types',
    ],
    cta: 'Order Vest',
    href: 'https://108merch.com/products/bp-vest',
    highlight: false,
  },
  {
    name: '108 Complete Product Pack',
    price: '$450',
    description: 'The full arsenal. Included with all training programs.',
    features: [
      '108 BP Vest',
      '108 Waterbag',
      '108 Waterball',
      '108 Bulgarian Bag',
      'Complete drill library',
    ],
    cta: 'Get the Pack',
    href: '/shop/waterbag-training',
    highlight: true,
  },
  {
    name: 'Team Pack',
    price: '$1,700',
    description: 'For high school and college programs.',
    features: [
      '2 BP Vests',
      '6 Waterbags',
      '2 Waterballs',
      '2 Bulgarian Bags',
      '1 year digital programming',
    ],
    cta: 'Contact for Teams',
    href: '/programs/powered-by-108',
    highlight: false,
  },
];

export default function BPVestPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section with Eric Haas */}
        <section className="relative bg-black text-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
                >
                  108 BP Vest
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
                >
                  Unleash.<br />
                  Ignite.<br />
                  <span className="text-white/40">Dominate.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl text-white/60 max-w-lg mb-8"
                >
                  Train the upper body to deliver force with direction. Turn your body into a brick wall at impact.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex gap-8 mb-10"
                >
                  <div>
                    <p className="text-3xl font-black">+14 MPH</p>
                    <p className="text-xs text-white/40">Exit Velo Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">2X</p>
                    <p className="text-xs text-white/40">GRF Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">-38%</p>
                    <p className="text-xs text-white/40">Elbow Torque</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <a
                    href="https://108merch.com/products/bp-vest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Order the BP Vest — $499
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative aspect-[4/5] lg:aspect-square"
              >
                <Image
                  src="/shop/bp-vest-hero.jpg"
                  alt="Eric Haas, MLB Catcher, training with the 108 BP Vest"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-2">
                  <p className="text-xs text-white/70">Eric Haas</p>
                  <p className="text-[10px] text-white/40">MLB Catcher</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">See It In Action</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                The BP Vest in the lab.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-black border border-gray-200 overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1096281571?title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="108 BP Vest Training"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Your Body is a Cannon - Philosophy with Stats */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Design Intent</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  Your body is a cannon.
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Most coaching focuses on the "ground up." We train from the middle out to capture energy.
                </p>
                <p className="text-white/50 leading-relaxed mb-8">
                  The 108 BP Vest was designed because traditional tools only anchored the pelvis, ignoring the trunk's role in rotational deceleration. By vesting the upper body, we force the stem to learn how to recruit and deliver force with direction, preventing energy leaks caused by early trunk rotation.
                </p>
                <div className="border-l-2 border-white/20 pl-6">
                  <p className="text-white/70 italic">
                    "Using the BP Vest is like anchoring a cannon to a stable deck instead of firing it from a canoe. The vest teaches you to slam on the brakes so your barrel can finally win the race."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">Lab-Proven Results</p>
                <div className="space-y-10">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-black">14</span>
                      <span className="text-2xl font-black text-white/40">MPH</span>
                    </div>
                    <p className="text-white/50">Maximum increase in exit velocity recorded by MLB players using the vest.</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-black">2X</span>
                    </div>
                    <p className="text-white/50">Increase in lead-leg Ground Reaction Force (GRF) when the torso is anchored.</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-black">38%</span>
                    </div>
                    <p className="text-white/50">Decrease in elbow torque achieved when sequencing is corrected through trunk-focused cues.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Usage Methods */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">How To Use</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Feed the mistake.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {usageMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8"
                >
                  <div className="text-black/20 mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Get Equipped</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Choose your path.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 ${
                    tier.highlight
                      ? 'bg-black text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                        Best Value
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-black mb-1">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-black">{tier.price}</span>
                  </div>
                  <p className={`text-sm mb-4 ${tier.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            tier.highlight ? 'text-white' : 'text-black'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${tier.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {tier.href.startsWith('http') ? (
                    <a
                      href={tier.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 font-bold uppercase tracking-wider text-sm text-center transition-colors ${
                        tier.highlight
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-black text-white hover:bg-gray-900'
                      }`}
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <Link
                      href={tier.href}
                      className={`block w-full py-3 font-bold uppercase tracking-wider text-sm text-center transition-colors ${
                        tier.highlight
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-black text-white hover:bg-gray-900'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                Reputation Above Profit
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Results that transfer.
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Built for the Greyhound, not the Bulldog. Efficient movement is the only path to healthy velocity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://108merch.com/products/bp-vest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-black px-10 py-5 font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Order Now — $499
                </a>
                <Link
                  href="/the-method"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  View The Method
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
