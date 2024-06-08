import { Header } from "./components/Header/Header";
import { FeaturesSection } from "./components/Sections/FeaturesSection";
import { HeroSection } from "./components/Sections/HeroSection";
import { WTPSection } from "./components/Sections/WTPSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WTPSection />
      <FeaturesSection />
    </main>
  );
}
