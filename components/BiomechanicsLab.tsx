
import React, { useState } from 'react';
import { generateBiomechanicsPlan, BiomechanicsPlan } from '../services/geminiService';

interface BiomechanicsLabProps {
  onClose: () => void;
}

const BiomechanicsLab: React.FC<BiomechanicsLabProps> = ({ onClose }) => {
  const [sport, setSport] = useState('Baseball (Pitching)');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<BiomechanicsPlan | null>(null);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;
    setLoading(true);
    try {
      const result = await generateBiomechanicsPlan(sport, goal);
      setPlan(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-navy-900 text-white animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase font-bold text-xs tracking-widest"
        >
          <span className="material-symbols-outlined">arrow_back</span> Back to Home
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-none skew-btn">
            <span className="material-symbols-outlined text-white skew-inner">biotech</span>
          </div>
          <h2 className="font-display text-4xl uppercase">The Lab Experience</h2>
        </div>
        <p className="text-gray-400 mb-12 text-lg">Input your current status for a custom 108 Biomechanical Analysis.</p>

        {!plan ? (
          <form onSubmit={handleAnalysis} className="space-y-8 bg-navy-950 p-8 border border-white/10 shadow-2xl">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-brand-primary">Selected Discipline</label>
              <select 
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full bg-navy-900 border-white/20 text-white rounded-none focus:ring-brand-primary focus:border-brand-primary py-4 px-4 font-bold uppercase tracking-wider"
              >
                <option>Baseball (Pitching)</option>
                <option>Baseball (Hitting)</option>
                <option>Softball</option>
                <option>Functional Power</option>
                <option>Speed & Agility</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-brand-primary">Performance Goal / Plateau</label>
              <textarea 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Stuck at 88mph with high vertical break. Need more horizontal sweep..."
                className="w-full bg-navy-900 border-white/20 text-white rounded-none focus:ring-brand-primary focus:border-brand-primary h-32 py-4 px-4"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-5 font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl ${
                loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-brand-primary hover:bg-white hover:text-navy-950'
              }`}
            >
              {loading ? 'Crunching Kinematics...' : 'Begin Lab Analysis'}
            </button>
          </form>
        ) : (
          <div className="space-y-12 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-950 p-8 border-l-4 border-brand-primary shadow-xl">
                <p className="text-xs font-black text-brand-primary uppercase mb-2 tracking-widest">Focus Area</p>
                <h3 className="font-display text-2xl uppercase">{plan.focusArea}</h3>
              </div>
              <div className="bg-navy-950 p-8 border-l-4 border-brand-primary shadow-xl">
                <p className="text-xs font-black text-brand-primary uppercase mb-2 tracking-widest">Expected Result</p>
                <h3 className="font-display text-2xl uppercase">{plan.expectedGain}</h3>
              </div>
            </div>

            <div className="bg-white text-navy-950 p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 font-display text-8xl opacity-[0.05] pointer-events-none">108</div>
              <h4 className="font-display text-3xl uppercase mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-primary text-4xl">precision_manufacturing</span>
                Mechanical Strategy
              </h4>
              <p className="text-xl leading-relaxed font-medium text-gray-700 border-b border-gray-100 pb-8 mb-8">
                {plan.mechanicalAdjustment}
              </p>

              <h4 className="font-display text-2xl uppercase mb-6">Prescribed Drills</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plan.recommendedDrills.map((drill, idx) => (
                  <div key={idx} className="bg-offwhite p-6 border border-gray-200 group hover:border-brand-primary transition-colors">
                    <span className="block text-4xl font-display text-gray-200 mb-2 group-hover:text-brand-primary transition-colors">0{idx + 1}</span>
                    <p className="font-bold text-sm uppercase leading-tight">{drill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                onClick={() => setPlan(null)}
                className="bg-navy-800 hover:bg-navy-700 px-8 py-4 font-black uppercase tracking-widest text-sm transition-all"
              >
                New Analysis
              </button>
              <button 
                className="bg-brand-primary hover:bg-white hover:text-navy-950 px-8 py-4 font-black uppercase tracking-widest text-sm transition-all shadow-lg"
                onClick={() => alert("Connecting with elite performance coach...")}
              >
                Book This Program
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiomechanicsLab;
