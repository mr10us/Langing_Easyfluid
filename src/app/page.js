import { Header } from "./components/Header/Header";
import { BDSection } from "./components/Sections/BDSection";
import { DemoSection } from "./components/Sections/DemoSection";
import { EFDemoSection } from "./components/Sections/EFDemoSection";
import { FeaturesSection } from "./components/Sections/FeaturesSection";
import { HTSSection } from "./components/Sections/HTSSection";
import { HeroSection } from "./components/Sections/HeroSection";
import { PricingSection } from "./components/Sections/PricingSection";
import { SMMSection } from "./components/Sections/SMMSection";
import { ScenarioSection } from "./components/Sections/ScenarioSection";
import { SpecialFSection } from "./components/Sections/SpecialFSection";
import { TediousSection } from "./components/Sections/TediousSection";
import { WTPSection } from "./components/Sections/WTPSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WTPSection />
      <FeaturesSection />
      <SpecialFSection />
      <SMMSection />
      <ScenarioSection />
      <TediousSection />
      <EFDemoSection />
      <BDSection />
      <HTSSection />
      <DemoSection />
      <PricingSection />
    </main>
  );
}
