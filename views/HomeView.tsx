
import React from 'react';
import Hero from '../components/Hero';
import LabStats from '../components/LabStats';
import StandardGrid from '../components/StandardGrid';
import PrecisionBanner from '../components/PrecisionBanner';
import CTA from '../components/CTA';
import { ViewState } from '../App';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onExperienceClick={() => onNavigate('experience')} />
      <LabStats />
      <StandardGrid />
      <PrecisionBanner />
      <CTA onExperienceClick={() => onNavigate('experience')} />
    </>
  );
};

export default HomeView;
