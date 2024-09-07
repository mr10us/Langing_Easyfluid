"use client";

import { App, ConfigProvider, Tour } from "antd";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CalculationSection } from "../components/Sections/CalculationSection";
import { CalculatorBaner } from "../components/Sections/CalculatorBaner";
import { CalculatorHero } from "../components/Sections/CalculatorHero";
import { TourContext } from "../components/Calculator/contexts/TourContext";
import { useTour } from "../hooks/useTour";

function Calculator() {
  const tourData = useTour();

  return (
    <>
      <Header fixed={false} />
      <main>
        <ConfigProvider theme={{ token: { colorPrimary: "#116ACC" } }}>
          <App>
            <TourContext.Provider value={tourData}>
              <CalculatorHero />
              <CalculatorBaner />
              <CalculationSection />
            </TourContext.Provider>
          </App>
          <Tour
            disabledInteraction
            type="primary"
            open={tourData.startTour}
            onClose={tourData.toggleTour}
            steps={tourData.steps}
          />
        </ConfigProvider>
      </main>
      <Footer />
    </>
  );
}

export default Calculator;
