'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Sport = 'baseball' | 'softball';

interface SportContextType {
  sport: Sport;
  setSport: (sport: Sport) => void;
  isBaseball: boolean;
  isSoftball: boolean;
}

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<Sport>('baseball');

  // Persist selection in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('108-sport') as Sport | null;
    if (saved && (saved === 'baseball' || saved === 'softball')) {
      setSport(saved);
    }
  }, []);

  const handleSetSport = (newSport: Sport) => {
    setSport(newSport);
    localStorage.setItem('108-sport', newSport);
  };

  return (
    <SportContext.Provider
      value={{
        sport,
        setSport: handleSetSport,
        isBaseball: sport === 'baseball',
        isSoftball: sport === 'softball',
      }}
    >
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const context = useContext(SportContext);
  if (context === undefined) {
    throw new Error('useSport must be used within a SportProvider');
  }
  return context;
}

// Helper hook for getting sport-specific content
export function useSportContent<T>(baseball: T, softball: T): T {
  const { isBaseball } = useSport();
  return isBaseball ? baseball : softball;
}
