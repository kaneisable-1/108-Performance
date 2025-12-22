
import React, { useState } from 'react';

interface ExperienceViewProps {
  onBack: () => void;
}

const ExperienceView: React.FC<ExperienceViewProps> = ({ onBack }) => {
  const [step, setStep] = useState<'intro' | 'apply' | 'success'>('intro');

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <section className="relative py-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/training/1600/900')" }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase leading-none mb-4">
            The 108<br/><span className="text-brand-primary">Experience</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Knoxville Headquarters • Elite Training Diagnostic</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {step === 'intro' && (
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl uppercase mb-8">3-5 Days of Total Transformation</h2>
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>The 108 Experience is our flagship in-person training diagnostic. It's where the "feel" begins. No guessing, just precision biomechanics and hands-on coaching.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="font-bold text-navy-950 uppercase text-sm mb-2">Deep Diagnostics</h4>
                  <p className="text-sm">High-speed video capture and motion analysis to identify every leak in your kinetic chain.</p>
                </div>
                <div className="border-l-2 border-brand-primary pl-6">
                  <h4 className="font-bold text-navy-950 uppercase text-sm mb-2">Personalized Cues</h4>
                  <p className="text-sm">Movements are patterns. We find the specific cues that unlock your raw power safely.</p>
                </div>
              </div>

              <div className="bg-offwhite p-8 mb-12">
                <h4 className="font-display text-2xl uppercase mb-4">Pricing Matrix</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="font-bold uppercase text-[10px] text-gray-400">Duration</div>
                  <div className="font-bold uppercase text-[10px] text-gray-400">1 Skill</div>
                  <div className="font-bold uppercase text-[10px] text-gray-400">2 Skills</div>
                  <div className="font-bold">2 Days</div><div className="font-athletic">$2,000</div><div className="font-athletic">$2,500</div>
                  <div className="font-bold">3 Days</div><div className="font-athletic">$2,500</div><div className="font-athletic">$3,000</div>
                  <div className="font-bold">5 Days</div><div className="font-athletic">$3,500</div><div className="font-athletic">$4,000</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setStep('apply')}
              className="w-full bg-navy-950 text-white py-6 font-black uppercase tracking-widest skew-btn hover:bg-brand-primary transition-all duration-300"
            >
              <div className="skew-inner">Apply Now</div>
            </button>
          </div>
        )}

        {step === 'apply' && (
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl uppercase mb-12">Athlete Application</h2>
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setStep('success'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">First Name*</label>
                  <input type="text" className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Last Name*</label>
                  <input type="text" className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email Address*</label>
                <input type="email" className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Sport*</label>
                  <select className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2 bg-transparent">
                    <option>Baseball</option>
                    <option>Softball</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Primary Skill*</label>
                  <select className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2 bg-transparent">
                    <option>Hitting</option>
                    <option>Pitching</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Current Level*</label>
                <select className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2 bg-transparent">
                  <option>Youth (12u)</option>
                  <option>Middle School</option>
                  <option>High School</option>
                  <option>College</option>
                  <option>Pro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Training Goals*</label>
                <textarea className="w-full border-b border-gray-300 focus:border-brand-primary outline-none py-2 min-h-[100px]" required></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-navy-950 text-white py-6 font-black uppercase tracking-widest skew-btn hover:bg-brand-primary transition-all duration-300"
              >
                <div className="skew-inner">Submit Application</div>
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center animate-fade-in-up py-12">
            <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="material-symbols-outlined text-4xl">check</span>
            </div>
            <h2 className="font-display text-5xl uppercase mb-4">Application Received</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-10">Our coaching staff will review your metrics and goals. Expect a response in the GHL pipeline within 3-5 business days.</p>
            <button 
              onClick={onBack}
              className="text-navy-950 font-bold uppercase tracking-widest text-xs border-b-2 border-navy-950 pb-1 hover:text-brand-primary hover:border-brand-primary transition-all"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceView;
