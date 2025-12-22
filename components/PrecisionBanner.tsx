
import React from 'react';

const PrecisionBanner: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center bg-navy-900">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-fixed bg-center" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDBj3s3IUy_f0GJChM0dwWcQIESMc_5o5KbqBf3ZENuw2vth5knfVXp3pZTYv8zT7i59q5VliaQP7STqA7HYpALCSjYzxdTOVVPbh33eO1gbSLJgzXLngO9lrwkQO8xJtQFEbSUu5yE99dvmeWf2CptUv7-qWYvDv3hlmZDKHczD_tixmsBVDYvWUt_aLPMX34tpIkcbCiYyOuc7YWh4LKajDV5KUmj9M8lTYK-uSacT7BeI7Zke1mMeP-RukJGP7E8ZR6tY0nogRT')",
            filter: 'grayscale(100%)',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl border-l-4 border-brand-primary pl-8 md:pl-12">
          <h2 className="font-display text-white text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] mb-8 drop-shadow-lg">
            Precision<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Is Not An</span><br/>
            Accident
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="bg-white text-navy-950 hover:bg-brand-primary hover:text-white px-8 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 skew-btn">
              <div className="skew-inner">Explore The Science</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionBanner;
