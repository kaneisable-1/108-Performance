import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { BinaryChoice } from '@/components/sections/BinaryChoice';
import { Method } from '@/components/sections/Method';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/ui/Footer';
import { PathFinder } from '@/components/ui/PathFinder';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BinaryChoice />
        <Method />
        <CTA />
      </main>
      <Footer />
      <PathFinder />
    </>
  );
}
