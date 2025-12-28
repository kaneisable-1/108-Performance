'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PRODUCTS,
  PRODUCT_PACKS,
  DIGITAL_TOOLS,
  getProductsFromPack,
  getBridgeAppPricingText,
  getZoomTypeText,
} from '@/data/product-bundles';

// ============================================================================
// ICON COMPONENTS
// ============================================================================

function WaterbagIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="16" ry="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24c0 5.523 7.163 10 16 10s16-4.477 16-10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 18c0 2 5.373 4 12 4s12-2 12-4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="18" cy="22" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="30" cy="22" r="2" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

function WaterballIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="14" ry="5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M24 10v28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function BulgarianBagIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 12c-4 0-6 4-6 10s4 14 14 14 14-8 14-14-2-10-6-10" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12c0-3 3-4 8-4s8 1 8 4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 26c4 2 12 2 20 0" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

function VestIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10L10 16v20l6 4h16l6-4V16l-6-6" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10c0 4 3 6 8 6s8-2 8-6" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="16" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="20" cy="24" r="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="28" cy="24" r="2" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

function MerchIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16L8 20v18h32V20l-4-4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16c0-4 5-6 12-6s12 2 12 6" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="22" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="24" y="30" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">108</text>
    </svg>
  );
}

function AppIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="16" y="10" width="16" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="24" cy="38" r="2" fill="currentColor" fillOpacity="0.5" />
      <path d="M20 16h8M20 20h8M20 24h5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  );
}

function BoxIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16l18-8 18 8v20l-18 8-18-8V16z" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16l18 8 18-8M24 24v20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

// Map product icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  waterbag: WaterbagIcon,
  waterball: WaterballIcon,
  bulgarian: BulgarianBagIcon,
  vest: VestIcon,
  merch: MerchIcon,
  app: AppIcon,
  box: BoxIcon,
};

// ============================================================================
// PRODUCT PACK DISPLAY COMPONENT
// ============================================================================

