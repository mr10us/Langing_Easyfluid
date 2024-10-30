import { CalculatorScreens } from "@/app/calculator/_components/CalculatorScreens";
import { ParametersContext } from "@/app/calculator/ParametersContext";
import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Underlined } from "@/app/calculator/_components/Underlined";

export const CalculationSection = () => {
  return (
    <SectionLayout>
      <MainWrapper className="tracking-wide flex flex-col gap-4 py-10 text-gray-950">
        <h1 className="text-3xl font-bold">
          In order to give you the <Underlined>correct results</Underlined>, we need some data about your
          machine and cutting fluid you use.
        </h1>

        <p>
          Let's create the model of your first machine that will be used in this
          calculator. The data you enter will be stored in our system if you
          want to so that you will have access to this model down the road and
          use it for one machine - for free. Or just calculate corrections every
          time you use this calculator.
        </p>

        <ParametersContext>
          <CalculatorScreens />
        </ParametersContext>
      </MainWrapper>
    </SectionLayout>
  );
};
