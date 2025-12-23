
import React, { useState } from 'react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-[clamp(16px,5vw,32px)] h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 text-white group cursor-pointer select-none" 
          onClick={() => onNavigate('home')}
        >
          <div className="font-display text-3xl italic tracking-tighter leading-none transition-transform group-hover:scale-105">108</div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex flex-col">
            <span className="text-[8px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-all">Performance</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          <button onClick={() => onNavigate('home')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors focus:ring-2 focus:ring-white outline-none rounded-button px-2">Inside</button>
          <button onClick={() => onNavigate('services')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors focus:ring-2 focus:ring-white outline-none rounded-button px-2">Your Path</button>
          <button onClick={() => onNavigate('method')} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors focus:ring-2 focus:ring-white outline-none rounded-button px-2">The Method</button>
        </nav>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="hidden sm:block text-[9px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors focus:ring-2 focus:ring-white outline-none rounded-button px-2"
          >
            Portal
          </button>
          <button 
            onClick={() => onNavigate('experience')}
            className="bg-white hover:bg-white/90 text-black text-[9px] font-black uppercase tracking-[0.2em] py-3.5 px-8 rounded-button transition-all duration-300 shadow-card hover:shadow-bloomFeatured focus:ring-2 focus:ring-white outline-none"
          >
            Experience
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
