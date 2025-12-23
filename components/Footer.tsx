
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-16 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          <div className="text-navy-950">
             108 Performance • Knoxville, TN
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            <a href="#" className="hover:text-navy-950 transition-colors">Inside</a>
            <a href="#" className="hover:text-navy-950 transition-colors">Athletes</a>
            <a href="#" className="hover:text-navy-950 transition-colors">Coaches</a>
            <a href="#" className="hover:text-navy-950 transition-colors">The Method</a>
            <a href="#" className="hover:text-navy-950 transition-colors">Contact</a>
          </div>
          <div className="flex gap-6 justify-end">
            <a href="#" className="hover:text-navy-950 transition-colors">Instagram</a>
            <a href="#" className="hover:text-navy-950 transition-colors">YouTube</a>
            <a href="#" className="hover:text-navy-950 transition-colors">Email</a>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-gray-50 text-[10px] font-black text-gray-300 flex justify-between uppercase tracking-[0.4em]">
          <p>© 2025 108 Performance. The door is open.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
