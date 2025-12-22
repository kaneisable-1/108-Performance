
import React from 'react';

interface HeroProps {
  onExperienceClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExperienceClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900 text-white pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOnwYfUQ5va_bbbCmA5VZkB7cPtuDLETC6HFIiWxfDNyean6KHgj3zWYEQkpVKuLvuwgnpS_kGnG9HUQWHdtfJZiW3nMKzaGxjsCFUPVb12S292TP--lqLM-tbhYnBsKI_tgYjoX95n9-ghmUCYrp_RKY12oojiNXnD9ERhhRpL49ofyO2rhUakbUkYDs5cQzO8eWwaij6wDeM4hVb8LSuWfSX7RO3dB-sQwQj_86Nvpx3v7V1lAelR9raGDs7VydZY7S6gGX5qBid')",
            opacity: 0.25,
            filter: 'grayscale(100%) contrast(125%)',
            mixBlendMode: 'luminosity'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-block w-12 h-1 bg-brand-primary"></span>
            <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
              Master Service Offerings Guide
            </p>
          </div>
          <h1 className="font-display text-7xl sm:text-8xl lg:text-[7rem] leading-[0.9] uppercase text-white mb-6 drop-shadow-2xl">
            When you <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Feel It,</span><br/>
            You'll Know.
          </h1>
          <p className="max-w-xl text-lg text-gray-400 font-medium leading-relaxed mb-10 pl-1">
            We build athletes differently. Combining data-driven biomechanics with elite coaching to unlock raw power.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <button 
              onClick={onExperienceClick}
              className="bg-white hover:bg-gray-200 text-navy-950 text-sm font-black uppercase tracking-widest px-10 py-4 rounded-none skew-btn transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white group"
            >
              <div className="skew-inner">Experience 108</div>
            </button>
            <button className="text-white hover:text-brand-primary font-bold uppercase tracking-widest px-6 py-4 flex items-center gap-3 group transition-colors">
              Watch Film <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative h-[600px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute right-0 top-10 font-display text-[12rem] leading-none text-white/5 select-none pointer-events-none z-0">
            108
          </div>
          <div className="absolute top-0 right-10 w-64 h-80 bg-gray-800 border-4 border-white overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
            <img 
              alt="Athlete focus" 
              className="w-full h-full object-cover filter grayscale contrast-125" 
              src="https://picsum.photos/seed/athlete/600/800"
            />
            <div className="absolute bottom-0 left-0 w-full bg-navy-900/90 p-3">
              <p className="text-white font-display text-2xl uppercase tracking-wider">Drafted</p>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 w-56 h-64 bg-white p-2 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
            <div className="w-full h-full bg-navy-950 flex flex-col items-center justify-center border border-gray-200 relative overflow-hidden">
              <span className="material-symbols-outlined text-brand-primary text-6xl mb-2">bolt</span>
              <span className="font-display text-4xl text-white uppercase tracking-tighter">108</span>
              <span className="font-mono text-xs text-gray-400 mt-2 uppercase">Lab Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
