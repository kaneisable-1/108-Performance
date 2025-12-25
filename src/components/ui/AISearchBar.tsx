'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function AISearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    // TODO: Integrate with AI backend
    console.log('AI Query:', query);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-[#1a1f25] py-4 px-6 border-b border-white/5">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center bg-[#2a3038] rounded-full overflow-hidden">
            {/* Search Icon */}
            <div className="pl-5 pr-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about 108 Performance..."
              className="flex-1 bg-transparent py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none"
            />

            {/* Ask Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#3a4250] hover:bg-[#4a5260] text-white px-5 py-2.5 mr-1.5 rounded-full text-sm font-medium transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Ask
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
