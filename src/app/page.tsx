import { Navigation } from '@/components/ui/Navigation';
import { AISearchBar } from '@/components/ui/AISearchBar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { EntryPoint } from '@/components/sections/EntryPoint';
import { Method } from '@/components/sections/Method';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/ui/Footer';
import { PathFinder } from '@/components/ui/PathFinder';

export default function Home() {
  return (
    <>
      <Navigation />
      <AISearchBar />
      <main>
        <Hero />
        <Problem />
        <EntryPoint />
        <Method />
        <CTA />
      </main>
      <Footer />
      <PathFinder />
    </>
  );
}
