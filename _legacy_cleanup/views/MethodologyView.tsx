
import React from 'react';

interface MethodologyViewProps {
  onAction: () => void;
}

const MethodologyView: React.FC<MethodologyViewProps> = ({ onAction }) => {
  const sections = [
    {
      title: "First, the Human.",
      desc: "Before we touch mechanics, we understand how you think. How you process information. What cues resonate. Your nervous system is the foundation.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      title: "Then, the Athlete.",
      desc: "Your body is unique. We study your natural movement patterns—not a textbook model. We work with your physiology, not against it.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
    },
    {
      title: "Finally, the Player.",
      desc: "Now we connect the dots. Hitting. Pitching. Throwing. The skills that show up on game day are built on the layers beneath.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-8xl md:text-[10rem] uppercase text-navy-950 leading-none mb-12 tracking-tighter">Human.<br/>Athlete. Player.</h1>
          <p className="text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed">The 108 methodology isn't a script. It's a hierarchy that respects the individual before the sport.</p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={i} className={`py-32 ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}>
          <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <h2 className="font-display text-5xl md:text-6xl uppercase mb-8 text-navy-950">{s.title}</h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">{s.desc}</p>
            </div>
            <div className={`aspect-square overflow-hidden bg-gray-100 shadow-2xl grayscale ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      ))}

      <section className="py-40 bg-navy-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-6xl uppercase mb-12">Ready to find your system?</h2>
          <button 
            onClick={onAction}
            className="bg-white text-navy-950 py-6 px-16 font-black uppercase tracking-[0.4em] skew-btn hover:bg-brand-primary hover:text-white transition-all duration-500"
          >
            <div className="skew-inner">Book 108 Experience</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MethodologyView;
