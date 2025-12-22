
import React from 'react';

interface CTAProps {
  onExperienceClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onExperienceClick }) => {
  return (
    <section className="py-32 bg-navy-950 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] whitespace-nowrap text-white">
          108 PERFORMANCE
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-6 leading-none">
          Unlock Your<br/><span className="text-brand-primary">Potential</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
          Join the elite athletes redefining their limits at 108 Performance. The future of your game starts now.
        </p>
        <button 
          onClick={onExperienceClick}
          className="bg-brand-primary hover:bg-white hover:text-navy-950 text-white text-lg font-black uppercase tracking-widest px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
        >
          Experience 108
        </button>
      </div>
    </section>
  );
};

export default CTA;
