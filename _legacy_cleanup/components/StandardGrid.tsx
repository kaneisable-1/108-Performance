
import React from 'react';

const StandardGrid: React.FC = () => {
  return (
    <section className="py-24 bg-offwhite border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="font-display text-4xl md:text-5xl uppercase text-navy-950 mb-2">The 108 Standard</h3>
            <p className="text-gray-500 text-lg font-medium tracking-wide">Precision training designed for the elite.</p>
          </div>
          <a className="hidden md:flex items-center gap-2 text-navy-950 font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors" href="#">
            View All Services <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 01 */}
          <div className="group bg-white p-10 rounded-none border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-offwhite rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-primary/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-brand-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-brand-primary text-3xl group-hover:text-white transition-colors">speed</span>
              </div>
              <h4 className="font-display text-3xl uppercase text-navy-950 mb-4">Dramatic<br/>Results. Fast.</h4>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                Accelerate your development cycle. Our proprietary methods strip away inefficiencies to get you game-ready sooner.
              </p>
            </div>
            <div className="relative z-10 flex justify-between items-end border-t border-gray-100 pt-6">
              <span className="text-xs font-black text-gray-300 group-hover:text-brand-primary transition-colors">01</span>
              <button className="text-navy-950 group-hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 02 - Dark */}
          <div className="group bg-navy-950 text-white p-10 rounded-none shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/30 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-brand-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-3xl">ecg_heart</span>
              </div>
              <h4 className="font-display text-3xl uppercase text-white mb-4">Play Without<br/>Pain.</h4>
              <p className="text-gray-400 leading-relaxed font-medium text-sm">
                Longevity is the ultimate performance metric. We optimize your biomechanics to keep you healthy and dominating.
              </p>
            </div>
            <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
              <span className="text-xs font-black text-gray-500 group-hover:text-white transition-colors">02</span>
              <button className="text-white group-hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 03 */}
          <div className="group bg-white p-10 rounded-none border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[28rem] justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-offwhite rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-primary/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-brand-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-brand-primary text-3xl group-hover:text-white transition-colors">monitoring</span>
              </div>
              <h4 className="font-display text-3xl uppercase text-navy-950 mb-4">Data-Driven<br/>Approach.</h4>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                Every movement measured, every metric optimized. We turn data into actionable insights for your specific physiology.
              </p>
            </div>
            <div className="relative z-10 flex justify-between items-end border-t border-gray-100 pt-6">
              <span className="text-xs font-black text-gray-300 group-hover:text-brand-primary transition-colors">03</span>
              <button className="text-navy-950 group-hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardGrid;
