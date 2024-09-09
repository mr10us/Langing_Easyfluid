import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { BlueButton } from "../UI/Buttons/BlueButton";
import Image from "next-export-optimize-images/image";

export const CalculatorHero = () => {
  return (
    <SectionLayout style={{ paddingBlock: 24, backgroundColor: "#F8F8F8"}}>
      <MainWrapper>
        <div className="flex flex-col gap-8 justify-between pb-8 lg:flex-row lg:items-center lg:gap-36">
          <Image
            className="size-1/2 mx-auto mix-blend-multiply"
            priority
            src="/machine.png"
            alt="machine image"
            title="machine image"
            width="450"
            height="450"
          />
          <div className="font-heebo text-gray-700 flex gap-4 flex-col">
            <h1 className="text-4xl font-bold">
              Try the free calculator from <span className="text-blue">EasyFluid</span>!
            </h1>
            <p>Try free detailed calculation for one machine</p>
            <BlueButton.a target="" href="#calc" className="!w-fit">Try free calculation</BlueButton.a>
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
