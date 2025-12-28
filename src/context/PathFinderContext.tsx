'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type UserType = 'athlete' | 'parent' | 'coach' | null;

interface PathFinderContextType {
  isOpen: boolean;
  preSelectedUserType: UserType;
  openPathFinder: (userType?: UserType) => void;
  closePathFinder: () => void;
}

const PathFinderContext = createContext<PathFinderContextType | undefined>(undefined);

export function PathFinderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedUserType, setPreSelectedUserType] = useState<UserType>(null);

  const openPathFinder = useCallback((userType?: UserType) => {
    setPreSelectedUserType(userType || null);
    setIsOpen(true);
  }, []);

  const closePathFinder = useCallback(() => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setPreSelectedUserType(null);
    }, 300);
  }, []);

  return (
    <PathFinderContext.Provider value={{ isOpen, preSelectedUserType, openPathFinder, closePathFinder }}>
      {children}
    </PathFinderContext.Provider>
  );
}

export function usePathFinder() {
  const context = useContext(PathFinderContext);
  if (context === undefined) {
    throw new Error('usePathFinder must be used within a PathFinderProvider');
  }
  return context;
}
