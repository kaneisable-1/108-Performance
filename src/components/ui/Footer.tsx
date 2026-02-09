'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/services';
import Script from "next/script";

export function Footer() {
  const handleFindYourPath = () => {
    const element = document.getElementById('find-your-path');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-black">
      {/* Conversion Banner */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
            Ready to Start?
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Your path starts with one decision.
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Whether you're an athlete looking to train, a parent researching options, or a coach wanting to learn—we have a path for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
<Link href="https://link.apisystem.tech/widget/survey/9n6r0LInGOdtUgls6PBA">
  <button
    className="px-8 py-4 border border-white/30 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
  >
    Find Your Path
  </button>
</Link>
            <Link
  href="https://api.leadconnectorhq.com/widget/groups/sales-qualification"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
>
  Book Your Free Session
</Link>

          </div>
        </div>
      </div>Ï

      {/* Main Footer */}
      <div className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="108 Performance"
              width={180}
              height={40}
              className="h-8 w-auto mb-3"
            />
            <ul className="space-y-3 text-sm text-gray-500">
    {/* Location */}
    <li className="flex items-start gap-3">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-6-5.33-6-10a6 6 0 0 1 12 0c0 4.67-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
      <span>
        108 Performance<br />
        6616 Deane Hill Dr<br />
        Knoxville, TN 37919
      </span>
    </li>

    {/* Phone */}
    <li className="flex items-center gap-3">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L9.03 10.97a16 16 0 0 0 6 6l1.78-1.06a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
      </svg>
      <a
        href="tel:+18652323773"
        className="hover:text-black transition-colors"
      >
        +1 (865) 232-3773
      </a>
    </li>

    {/* Email */}
    <li className="flex items-center gap-3">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
      <a
        href="mailto:108@108performanceacademy.com"
        className="hover:text-black transition-colors"
      >
        108@108performanceacademy.com
      </a>
    </li>
  </ul>
           
          </div>

          {/* Links Column 1 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/programs" className="hover:text-black transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/athletes" className="hover:text-black transition-colors">
                  Athletes
                </Link>
              </li>
              <li>
                <Link href="/nil" className="hover:text-black transition-colors">
                  NIL
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/#method" className="hover:text-black transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-black transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={BRAND.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.location.email}`} className="hover:text-black transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 108 Performance. The door is open.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        strategy="afterInteractive"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="697a80ef0a40ea301bf71a6d"
      />
    </footer>
  );
}
