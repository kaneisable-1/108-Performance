'use client';

import { SportProvider } from '@/context/SportContext';
import { PathFinderProvider } from '@/context/PathFinderContext';
import { CTAProvider } from '@/context/CTAContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SportProvider>
      <PathFinderProvider>
        <CTAProvider>{children}</CTAProvider>
      </PathFinderProvider>
    </SportProvider>
  );
}
