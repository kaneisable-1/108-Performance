'use client';

import { SportProvider } from '@/context/SportContext';
import { PathFinderProvider } from '@/context/PathFinderContext';
import { CTAProvider } from '@/context/CTAContext';
import { IntentProvider } from '@/context/IntentContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SportProvider>
      <PathFinderProvider>
        <CTAProvider>
          <IntentProvider>{children}</IntentProvider>
        </CTAProvider>
      </PathFinderProvider>
    </SportProvider>
  );
}
