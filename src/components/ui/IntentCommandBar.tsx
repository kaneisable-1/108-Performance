'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useIntent } from '@/context/IntentContext';
import { quickSuggestions } from '@/lib/intent/classifier';

export function IntentCommandBar() {
  const [localQuery, setLocalQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const { result, isLoading, processQuery, clearIntent } = useIntent();

  // Debounced query processing
  const handleQueryChange = useCallback((value: string) => {
    setLocalQuery(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (value.trim().length > 2) {
      debounceRef.current = setTimeout(() => {
        processQuery(value);
      }, 300);
    } else {
      clearIntent();
    }
  }, [processQuery, clearIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localQuery.trim()) return;
    processQuery(localQuery);
    setShowDropdown(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocalQuery(suggestion);
    processQuery(suggestion);
    setShowDropdown(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowDropdown(true);
  };

  const handleResultClick = () => {
    setShowDropdown(false);
    setLocalQuery('');
    clearIntent();
  };

  const clearSearch = () => {
    setLocalQuery('');
    clearIntent();
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const confidenceLabel = result ? (
    result.confidence >= 0.7 ? 'High match' :
    result.confidence >= 0.4 ? 'Good match' :
    'Exploring options'
  ) : null;

  const confidenceColor = result ? (
    result.confidence >= 0.7 ? 'text-green-600' :
    result.confidence >= 0.4 ? 'text-yellow-600' :
    'text-black/50'
  ) : '';

  return (
    <div className="w-full bg-white py-4 px-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div
            className={`flex items-center border-2 transition-all ${
              isFocused ? 'border-black' : 'border-black/30'
            }`}
          >
            {/* Search Icon */}
            <div className="pl-4 pr-2">
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <svg className="w-5 h-5 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </motion.div>
              ) : (
                <svg className="w-5 h-5 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={localQuery}
              onChange={(e) => handleQueryChange(e.target.value)}
              onFocus={handleFocus}
              placeholder="Tell us what you're looking for... 'I want more velo', 'my son needs training'..."
              className="flex-1 py-4 pr-4 text-black placeholder-black/40 bg-transparent outline-none text-sm"
            />

            {/* Clear button */}
            {localQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="pr-2 text-black/40 hover:text-black/70"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            {/* AI Badge */}
            <div className="pr-3 hidden sm:block">
              <span className="text-[10px] uppercase tracking-wider border border-black/20 text-black/50 px-2 py-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                AI
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!localQuery.trim() || isLoading}
              className={`px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-wider transition-all ${
                localQuery.trim() && !isLoading
                  ? 'hover:bg-black/80'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              {isLoading ? 'Thinking...' : 'Ask'}
            </button>
          </div>

          {/* Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black shadow-xl z-50 max-h-[70vh] overflow-y-auto"
              >
                {/* Show intent result if we have one */}
                {result && localQuery.trim() && (
                  <>
                    {/* Understanding header */}
                    <div className="p-4 border-b border-black/10 bg-black/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-black/50">
                            Understanding:
                          </span>
                          <span className="text-sm font-medium text-black">
                            {result.category.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                        <span className={`text-[10px] uppercase tracking-wider ${confidenceColor}`}>
                          {confidenceLabel} ({Math.round(result.confidence * 100)}%)
                        </span>
                      </div>
                    </div>

                    {/* Main result card */}
                    <div className="p-6 border-b border-black/10">
                      <div className="flex items-start gap-3 mb-4">
                        {result.tag && (
                          <span className="text-[10px] uppercase tracking-wider bg-black text-white px-2 py-1 font-bold">
                            {result.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-black text-black mb-2">{result.title}</h3>
                      <p className="text-black/60 text-sm mb-4">{result.description}</p>
                      <div className="flex items-center justify-between">
                        {result.price && (
                          <span className="text-lg font-bold text-black">{result.price}</span>
                        )}
                        <Link
                          href={result.href}
                          onClick={handleResultClick}
                          className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-colors"
                        >
                          {result.ctaText}
                        </Link>
                      </div>
                    </div>

                    {/* Related links */}
                    {result.related && result.related.length > 0 && (
                      <div className="p-4 bg-black/5 flex flex-wrap items-center gap-3">
                        <span className="text-[10px] uppercase tracking-wider text-black/40">
                          Related:
                        </span>
                        {result.related.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={handleResultClick}
                            className="text-xs px-3 py-1.5 border border-black/20 text-black/70 hover:bg-black hover:text-white transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Show quick suggestions when no query or no result */}
                {(!result || !localQuery.trim()) && (
                  <>
                    <p className="px-4 py-3 text-[10px] uppercase tracking-wider text-black/40 border-b border-black/10 bg-black/5">
                      Try asking about...
                    </p>
                    <div className="p-4 flex flex-wrap gap-2">
                      {quickSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion.label)}
                          className="px-4 py-2 text-sm border border-black/20 text-black/70 hover:bg-black hover:text-white transition-colors"
                        >
                          {suggestion.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Quick links footer */}
                <div className="p-3 bg-black/5 border-t border-black/10 flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-black/40 mr-2">Quick:</span>
                  <Link
                    href="/#find-your-path"
                    onClick={handleResultClick}
                    className="text-xs text-black/60 hover:text-black underline"
                  >
                    Find Your Path
                  </Link>
                  <span className="text-black/20">•</span>
                  <Link
                    href="/programs"
                    onClick={handleResultClick}
                    className="text-xs text-black/60 hover:text-black underline"
                  >
                    All Programs
                  </Link>
                  <span className="text-black/20">•</span>
                  <Link
                    href="/programs/experience"
                    onClick={handleResultClick}
                    className="text-xs text-black/60 hover:text-black underline"
                  >
                    The Experience
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
