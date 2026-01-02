'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { IntentResult } from '@/lib/intent/taxonomy';
import { classifyIntent, needsAIFallback } from '@/lib/intent/classifier';

interface IntentContextType {
  query: string;
  result: IntentResult | null;
  isLoading: boolean;
  isOpen: boolean;
  setQuery: (query: string) => void;
  processQuery: (query: string) => Promise<void>;
  clearIntent: () => void;
  openCommandBar: () => void;
  closeCommandBar: () => void;
}

const IntentContext = createContext<IntentContextType | undefined>(undefined);

export function IntentProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<IntentResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const processQuery = useCallback(async (inputQuery: string) => {
    if (!inputQuery.trim()) {
      setResult(null);
      return;
    }

    setQuery(inputQuery);
    setIsLoading(true);

    try {
      // First, try client-side classification (fast)
      const clientResult = classifyIntent(inputQuery);

      // If high confidence, use client result immediately
      if (!needsAIFallback(clientResult)) {
        setResult(clientResult);
        setIsLoading(false);
        return;
      }

      // For low confidence, try server-side AI (slower but smarter)
      try {
        const response = await fetch('/api/intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: inputQuery }),
        });

        if (response.ok) {
          const aiResult = await response.json();
          setResult(aiResult);
        } else {
          // Fall back to client result if AI fails
          setResult(clientResult);
        }
      } catch {
        // Fall back to client result if AI fails
        setResult(clientResult);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearIntent = useCallback(() => {
    setQuery('');
    setResult(null);
  }, []);

  const openCommandBar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCommandBar = useCallback(() => {
    setIsOpen(false);
    clearIntent();
  }, [clearIntent]);

  return (
    <IntentContext.Provider
      value={{
        query,
        result,
        isLoading,
        isOpen,
        setQuery,
        processQuery,
        clearIntent,
        openCommandBar,
        closeCommandBar,
      }}
    >
      {children}
    </IntentContext.Provider>
  );
}

export function useIntent() {
  const context = useContext(IntentContext);
  if (context === undefined) {
    throw new Error('useIntent must be used within an IntentProvider');
  }
  return context;
}
