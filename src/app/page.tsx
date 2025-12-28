import { Navigation } from '@/components/ui/Navigation';
import { AISearchBar } from '@/components/ui/AISearchBar';
import { Hero } from '@/components/sections/Hero';
import { RosterCarousel } from '@/components/sections/RosterCarousel';
import { FindYourPath } from '@/components/sections/FindYourPath';
import { Gateway } from '@/components/sections/Gateway';
import { PathOptions } from '@/components/sections/PathOptions';
import { Method } from '@/components/sections/Method';
import { AppShowcase } from '@/components/sections/AppShowcase';
import { From108 } from '@/components/sections/From108';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/ui/Footer';
import { StickyCTA } from '@/components/ui/StickyCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      {/* AI Search Bar - Fixed below header */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 border-b border-black/10">
        <AISearchBar />
      </div>
      <main className="pt-[72px] lg:pt-[80px]">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Roster Carousel - Scrolling athlete cards */}
        <RosterCarousel />
        {/* 3. Find Your Path - Stats + Guided program selector */}
        <div id="find-your-path">
          <FindYourPath />
        </div>
        {/* 4. The Gateway - 108 Experience */}
        <Gateway />
        {/* 5. Choose Your Path - Training Options */}
        <PathOptions />
        {/* 6. The Method - Human → Athlete → Player */}
        <Method />
        {/* 7. App Showcase - 108 Software */}
        <AppShowcase />
        {/* 8. From 108 - Video Content */}
        <From108 />
        {/* 9. Testimonials */}
        <Testimonials />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. Final CTA */}
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
