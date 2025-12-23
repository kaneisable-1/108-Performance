"use client";

import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const promptExamples = [
    "I'm a high school pitcher looking to add velocity",
    "My son is 14 and wants to hit better",
    "I'm a coach who wants to learn the 108 method",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center img-warm-bw"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            {/* Headline */}
            <h1
              className="text-6xl sm:text-7xl lg:text-[7rem] uppercase leading-[0.9] mb-6 fade-in-up"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              <span className="text-white">When You</span>
              <br />
              <span className="text-offwhite">Feel It,</span>
              <br />
              <span className="text-offwhite/60">You'll Know.</span>
            </h1>

            {/* Subhead */}
            <p
              className="text-lg md:text-xl text-offwhite/70 font-medium leading-relaxed max-w-xl mb-8 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We build athletes differently. Combining data-driven biomechanics
              with elite coaching to unlock raw power.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                href="/108-experience"
                className="bg-navy hover:bg-offwhite text-offwhite hover:text-ink text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-[10px] transition-all duration-300 shadow-deep inline-block text-center"
              >
                Experience 108
              </Link>
              <button className="text-offwhite hover:text-white font-semibold uppercase tracking-widest px-6 py-4 flex items-center justify-center gap-3 group transition-colors">
                Watch Film
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - AI Discovery Interface */}
          <div
            className="lg:col-span-5 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-line/30 backdrop-blur-sm border border-line/50 rounded-[10px] p-6 md:p-8">
              {/* Search Header */}
              <h3
                className="text-2xl uppercase text-white mb-6"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                How can we help?
              </h3>

              {/* Search Input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-black/60 border border-line rounded-[6px] px-4 py-4 text-white placeholder-offwhite/40 focus:outline-none focus:border-offwhite/50 transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-offwhite/50 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>

              {/* Prompt Examples */}
              <div className="space-y-2 mb-8">
                {promptExamples.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(prompt)}
                    className="block w-full text-left text-sm text-offwhite/50 hover:text-offwhite hover:bg-white/5 px-3 py-2 rounded-[6px] transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {/* Quick Select Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href="/for-athletes"
                  className="group bg-white/5 hover:bg-navy border border-line hover:border-navy rounded-[6px] p-4 text-center transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-2xl text-offwhite mb-2 block">
                    sports_baseball
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-offwhite block">
                    Athlete
                  </span>
                  <span className="text-[10px] text-offwhite/50 group-hover:text-offwhite/70">
                    Train with 108
                  </span>
                </Link>
                <Link
                  href="/for-athletes"
                  className="group bg-white/5 hover:bg-navy border border-line hover:border-navy rounded-[6px] p-4 text-center transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-2xl text-offwhite mb-2 block">
                    family_restroom
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-offwhite block">
                    Parent
                  </span>
                  <span className="text-[10px] text-offwhite/50 group-hover:text-offwhite/70">
                    Find your kid's path
                  </span>
                </Link>
                <Link
                  href="/for-coaches"
                  className="group bg-white/5 hover:bg-navy border border-line hover:border-navy rounded-[6px] p-4 text-center transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-2xl text-offwhite mb-2 block">
                    school
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-offwhite block">
                    Coach
                  </span>
                  <span className="text-[10px] text-offwhite/50 group-hover:text-offwhite/70">
                    Learn the method
                  </span>
                </Link>
              </div>

              {/* Quiz Fallback */}
              <div className="mt-6 text-center">
                <Link
                  href="/quiz"
                  className="text-sm text-offwhite/50 hover:text-offwhite transition-colors"
                >
                  Not sure?{" "}
                  <span className="underline">Take the 60-second quiz</span> →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
