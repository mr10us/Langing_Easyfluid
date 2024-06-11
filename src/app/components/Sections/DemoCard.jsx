import { SectionCard } from "@/app/layouts/SectionCard";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import Image from "next/image";

export const DemoCard = () => {
  return (
        <SectionCard className="max-h-[275px] h-[275px] overflow-hidden flex flex-col md:flex-row gap-6 md:justify-between bg-demo-gradient px-20">
          <div className="flex flex-col gap-5 md:w-1/2 w-full self-center justify-between">
            <h2 className="font-medium text-5xl text-gray-dark leading-[4.5rem]">
              How about a demo?
            </h2>
            <Typography>
            <span className="font-bold">Sure!</span> We will walk-through all the steps, show how it works and answer all your questions..
            </Typography>
            <BlueButton.a>Book a Demo!</BlueButton.a>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              className="mx-auto mt-4"
              src="/laptop_3d.png"
              width="560"
              height="380"
              alt="Easyflid report example"
              title="Easyflid report example"
            />
          </div>
        </SectionCard>
  );
};
