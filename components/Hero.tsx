
import React from 'react';

interface HeroProps {
  onExperienceClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExperienceClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-black text-text-white">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80')",
            opacity: 0.1,
            filter: 'grayscale(100%) contrast(120%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-black/60 to-surface-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(16px,5vw,32px)] text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block font-display text-4xl italic tracking-tighter mb-8 text-white opacity-40 border-b border-white/20 pb-2">108</div>
          <h1 className="font-display text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] uppercase text-white mb-6 tracking-tighter shadow-bloomFeatured">
            The door <br/>is open.
          </h1>
          <p className="max-w-xl mx-auto text-xl md:text-2xl text-text-muted font-medium leading-relaxed mb-16">
            A training facility. A place people stay.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={onExperienceClick}
              className="bg-white hover:bg-white/90 text-black text-xs font-black uppercase tracking-[0.3em] px-16 py-8 rounded-button transition-all duration-500 shadow-card hover:shadow-bloomHover group"
            >
              <div className="flex items-center gap-3">
                Come Inside
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.5em] animate-pulse">
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
