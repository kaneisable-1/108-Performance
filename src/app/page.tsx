import { Navigation } from '@/components/ui/Navigation';
import { IntentCommandBar } from '@/components/ui/IntentCommandBar';
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
      {/* AI Intent Command Bar - Fixed below header */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 border-b border-black/10">
        <IntentCommandBar />
      </div>
      <main className="pt-[72px] lg:pt-[80px]">
        {/* 1. Hero - Hook */}
        <Hero />
        {/* 2. Roster Carousel - Social proof */}
        <RosterCarousel />
        {/* 3. Find Your Path - Qualify the user */}
        <div id="find-your-path">
          <FindYourPath />
        </div>
        {/* 4. The Method - Human, Athlete, Player */}
        <Method />
        {/* 5. The Gateway - Required first step */}
        <div id="gateway">
          <Gateway />
        </div>
        {/* 6. Choose Your Path - Options after Experience */}
        <PathOptions />
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
