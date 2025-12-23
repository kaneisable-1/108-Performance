
import React from 'react';
import Hero from '../components/Hero';
import { ViewState } from '../App';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onExperienceClick={() => onNavigate('experience')} />
      
      {/* The Paradox */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-navy-950 mb-10 leading-[0.9]">
            People come for the work. <br/>
            <span className="text-gray-400">They stay for something else.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
            Athletes train here for hours. Then they sit on the couch for hours more—watching film, talking, helping each other figure things out. They don't have to be here. They choose to stay.
          </p>
        </div>
      </section>

      {/* The Work */}
      <section className="py-32 bg-navy-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 font-display text-[20vw] opacity-[0.02] pointer-events-none">WORK</div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-6xl uppercase mb-8">The work is serious.</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              This isn't a club. It's training that produces results. PRs. Velocity. The breakthrough moment when something finally clicks. The couch comes after the PR.
            </p>
            <button 
              onClick={() => onNavigate('method')}
              className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-brand-primary pb-2 hover:text-brand-primary transition-all"
            >
              See The Method →
            </button>
          </div>
          <div className="aspect-video bg-navy-900 border border-white/10 relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" alt="The Work" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-white opacity-50 group-hover:opacity-100 transition-opacity">play_circle</span>
             </div>
          </div>
        </div>
      </section>

      {/* Human. Athlete. Player. */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-6">Human.<br/>Athlete. Player.</h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Most programs start with your sport. We start with you. How do you think? How do you learn? What cues already work? We understand you before we instruct you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: 'The Human', d: 'Your nervous system is the foundation. How do you process information?' },
              { t: 'The Athlete', d: 'We study your natural patterns—not a textbook model. Physics over tradition.' },
              { t: 'The Player', d: 'Connecting the dots. Skills that show up on game day are built on the layers beneath.' }
            ].map(item => (
              <div key={item.t} className="border-t-2 border-navy-950 pt-8">
                <h4 className="font-display text-2xl uppercase mb-4">{item.t}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Staying */}
      <section className="relative min-h-[80vh] bg-navy-900 flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-20 grayscale" alt="The Staying" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-7xl uppercase mb-8">The staying is the proof.</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              You don't have to leave when you're done. Most people don't. They watch film. They talk. They sit on the couch and argue about last night's game. This is what happened when we built a place where people actually want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Your Path */}
      <section className="py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-6xl uppercase mb-16 text-center">Your path.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'The 108 Experience', d: 'The beginning. 2-5 days in person.', view: 'experience' as ViewState },
              { t: 'Ongoing Training', d: 'Local and remote membership options.', view: 'services' as ViewState },
              { t: 'For Coaches', d: 'The Collective Mentorship pathway.', view: 'collective' as ViewState }
            ].map(item => (
              <div 
                key={item.t} 
                onClick={() => onNavigate(item.view)}
                className="bg-white p-12 group cursor-pointer border border-gray-100 hover:border-brand-primary transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <h4 className="font-display text-3xl uppercase mb-4 text-navy-950 group-hover:text-brand-primary transition-colors">{item.t}</h4>
                <p className="text-gray-500 font-medium mb-8 text-sm">{item.d}</p>
                <span className="material-symbols-outlined text-navy-950 group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">You have to feel it to believe it.</h2>
          <button 
            onClick={() => onNavigate('experience')}
            className="bg-navy-950 text-white py-6 px-16 font-black uppercase tracking-[0.4em] skew-btn hover:bg-brand-primary transition-all duration-500 shadow-3xl"
          >
            <div className="skew-inner">Experience 108</div>
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeView;
