'use client';

import { SportProvider } from '@/context/SportContext';
import { PathFinderProvider } from '@/context/PathFinderContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SportProvider>
      <PathFinderProvider>{children}</PathFinderProvider>
    </SportProvider>
  );
}