interface ProductPackDisplayProps {
  packId: string;
  showMerchKit?: boolean;
  showBridgeApp?: boolean;
  bridgeAppPricing?: 'included' | 'first-month-free' | 'paid';
  variant?: 'light' | 'dark';
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export function ProductPackDisplay({
  packId,
  showMerchKit = true,
  showBridgeApp = true,
  bridgeAppPricing = 'included',
  variant = 'light',
  compact = false,
  title,
  subtitle,
}: ProductPackDisplayProps) {
  const pack = PRODUCT_PACKS[packId];
  const products = getProductsFromPack(packId);
  const bridgeApp = DIGITAL_TOOLS.bridgeApp;

  if (!pack) return null;

  const isDark = variant === 'dark';

  return (
    <div className={compact ? '' : 'py-12'}>
      {(title || pack.name) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${compact ? 'mb-6' : 'mb-8'}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 ${isDark ? 'bg-white/10' : 'bg-black/5'} rounded-xl flex items-center justify-center`}>
              <BoxIcon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {title || pack.name}
              </h3>
              {pack.value && (
                <span className={`text-xs ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  {pack.value}
                </span>
              )}
            </div>
          </div>
          {subtitle && (
            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      <div className={`grid ${compact ? 'grid-cols-2 gap-3' : 'md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
        {/* Product Items */}
        {products.map((product, index) => {
          const IconComponent = ICON_MAP[product.icon] || BoxIcon;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${isDark ? 'bg-white/[0.05] border-white/10' : 'bg-gray-50 border-gray-100'} border rounded-xl p-4`}
            >
              <div className={`w-12 h-12 ${isDark ? 'bg-white/10' : 'bg-white'} rounded-lg flex items-center justify-center mb-3 ${!isDark && 'shadow-sm'}`}>
                <IconComponent className={`w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`} />
              </div>
              <h4 className={`font-bold ${compact ? 'text-sm' : ''} ${isDark ? 'text-white' : 'text-black'}`}>
                {product.name}
              </h4>
              {!compact && (
                <p className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                  {product.description}
                </p>
              )}
            </motion.div>
          );
        })}

        {/* Merch Kit */}
        {showMerchKit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: products.length * 0.1 }}
            className={`${isDark ? 'bg-white/[0.05] border-white/10' : 'bg-gray-50 border-gray-100'} border rounded-xl p-4`}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-white/10' : 'bg-white'} rounded-lg flex items-center justify-center mb-3 ${!isDark && 'shadow-sm'}`}>
              <MerchIcon className={`w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`} />
            </div>
            <h4 className={`font-bold ${compact ? 'text-sm' : ''} ${isDark ? 'text-white' : 'text-black'}`}>
              {PRODUCTS.merchKit.name}
            </h4>
            {!compact && (
              <p className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {PRODUCTS.merchKit.description}
              </p>
            )}
          </motion.div>
        )}

        {/* Bridge App */}
        {showBridgeApp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (products.length + (showMerchKit ? 1 : 0)) * 0.1 }}
            className={`${isDark ? 'bg-white/[0.05] border-white/10' : 'bg-gray-50 border-gray-100'} border rounded-xl p-4`}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-white/10' : 'bg-white'} rounded-lg flex items-center justify-center mb-3 ${!isDark && 'shadow-sm'}`}>
              <AppIcon className={`w-7 h-7 ${isDark ? 'text-white' : 'text-black'}`} />
            </div>
            <h4 className={`font-bold ${compact ? 'text-sm' : ''} ${isDark ? 'text-white' : 'text-black'}`}>
              {bridgeApp.name}
            </h4>
            {!compact && (
              <>
                <p className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                  {bridgeApp.description}
                </p>
                <p className={`text-xs mt-2 font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  {getBridgeAppPricingText(bridgeAppPricing)}
                </p>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// WHAT YOU RECEIVE SECTION - Full Section Component
// ============================================================================

interface WhatYouReceiveProps {
  packId: string;
  showMerchKit?: boolean;
  showBridgeApp?: boolean;
  bridgeAppPricing?: 'included' | 'first-month-free' | 'paid';
  additionalDigital?: Array<{
    title: string;
    description: string;
    icon?: 'app' | 'video' | 'chat' | 'zoom';
  }>;
  variant?: 'light' | 'dark';
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export function WhatYouReceiveSection({
  packId,
  showMerchKit = true,
  showBridgeApp = true,
  bridgeAppPricing = 'included',
  additionalDigital = [],
  variant = 'light',
  sectionTitle = 'What You Receive',
  sectionSubtitle,
}: WhatYouReceiveProps) {
  const isDark = variant === 'dark';
  const pack = PRODUCT_PACKS[packId];

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-white/40' : 'text-gray-400'} mb-4`}>
            {sectionTitle}
          </p>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
            Everything you need to<br />
            <span className={isDark ? 'text-white/40' : 'text-gray-300'}>start training.</span>
          </h2>
          {sectionSubtitle && (
            <p className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              {sectionSubtitle}
            </p>
          )}
        </motion.div>

        <ProductPackDisplay
          packId={packId}
          showMerchKit={showMerchKit}
          showBridgeApp={showBridgeApp}
          bridgeAppPricing={bridgeAppPricing}
          variant={variant}
          title={pack?.name}
          subtitle={pack?.tagline}
        />

        {/* Bridge App Image */}
        {showBridgeApp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className={`text-sm ${isDark ? 'text-white/40' : 'text-gray-400'} mb-6`}>
              All training delivered through the Bridge Athletic app
            </p>
            <Image
              src="/products/bridge-athletic/three-phones.png"
              alt="Bridge Athletic App - Your Performance OS"
              width={800}
              height={500}
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// COMPACT EQUIPMENT LIST - For sidebars or smaller sections
// ============================================================================

interface EquipmentListProps {
  packId: string;
  showMerchKit?: boolean;
  showBridgeApp?: boolean;
  bridgeAppPricing?: 'included' | 'first-month-free' | 'paid';
  variant?: 'light' | 'dark';
  title?: string;
}

export function EquipmentList({
  packId,
  showMerchKit = true,
  showBridgeApp = true,
  bridgeAppPricing = 'included',
  variant = 'light',
  title = 'Equipment Included',
}: EquipmentListProps) {
  const products = getProductsFromPack(packId);
  const isDark = variant === 'dark';

  return (
    <div className={`${isDark ? 'bg-white/[0.05] border-white/10' : 'bg-gray-50 border-gray-100'} border rounded-xl p-6`}>
      <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <CheckIcon className={`w-3 h-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <span className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              {product.name}
            </span>
          </li>
        ))}
        {showMerchKit && (
          <li className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <CheckIcon className={`w-3 h-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <span className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              {PRODUCTS.merchKit.name}
            </span>
          </li>
        )}
        {showBridgeApp && (
          <li className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
              <CheckIcon className={`w-3 h-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <div className="flex-1">
              <span className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                {DIGITAL_TOOLS.bridgeApp.name}
              </span>
              <span className={`text-xs block ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {getBridgeAppPricingText(bridgeAppPricing)}
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

// ============================================================================
// PREREQUISITE BANNER - Shows equipment requirement
// ============================================================================

interface PrerequisiteBannerProps {
  variant?: 'light' | 'dark';
  showEquipmentNote?: boolean;
}

export function PrerequisiteBanner({
  variant = 'light',
  showEquipmentNote = true,
}: PrerequisiteBannerProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-6 ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-gray-100 border-gray-200'} border-y`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              <strong className={isDark ? 'text-white' : 'text-black'}>Prerequisite:</strong> Must complete The 108 Experience first.
            </p>
            {showEquipmentNote && (
              <p className={`text-xs mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                Uses equipment from your 108 Experience (108 Complete Product Pack + Merch Kit)
              </p>
            )}
          </div>
          <a
            href="/programs/experience"
            className={`text-sm font-semibold underline hover:no-underline ${isDark ? 'text-white' : 'text-black'}`}
          >
            Learn about The 108 Experience →
          </a>
        </div>
      </div>
    </section>
  );
}
