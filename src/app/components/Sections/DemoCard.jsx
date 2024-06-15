import { SectionCard } from "@/app/layouts/SectionCard";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import Image from "next/image";

export const DemoCard = () => {
  return (
        <SectionCard className="overflow-hidden flex flex-col bg-demo-gradient py-6 px-6 gap-6 lg:max-h-[315px] lg:h-[315px] md:flex-row  md:justify-between lg:px-20">
          <div className="flex flex-col gap-5 w-full self-center justify-between text-center lg:w-1/2 lg:text-start">
            <h2 className="font-medium h2 text-gray-dark w-full">
              How about a demo?
            </h2>
            <Typography className="text-gray">
            <span className="font-bold">Sure!</span> We will walk-through all the steps, show how it works and answer all your questions..
            </Typography>
            <BlueButton.a className="lg:mx-0 mx-auto">Book a Demo!</BlueButton.a>
          </div>
          <div className="relative hidden w-1/2 lg:block">
            <Image
              className="absolute scale-125 top-8"
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
