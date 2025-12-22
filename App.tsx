
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ExperienceView from './views/ExperienceView';
import ServicesView from './views/ServicesView';
import ShopView from './views/ShopView';
import DashboardView from './views/DashboardView';
import CollectiveView from './views/CollectiveView';
import BiomechanicsLab from './components/BiomechanicsLab';

export type ViewState = 'home' | 'experience' | 'services' | 'shop' | 'dashboard' | 'collective' | 'lab';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'experience':
        return <ExperienceView onBack={() => setCurrentView('home')} />;
      case 'services':
        return <ServicesView onSelect={(view) => setCurrentView(view)} />;
      case 'shop':
        return <ShopView />;
      case 'dashboard':
        return <DashboardView />;
      case 'collective':
        return <CollectiveView />;
      case 'lab':
        return <BiomechanicsLab onClose={() => setCurrentView('home')} />;
      default:
        return <HomeView onNavigate={(view) => setCurrentView(view)} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-offwhite selection:bg-brand-primary selection:text-white">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="pt-16">
        {renderView()}
      </main>

      {currentView !== 'lab' && currentView !== 'dashboard' && <Footer />}
    </div>
  );
};

export default App;
