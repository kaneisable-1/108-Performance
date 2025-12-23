
import React from 'react';

interface HeroProps {
  onExperienceClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExperienceClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white text-navy-950">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80')",
            opacity: 0.1,
            filter: 'grayscale(100%) contrast(110%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display text-8xl md:text-[10rem] lg:text-[12rem] leading-none uppercase text-navy-950 mb-4 tracking-tighter">
            The door <br/>is open.
          </h1>
          <p className="max-w-xl mx-auto text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
            A training facility. A place people stay.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={onExperienceClick}
              className="bg-navy-950 hover:bg-brand-blue text-white text-xs font-black uppercase tracking-[0.3em] px-12 py-6 rounded-none skew-btn transition-all duration-300 shadow-xl"
            >
              <div className="skew-inner">Come Inside</div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] animate-pulse">
        Scroll to enter
      </div>
    </section>
  );
};

export default Hero;
