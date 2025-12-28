'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load Vimeo player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current && window.Vimeo) {
        const player = new window.Vimeo.Player(iframeRef.current);
        player.on('loaded', () => {
          setIsVideoLoaded(true);
        });
        player.setVolume(0);
        player.play();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Vimeo Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/843441967?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
            style={{ aspectRatio: '16/9' }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="108 Performance Training"
          />
        </div>

        {/* Gradient Overlay - Left side darker for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        {/* Bottom gradient for scroll indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="py-32 lg:py-0 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black leading-[0.95] tracking-[-0.03em] mb-8"
          >
            <span className="block">Training</span>
            <span className="block">built around</span>
            <span className="block text-white/40">you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-white/50 uppercase tracking-[0.2em] mb-6"
          >
            Knoxville, TN  •  In-Person & Remote
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-white/60 max-w-lg mb-10"
          >
            We don't teach a system. We help you find yours.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              whileHover={{ y: 2, backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileTap={{ y: 4 }}
              onClick={() => {
                document.getElementById('find-your-path')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-10 py-5 font-bold uppercase tracking-wider transition-colors"
            >
              Find Your Path
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-6 lg:left-8 flex items-center gap-4 z-10"
      >
        <div className="w-8 h-px bg-white/50" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
