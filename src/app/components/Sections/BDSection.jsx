import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import Image from "next/image";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { SectionCard } from "@/app/layouts/SectionCard";

export const BDSection = () => {
  return (
    <SectionLayout className="py-16 mb-10">
      <MainWrapper>
        <SectionCard className="max-h-[375px] overflow-hidden flex flex-col md:flex-row gap-6 md:justify-between bg-bd-gradient pr-20">
          <div className="md:w-1/2 w-full">
            <Image
            className="mx-auto mt-2"
              src="/report_3D.png"
              width="340"
              height="500"
              alt="Easyfli report example"
              title="Easyfli report example"
            />
          </div>
          <div className="flex flex-col gap-5 py-10 md:w-1/2 w-full self-center">
            <h2 className="font-medium text-5xl text-gray-dark leading-[4.5rem]">
              Do I have to use these calculations?
            </h2>
            <Typography>
              No, you may opt in for just logging the data and monitoring your
              key indicators, setting aside deviation corrections calculations.
            </Typography>
            <BlueButton.a block>Book a Demo!</BlueButton.a>
          </div>
        </SectionCard>
      </MainWrapper>
    </SectionLayout>
  );
};
