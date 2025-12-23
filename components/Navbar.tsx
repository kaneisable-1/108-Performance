
import React, { useState } from 'react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-navy-950 group cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <span className="material-symbols-outlined text-[24px] font-black transform group-hover:-rotate-12 transition-transform duration-300 text-navy-950">bolt</span>
          <span className="text-lg font-display tracking-tight uppercase">108 Performance</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => onNavigate('home')} className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">Inside</button>
          <button onClick={() => onNavigate('services')} className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">Your Path</button>
          <button onClick={() => onNavigate('method')} className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-brand-primary transition-colors">The Method</button>
        </nav>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-navy-950 transition-colors"
          >
            Portal
          </button>
          <button 
            onClick={() => onNavigate('experience')}
            className="bg-navy-950 hover:bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.2em] py-3 px-8 rounded-none skew-btn transition-all duration-300 shadow-sm"
          >
            <div className="skew-inner">The Door Is Open</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
