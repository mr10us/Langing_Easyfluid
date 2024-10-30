import { App, ConfigProvider } from "antd";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CalculationSection } from "../components/Sections/CalculationSection";

function Calculator() {
  return (
    <>
      <Header fixed={false} />
      <main>
        <ConfigProvider theme={{ token: { colorPrimary: "#116ACC" } }}>
          <App>
            <CalculationSection />
          </App>
        </ConfigProvider>
      </main>
      <Footer />
    </>
  );
}

export default Calculator;
