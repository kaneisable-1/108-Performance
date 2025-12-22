
import React from 'react';

const LabStats: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="font-display text-[15vw] leading-none text-navy-950 uppercase">Performance</span>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-navy-950 text-white shadow-xl animate-bounce">
          <span className="material-symbols-outlined text-3xl">verified</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-navy-950 mb-8 leading-[0.9]">
          Lab Tested.<br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600">Coach Approved.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
          We don't guess. We measure. Our methodology combines cutting-edge biomechanical analysis with battle-tested coaching strategies.
        </p>
      </div>
    </section>
  );
};

export default LabStats;
