'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSport } from '@/context/SportContext';

// Searchable content database
const searchableContent = [
  // Programs
  {
    type: 'program',
    title: 'The 108 Experience',
    description: '2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system.',
    price: 'From $2,000',
    href: '/programs/experience',
    keywords: ['experience', 'start', 'begin', 'first', 'gateway', '108 experience', 'getting started', 'how to start'],
  },
  {
    type: 'program',
    title: 'Tri-Star Membership',
    description: 'Unlimited training at our Knoxville facility. Show up. Get better. Monday-Thursday.',
    price: '$499/mo',
    href: '/programs/tri-star',
    keywords: ['tri-star', 'tristar', 'local', 'knoxville', 'unlimited', 'membership', 'in-person', 'in person'],
  },
  {
    type: 'program',
    title: 'Virtual Experience',
    description: 'Your coach in your pocket. Daily programming, video feedback, direct coach access.',
    price: '$550/mo',
    href: '/programs/virtual',
    keywords: ['virtual', 'remote', 'online', 'distance', 'video', 'not local', 'far away'],
  },
  {
    type: 'program',
    title: 'Virtual Pro',
    description: 'Daily remote coaching + 6 trips to Knoxville per year. The best of both worlds.',
    price: '$1,000/mo',
    href: '/programs/virtual-pro',
    keywords: ['virtual pro', 'hybrid', 'travel', 'quarterly', 'best value', 'trips'],
  },
  {
    type: 'program',
    title: 'College Prep',
    description: 'Training plus recruiting. Open doors to the right programs.',
    price: '$1,250/mo',
    href: '/programs/college-prep',
    keywords: ['college', 'recruiting', 'scholarship', 'university', 'ncaa', 'd1', 'division'],
  },
  {
    type: 'program',
    title: 'Draft Prep',
    description: 'Draft positioning. Optimize what scouts measure. The right events, people, timing.',
    price: '$1,500/mo',
    href: '/programs/draft-prep',
    keywords: ['draft', 'mlb', 'professional', 'scouts', 'pro', 'minor league'],
  },
  {
    type: 'program',
    title: 'Coaches Experience',
    description: 'Spend a day in the lab. See why cookie-cutter doesn\'t work. Ask anything.',
    price: '$500/day',
    href: '/programs/coaches-experience',
    keywords: ['coach', 'coaches', 'coaching', 'learn', 'mentor', 'training coaches'],
  },
  {
    type: 'program',
    title: 'Coaches Mentorship',
    description: 'Monthly calls, same programming we use at 108, ongoing development.',
    price: 'From $297/mo',
    href: '/programs/coaches-mentorship',
    keywords: ['mentorship', 'coaching development', 'coach training', 'ongoing'],
  },
  // FAQs
  {
    type: 'faq',
    title: 'What is the 108 Experience?',
    description: '2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you.',
    href: '/programs/experience',
    keywords: ['what is', '108 experience', 'explain', 'about'],
  },
  {
    type: 'faq',
    title: 'Do I have to do the 108 Experience first?',
    description: 'Yes. Every path starts at the same door. We need to understand how you think before we can help you move.',
    href: '/programs/experience',
    keywords: ['required', 'first', 'have to', 'must', 'start'],
  },
  {
    type: 'faq',
    title: 'What if I\'m not local to Knoxville?',
    description: 'Virtual Experience. Daily programming, video feedback, direct coach access—training that transfers from wherever you are.',
    href: '/programs/virtual',
    keywords: ['not local', 'far', 'distance', 'travel', 'remote', 'out of state', 'out of town'],
  },
  {
    type: 'faq',
    title: 'What ages do you work with?',
    description: 'From 12 to MLB. Youth athletes, high schoolers, college players, and professionals all train under one roof.',
    href: '/about',
    keywords: ['age', 'ages', 'young', 'youth', 'old', 'kids', 'children', 'adults', '12', 'mlb'],
  },
  {
    type: 'faq',
    title: 'What makes 108 different?',
    description: 'We don\'t teach a system. We help you find yours. Human → Athlete → Player.',
    href: '/#method',
    keywords: ['different', 'unique', 'special', 'why 108', 'method', 'approach'],
  },
  {
    type: 'faq',
    title: 'Do you work with softball players?',
    description: 'Yes. Same philosophy, softball-specific. Jamie Bleecker (Team USA, D1 Pac-12 All-American) leads our softball program.',
    href: '/softball',
    keywords: ['softball', 'girls', 'women', 'jamie', 'bleecker'],
  },
  {
    type: 'faq',
    title: 'How much does it cost?',
    description: 'The 108 Experience starts at $2,000. Ongoing training: Tri-Star $499/mo, Virtual $550/mo, Virtual Pro $1,000/mo.',
    href: '/programs',
    keywords: ['cost', 'price', 'pricing', 'how much', 'expensive', 'money', 'pay', 'afford'],
  },
  {
    type: 'faq',
    title: 'Where are you located?',
    description: '6616 Deane Hill Drive, Knoxville, TN 37919. Monday-Thursday 3:30-9:00 PM.',
    href: '/contact',
    keywords: ['location', 'address', 'where', 'knoxville', 'tennessee', 'directions', 'hours'],
  },
  // Info pages
  {
    type: 'page',
    title: 'The Method',
    description: 'Human. Athlete. Player. We start with how you think, then how you move, then we build the skills.',
    href: '/#method',
    keywords: ['method', 'philosophy', 'approach', 'human athlete player', 'how', 'system'],
  },
  {
    type: 'page',
    title: 'Contact Us',
    description: 'Questions? Ready to start? Reach out to our team.',
    href: '/contact',
    keywords: ['contact', 'email', 'phone', 'call', 'reach', 'talk', 'question'],
  },
];

