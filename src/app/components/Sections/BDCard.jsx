import Image from "next/image";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { SectionCard } from "@/app/layouts/SectionCard";

export const BDCard = () => {
  return (
        <SectionCard className=" overflow-hidden flex flex-col-reverse md:flex-row gap-6 md:justify-between bg-bd-gradient px-10 md:px-0 md:pr-20">
          <div className="md:w-1/2 w-full relative h-[250px]">
            <Image
              className="h-auto absolute -top-6 md:top-6 left-1/2 -translate-x-1/2"
              src="/report_3D.png"
              width="340"
              height="500"
              alt="Easyfli report example"
              title="Easyfli report example"
            />
          </div>
          <div className="flex flex-col gap-5 py-10 md:w-1/2 w-full self-center text-center md:text-start">
            <h2 className="font-medium text-4xl md:text-5xl text-gray-dark md:leading-[4.5rem]">
              Do I have to use these calculations?
            </h2>
            <Typography>
              No, you may opt in for just logging the data and monitoring your
              key indicators, setting aside deviation corrections calculations.
            </Typography>
            <BlueButton.a block>Book a Demo!</BlueButton.a>
          </div>
        </SectionCard>
  );
};
