'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type UserType = 'athlete' | 'parent' | 'coach' | null;

export interface RecommendedPath {
  title: string;
  href: string;
  price: string;
  ctaText: string;
}

interface CTAContextType {
  userType: UserType;
  recommendedPath: RecommendedPath | null;
  hasCompletedFindYourPath: boolean;
  setUserType: (type: UserType) => void;
  setRecommendedPath: (path: RecommendedPath | null) => void;
  setHasCompletedFindYourPath: (completed: boolean) => void;
  resetCTAState: () => void;
}

const CTAContext = createContext<CTAContextType | undefined>(undefined);

export function CTAProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null);
  const [recommendedPath, setRecommendedPath] = useState<RecommendedPath | null>(null);
  const [hasCompletedFindYourPath, setHasCompletedFindYourPath] = useState(false);

  const resetCTAState = useCallback(() => {
    setUserType(null);
    setRecommendedPath(null);
    setHasCompletedFindYourPath(false);
  }, []);

  return (
    <CTAContext.Provider
      value={{
        userType,
        recommendedPath,
        hasCompletedFindYourPath,
        setUserType,
        setRecommendedPath,
        setHasCompletedFindYourPath,
        resetCTAState,
      }}
    >
      {children}
    </CTAContext.Provider>
  );
}

export function useCTA() {
  const context = useContext(CTAContext);
  if (context === undefined) {
    throw new Error('useCTA must be used within a CTAProvider');
  }
  return context;
}
