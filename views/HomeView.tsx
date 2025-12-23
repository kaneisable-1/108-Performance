
import React, { useState } from 'react';
import Hero from '../components/Hero';
import LabStats from '../components/LabStats';
import StandardGrid from '../components/StandardGrid';
import PrecisionBanner from '../components/PrecisionBanner';
import CTA from '../components/CTA';
import WeeklyDoseCarousel, { DoseItem } from '../components/WeeklyDoseCarousel';
import { ViewState } from '../App';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const doseItems: DoseItem[] = [
    {
      id: '1',
      title: 'The Kinetic Link: Ground Up Power',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Technical Breakdown',
      featured: true
    },
    {
      id: '2',
      title: 'Softball Pitching: Horizontal Movement Secrets',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Skill Drill'
    },
    {
      id: '3',
      title: 'Nervous System Training for Elite Reaction',
      thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Human Performance'
    },
    {
      id: '4',
      title: 'Inside the Lab: 102.4 MPH Exit Velo Study',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Data Insight'
    },
    {
      id: '5',
      title: 'Mental Resilience: Staying for the Couch',
      thumbnailUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Culture'
    },
    {
      id: '6',
      title: 'Biomechanics of the 108 Hitting System',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'The Method',
      featured: true
    },
    {
      id: '7',
      title: 'Winter Fly-In Recap: 2025 Elite Class',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
      href: '#',
      subtitle: 'Community'
    }
  ];

  return (
    <div className="bg-surface-black text-text-white">
      <Hero onExperienceClick={() => onNavigate('experience')} />
      
      {/* Narrative Carousel: Directly under Hero */}
      <WeeklyDoseCarousel 
        items={doseItems}
        onSelect={(item) => console.log('Selected:', item.title)}
        onViewAll={() => onNavigate('collective')}
        className="py-16 border-b border-border-soft"
      />

      {/* The Paradox */}
      <section className="py-40 bg-surface-black border-b border-border-soft">
        <div className="max-w-4xl mx-auto px-[clamp(16px,5vw,32px)] text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-10 leading-[0.9]">
            People come for the work. <br/>
            <span className="text-text-muted">They stay for something else.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted font-medium leading-relaxed">
            Athletes train here for hours. Then they sit on the couch for hours more—watching film, talking, helping each other figure things out. They don't have to be here. They choose to stay.
          </p>
        </div>
      </section>

      <LabStats />

      {/* The Work */}
      <section className="py-40 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 font-display text-[20vw] opacity-[0.03] pointer-events-none italic tracking-tighter select-none">WORK</div>
        <div className="max-w-7xl mx-auto px-[clamp(16px,5vw,32px)] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-6xl uppercase mb-8">The work is serious.</h2>
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              This isn't a club. It's training that produces results. PRs. Velocity. The breakthrough moment when something finally clicks. The couch comes after the PR.
            </p>
            <button 
              onClick={() => onNavigate('method')}
              className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-white pb-2 hover:opacity-70 transition-all group"
            >
              See The Method <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div className="aspect-video bg-black border border-border-soft relative group shadow-card rounded-card overflow-hidden">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/msr5l1pstyc/maxresdefault.jpg" 
                  alt="The Work Video Thumbnail" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-bloomFeatured">
                    <span className="material-symbols-outlined text-6xl text-white opacity-60 group-hover:opacity-100 transition-opacity pl-1">play_arrow</span>
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                className="w-full h-full relative z-0"
                src="https://www.youtube.com/embed/msr5l1pstyc?autoplay=1&modestbranding=1&rel=0" 
                title="108 Performance - The Work" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>

      <PrecisionBanner />
      <StandardGrid />

      {/* Human. Athlete. Player. */}
      <section className="py-40 bg-surface-black">
        <div className="max-w-7xl mx-auto px-[clamp(16px,5vw,32px)]">
          <div className="mb-24">
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 text-white">Human.<br/>Athlete. Player.</h2>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed font-medium">
              Most programs start with your sport. We start with you. How do you think? How do you learn? What cues already work? We understand you before we instruct you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: 'The Human', d: 'Your nervous system is the foundation. How do you process information?' },
              { t: 'The Athlete', d: 'We study your natural patterns—not a textbook model. Physics over tradition.' },
              { t: 'The Player', d: 'Connecting the dots. Skills that show up on game day are built on the layers beneath.' }
            ].map(item => (
              <div key={item.t} className="border-t border-border-soft pt-10 group">
                <h4 className="font-display text-3xl uppercase mb-6 text-white group-hover:text-text-muted transition-colors">{item.t}</h4>
                <p className="text-text-muted font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA onExperienceClick={() => onNavigate('experience')} />
    </div>
  );
};

export default HomeView;
