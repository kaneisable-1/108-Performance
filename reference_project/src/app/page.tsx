import { HeroSection } from "@/components/sections/hero";
import { LabTestedSection } from "@/components/sections/lab-tested";
import { StandardCardsSection } from "@/components/sections/standard-cards";
import { PrecisionStatementSection } from "@/components/sections/precision-statement";
import { MethodologySection } from "@/components/sections/methodology";
import { SportsSection } from "@/components/sections/sports";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LabTestedSection />
      <StandardCardsSection />
      <PrecisionStatementSection />
      <MethodologySection />
      <SportsSection />
      <CTASection />
    </main>
  );
}
