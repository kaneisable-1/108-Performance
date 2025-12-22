
import React from 'react';

const CollectiveView: React.FC = () => {
  return (
    <div className="bg-offwhite min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fade-in-up">
            <p className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Coach & Facility Services</p>
            <h1 className="font-display text-7xl md:text-8xl text-navy-950 uppercase leading-[0.9] mb-8">
              The<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-navy-950">Collective</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              We aren't just training athletes; we're redefining how the game is coached. Join the elite network of performance facilities and mentors using the 108 methodology.
            </p>
            <div className="flex gap-4">
              <button className="bg-navy-950 text-white px-10 py-5 font-black uppercase text-xs tracking-widest skew-btn hover:bg-brand-primary transition-all">
                <div className="skew-inner">Book Mentor Visit</div>
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/coach/800/1000" className="w-full h-auto grayscale shadow-3xl" alt="Coach working" />
            <div className="absolute -bottom-10 -right-10 bg-white p-12 shadow-2xl border border-gray-100 hidden md:block">
              <span className="material-symbols-outlined text-brand-primary text-5xl mb-4">verified</span>
              <h4 className="font-display text-3xl uppercase text-navy-950">Elite Network</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">150+ Certified Facilities</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 border-t-4 border-brand-primary shadow-xl">
            <h3 className="font-display text-4xl uppercase mb-6">Mentor Experience</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Spend 2+ days shadow-coaching at 108 HQ. See the diagnostic process in real-time, learn the cues, and master the feel.</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Starting At</p>
                <p className="font-athletic text-3xl text-navy-950">$500/DAY</p>
              </div>
              <button className="text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-primary pb-1">Learn More</button>
            </div>
          </div>

          <div className="bg-navy-950 p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 font-display text-7xl opacity-5 pointer-events-none">HOST</div>
            <h3 className="font-display text-4xl uppercase mb-6">Host a Tour</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">Bring the 108 team to your facility for a weekend Tour Experience. Boost your athlete profile and network capacity.</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Athlete Price</p>
                <p className="font-athletic text-3xl text-white">$500/ATHLETE</p>
              </div>
              <button className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-white pb-1">Apply To Host</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiveView;
