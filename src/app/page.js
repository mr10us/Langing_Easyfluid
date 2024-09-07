import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CardsSection } from "./components/Sections/CardsSection";
import { FeaturesSection } from "./components/Sections/FeaturesSection";
import { HeroSection } from "./components/Sections/HeroSection";
import { PricingSection } from "./components/Sections/PricingSection";
import { SMMSection } from "./components/Sections/SMMSection";
import { ScenarioSection } from "./components/Sections/ScenarioSection";
import { SpecialFSection } from "./components/Sections/SpecialFSection";
import { TediousSection } from "./components/Sections/TediousSection";
import { WTPSection } from "./components/Sections/WTPSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WTPSection />
        <FeaturesSection />
        <SpecialFSection />
        <SMMSection />
        <ScenarioSection />
        <TediousSection />
        <CardsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
