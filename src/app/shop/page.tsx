'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { SHOP, BRAND } from '@/data/services';

export default function Shop() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-black min-h-screen">
        {/* Hero */}
        <section className="py-20 px-6 text-center border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-white/50 uppercase tracking-widest mb-4">
              108 Merch
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gear that works.
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Training gear, apparel, and resources built for athletes who take their craft seriously.
            </p>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter (visual only for now) */}
            <div className="flex justify-center gap-4 mb-12">
              <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Apparel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Hats
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Training
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                Books
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SHOP.featured.map((product, index) => (
                <motion.a
                  key={product.id}
                  href={product.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group block"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-white/5 rounded-lg overflow-hidden mb-4 group-hover:bg-white/10 transition-colors">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Tag */}
                    {'tag' in product && product.tag && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${
                          product.tag === 'Best Seller'
                            ? 'bg-white text-black'
                            : product.tag === 'Limited'
                            ? 'bg-red-500 text-white'
                            : 'bg-white/20 text-white'
                        }`}>
                          {product.tag}
                        </span>
                      </div>
                    )}

                    {/* Hover Arrow */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <svg className="w-5 h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Shop All CTA */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              See the full collection.
            </h2>
            <p className="text-white/60 mb-8">
              More gear, more sizes, more options at the 108 store.
            </p>
            <a
              href={SHOP.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Shop All at 108merch.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* 108 Software App */}
        <section className="py-20 px-6 bg-white/5 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-white/50 uppercase tracking-widest mb-4">
                  108 Software
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your training. Your pocket.
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed">
                  The 108 Performance app delivers personalized training programs with video guidance,
                  rep tracking, and progress analytics. Three training modes designed for every phase of your development.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/[0.05] rounded-lg p-4 text-center">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Mode</p>
                    <p className="font-semibold text-white">Game Specific</p>
                  </div>
                  <div className="bg-white/[0.05] rounded-lg p-4 text-center">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Mode</p>
                    <p className="font-semibold text-white">Anchored</p>
                  </div>
                  <div className="bg-white/[0.05] rounded-lg p-4 text-center">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Mode</p>
                    <p className="font-semibold text-white">Dynamic</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/app/bridge-athletic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href="/programs/virtual"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <p className="text-sm text-white/40 mt-4">
                  $50/month subscription • Included with Virtual programs
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  src="/products/bridge-athletic/three-phones.png"
                  alt="108 Performance App - Game Specific, Anchored, and Dynamic Training Modes"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Gear Callout */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-4">
                  Pro Training Gear
                </p>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Train like the pros.
                </h2>
                <p className="text-white/60 mb-6">
                  The same equipment and programming used by professional athletes at 108.
                  Waterbag programming, anchor bands, and training tools that actually transfer.
                </p>
                <a
                  href="https://108merch.com/collections/training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
                >
                  View Training Collection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="bg-white/5 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-6xl font-bold text-white/10">108</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
