
import React, { useRef } from 'react';

export type DoseItem = {
  id: string;
  title: string;
  thumbnailUrl: string;
  href: string;
  subtitle?: string;
  featured?: boolean;
};

type Props = {
  items: DoseItem[];
  onSelect?: (item: DoseItem) => void;
  onViewAll?: () => void;
  className?: string;
};

export default function WeeklyDoseCarousel({ items, onSelect, onViewAll, className = '' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>('[data-card]');
    const w = card ? card.offsetWidth : 280;
    el.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' });
  };

  return (
    <section aria-label="Latest content" className={`w-full bg-surface-black text-text-white ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-[clamp(16px,5vw,32px)] pt-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight uppercase font-display">Weekly Dose</h2>
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-button bg-transparent hover:bg-white/10 text-white border border-border-soft transition-colors focus:outline-none focus:ring-2 focus:ring-white text-xs font-black uppercase tracking-widest"
          aria-label="View all content"
        >
          View All <span aria-hidden>→</span>
        </button>
      </div>

      <div className="relative mt-6">
        {/* Prev / Next Controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center">
          <button
            type="button"
            onClick={() => scrollByCard('prev')}
            className="pointer-events-auto ml-2 sm:ml-4 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/10 border border-white/20 p-3 transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-white">chevron_left</span>
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center">
          <button
            type="button"
            onClick={() => scrollByCard('next')}
            className="pointer-events-auto mr-2 sm:mr-4 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/10 border border-white/20 p-3 transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-white">chevron_right</span>
          </button>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          role="list"
          className="overflow-x-auto scroll-smooth px-[clamp(16px,5vw,32px)] pb-12 flex gap-6 snap-x snap-mandatory no-scrollbar"
        >
          {items.map((item) => {
            const borderClass = item.featured ? 'border-border-strong' : 'border-border-soft';
            const shadowStyle = item.featured ? 'shadow-bloomFeatured' : 'shadow-card';

            return (
              <div 
                key={item.id} 
                role="listitem" 
                data-card 
                tabIndex={0}
                className={`group snap-start min-w-[240px] sm:min-w-[280px] max-w-[75%] sm:max-w-[320px]
                            rounded-card bg-surface-black border ${borderClass}
                            ${shadowStyle} transition-all duration-200 ease-premium
                            hover:-translate-y-1 hover:shadow-bloomHover focus:outline-none focus:ring-2 focus:ring-white cursor-pointer`}
                aria-label={`${item.title}${item.featured ? ' (featured)' : ''}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(item); }
                  if (e.key === 'ArrowRight') scrollByCard('next');
                  if (e.key === 'ArrowLeft') scrollByCard('prev');
                }}
                onClick={() => onSelect?.(item)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden rounded-t-card">
                  <img 
                    src={item.thumbnailUrl} 
                    alt={`${item.title} thumbnail`} 
                    className="h-full w-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />
                  {/* Play badge */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-button bg-black/60 text-white border border-white/10 backdrop-blur-md">
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.subtitle || 'Watch'}</span>
                  </div>
                </div>
                {/* Copy */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight leading-tight">{item.title}</h3>
                    {item.featured && (
                      <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] border border-white/20 px-1.5 py-0.5 rounded">Featured</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