const baseballSuggestions = [
  "What's the 108 Experience?",
  "How do I get started?",
  "Programs for remote athletes",
  "Do you work with college players?",
  "What does training cost?",
  "Where is 108 located?",
];

const softballSuggestions = [
  "Tell me about softball training",
  "Who is Jamie Bleecker?",
  "Softball pitching programs",
  "Do you train softball hitters?",
  "What does training cost?",
  "Where is 108 located?",
];

interface SearchResult {
  type: string;
  title: string;
  description: string;
  price?: string;
  href: string;
}

export function AISearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSoftball } = useSport();

  const suggestions = isSoftball ? softballSuggestions : baseballSuggestions;

  // Search function
  const performSearch = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const q = searchQuery.toLowerCase();
    const scored: { item: typeof searchableContent[0]; score: number }[] = [];

    searchableContent.forEach((item) => {
      let score = 0;

      // Check title match
      if (item.title.toLowerCase().includes(q)) {
        score += 10;
      }

      // Check description match
      if (item.description.toLowerCase().includes(q)) {
        score += 5;
      }

      // Check keywords
      item.keywords.forEach((keyword) => {
        if (keyword.includes(q) || q.includes(keyword)) {
          score += 8;
        }
        // Partial match
        const words = q.split(' ');
        words.forEach((word) => {
          if (word.length > 2 && keyword.includes(word)) {
            score += 3;
          }
        });
      });

      if (score > 0) {
        scored.push({ item, score });
      }
    });

    // Sort by score and return top 5
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(({ item }) => ({
        type: item.type,
        title: item.title,
        description: item.description,
        price: 'price' in item ? item.price : undefined,
        href: item.href,
      }));
  };

  // Live search as user types
  useEffect(() => {
    if (query.trim().length > 1) {
      const searchResults = performSearch(query);
      setResults(searchResults);
      setShowDropdown(true);
    } else if (query.trim().length === 0) {
      setResults([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const searchResults = performSearch(query);
    setResults(searchResults);
    setShowDropdown(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    const searchResults = performSearch(suggestion);
    setResults(searchResults);
    setShowDropdown(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowDropdown(true);
  };

  const handleResultClick = () => {
    setShowDropdown(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
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

  // Filter suggestions based on query
  const filteredSuggestions = query.trim()
    ? suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : suggestions;

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
              <svg
                className="w-5 h-5 text-black/50"
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
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              placeholder="Ask about programs, pricing, the 108 method, or how to get started..."
              className="flex-1 py-4 pr-4 text-black placeholder-black/40 bg-transparent outline-none text-sm"
            />

            {/* Clear button */}
            {query && (
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
              <span className="text-[10px] uppercase tracking-wider border border-black/20 text-black/50 px-2 py-1">
                AI-Powered
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!query.trim()}
              className={`px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-wider transition-all ${
                query.trim()
                  ? 'hover:bg-black/80'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              Ask
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
                {/* Show results if we have search results */}
                {results.length > 0 && (
                  <>
                    <div className="p-3 border-b border-black/10 flex items-center justify-between bg-black/5">
                      <p className="text-[10px] uppercase tracking-wider text-black/50">
                        {results.length} result{results.length !== 1 ? 's' : ''}
                      </p>
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="text-xs text-black/50 hover:text-black"
                      >
                        Clear
                      </button>
                    </div>
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        onClick={handleResultClick}
                        className="block px-4 py-4 hover:bg-black/5 transition-colors border-b border-black/5 last:border-b-0"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 ${
                                result.type === 'program'
                                  ? 'bg-black text-white'
                                  : result.type === 'faq'
                                  ? 'bg-black/10 text-black/70'
                                  : 'bg-black/5 text-black/50'
                              }`}>
                                {result.type}
                              </span>
                              <h4 className="font-semibold text-black text-sm">{result.title}</h4>
                            </div>
                            <p className="text-xs text-black/60 line-clamp-2">{result.description}</p>
                          </div>
                          {result.price && (
                            <span className="text-sm font-semibold text-black/70 whitespace-nowrap">
                              {result.price}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </>
                )}

                {/* Show suggestions when no results or empty query */}
                {results.length === 0 && (
                  <>
                    <p className="px-4 py-3 text-[10px] uppercase tracking-wider text-black/40 border-b border-black/10 bg-black/5">
                      {query.trim() ? 'No results found. Try these:' : 'Popular questions'}
                    </p>
                    {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-4 py-3 text-left text-sm text-black/70 hover:bg-black/5 hover:text-black transition-colors flex items-center gap-3 border-b border-black/5 last:border-b-0"
                      >
                        <svg
                          className="w-4 h-4 text-black/30 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {suggestion}
                      </button>
                    ))}
                  </>
                )}

                {/* Quick links footer */}
                <div className="p-3 bg-black/5 border-t border-black/10 flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-black/40 mr-2">Quick:</span>
                  <Link
                    href="/programs/experience"
                    onClick={handleResultClick}
                    className="text-xs text-black/60 hover:text-black underline"
                  >
                    Get Started
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
                    href="/contact"
                    onClick={handleResultClick}
                    className="text-xs text-black/60 hover:text-black underline"
                  >
                    Contact
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
