import Image from "next/image";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { SectionCard } from "@/app/layouts/SectionCard";
import { TransparentButton } from "../UI/Buttons/TransparentButton";

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
        <Typography className="text-gray">
          No, you may opt in for just logging the data and monitoring your key
          indicators, setting aside deviation corrections calculations.
        </Typography>
        <div className="flex justify-center flex-col sm:flex-row gap-5 mt-12">
          <BlueButton.a
            href="https://forms.zohopublic.com/easycut/form/Getintouch/formperma/Kp71kdB60A8UPI5FTskmhwZ5XNczZ1iC03HZOElnsLQ"
            block
            className="md:w-[calc(50%-20px)]"
          >
            Get in Touch!
          </BlueButton.a>
          <TransparentButton.a
            href="https://easycut.zohobookings.com/#/easyfluid"
            className="!bg-gray-400 hover:border-gray-400 md:w-[calc(50%-20px)]"
          >
            Book a Demo!
          </TransparentButton.a>
        </div>
      </div>
    </SectionCard>
  );
};
