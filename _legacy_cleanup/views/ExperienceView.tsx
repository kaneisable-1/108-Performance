
import React, { useState } from 'react';

interface ExperienceViewProps {
  onBack: () => void;
}

const ExperienceView: React.FC<ExperienceViewProps> = ({ onBack }) => {
  const [step, setStep] = useState<'intro' | 'apply' | 'success'>('intro');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-32 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display text-7xl md:text-9xl uppercase mb-4 leading-none tracking-tight">Discover before <br/>you fix.</h1>
          <p className="text-xl text-gray-400 font-medium max-w-xl mx-auto uppercase tracking-widest">2–5 days. Your personal system. Starting at $2,000.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {step === 'intro' && (
          <div className="animate-fade-in-up space-y-24">
            <section className="space-y-6">
              <h2 className="font-display text-5xl uppercase text-navy-950">This isn't an evaluation.</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                We learn who you are first—how you think, how you learn, how you coach yourself. The 108 Experience is about uncovering your natural patterns and building a language that belongs to you.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { t: 'First, the Human', d: 'Your nervous system is the foundation. What cues resonate with your brain?' },
                { t: 'Then, the Athlete', d: 'How does your body move? Natural patterns over textbook models.' },
                { t: 'Finally, the Player', d: 'Connect the dots. Pitch, swing, throw. The skills built on layers beneath.' }
              ].map(item => (
                <div key={item.t} className="space-y-4">
                  <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-brand-primary">{item.t}</h4>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <section className="bg-offwhite p-12 border border-gray-100">
              <h3 className="font-display text-3xl uppercase mb-8">Leave with a system.</h3>
              <p className="text-gray-600 font-medium mb-12">Personal cues and prompts that help you find the right pattern on your own. Not our cues—yours.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-6">Single Skill</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2"><span>2 Days</span><span>$2,000</span></div>
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2 text-brand-primary"><span>3 Days ★</span><span>$2,500</span></div>
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2"><span>4 Days</span><span>$3,000</span></div>
                    <div className="flex justify-between font-athletic text-lg pb-2"><span>5 Days</span><span>$3,500</span></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-6">Two Skills</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2"><span>2 Days</span><span>$2,500</span></div>
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2 text-brand-primary"><span>3 Days ★</span><span>$3,000</span></div>
                    <div className="flex justify-between font-athletic text-lg border-b border-gray-200 pb-2"><span>4 Days</span><span>$3,500</span></div>
                    <div className="flex justify-between font-athletic text-lg pb-2"><span>5 Days</span><span>$4,000</span></div>
                  </div>
                </div>
              </div>
            </section>

            <button 
              onClick={() => setStep('apply')}
              className="w-full bg-navy-950 text-white py-8 font-black uppercase tracking-[0.4em] skew-btn hover:bg-brand-primary transition-all duration-300 shadow-2xl"
            >
              <div className="skew-inner">Book Your Experience</div>
            </button>
          </div>
        )}

        {step === 'apply' && (
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl uppercase mb-12">The door is open. Tell us where you are.</h2>
            <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setStep('success'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="Name" className="w-full border-b-2 border-gray-200 focus:border-navy-950 outline-none py-4 font-bold uppercase tracking-widest text-xs" required />
                <input type="email" placeholder="Email" className="w-full border-b-2 border-gray-200 focus:border-navy-950 outline-none py-4 font-bold uppercase tracking-widest text-xs" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="tel" placeholder="Phone" className="w-full border-b-2 border-gray-200 focus:border-navy-950 outline-none py-4 font-bold uppercase tracking-widest text-xs" required />
                <select className="w-full border-b-2 border-gray-200 focus:border-navy-950 outline-none py-4 font-bold uppercase tracking-widest text-xs bg-transparent">
                  <option>Baseball</option>
                  <option>Softball</option>
                </select>
              </div>
              <textarea placeholder="Tell us about your current status and goals" className="w-full border-b-2 border-gray-200 focus:border-navy-950 outline-none py-4 font-bold uppercase tracking-widest text-xs min-h-[150px]"></textarea>
              <button 
                type="submit"
                className="w-full bg-navy-950 text-white py-8 font-black uppercase tracking-[0.4em] skew-btn hover:bg-brand-primary transition-all duration-300 shadow-2xl"
              >
                <div className="skew-inner">Submit Application</div>
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center animate-fade-in-up py-20">
            <h2 className="font-display text-7xl uppercase mb-6">Conversation Started.</h2>
            <p className="text-xl text-gray-500 max-w-md mx-auto mb-12 font-medium">We'll reach out within 48 hours. No pressure. Just a conversation.</p>
            <button 
              onClick={onBack}
              className="text-navy-950 font-bold uppercase tracking-widest text-xs border-b-2 border-navy-950 pb-2 hover:text-brand-primary hover:border-brand-primary transition-all"
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceView;
