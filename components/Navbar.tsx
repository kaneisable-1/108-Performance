
import React from 'react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { label: 'Experience', id: 'experience' as ViewState },
    { label: 'Services', id: 'services' as ViewState },
    { label: 'Shop', id: 'shop' as ViewState },
    { label: 'Collective', id: 'collective' as ViewState },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 text-navy-950 group cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <span className="material-symbols-outlined text-[28px] font-black transform group-hover:-rotate-12 transition-transform duration-300 text-brand-primary">bolt</span>
          <span className="text-xl font-display tracking-wider uppercase">108 Performance</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 border-b-2 ${
                currentView === item.id ? 'text-brand-primary border-brand-primary' : 'text-gray-400 border-transparent hover:text-navy-950'
              } pb-1`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-navy-950 hover:text-brand-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg">account_circle</span>
            Portal
          </button>
          <button 
            onClick={() => onNavigate('lab')}
            className="bg-navy-950 hover:bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.15em] py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg active:scale-95"
          >
            Enter Lab
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
