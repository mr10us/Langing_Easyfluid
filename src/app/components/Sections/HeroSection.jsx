import Image from "next/image";
import { MainWrapper } from "../../layouts/MainWrapper";
import { SectionLayout } from "../../layouts/SectionLayout";
import { Header } from "../Header/Header";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { TransparentButton } from "../UI/Buttons/TransparentButton";

export const HeroSection = () => {
  return (
    <SectionLayout
      style={{
        backgroundImage: "url(/hero.svg)",
        backgroundRepeat: "norepeat",
        backgroundSize: "cover",
      }}
      className="max-h-[800px] h-[800px] flex items-center"
    >
      <MainWrapper>
        <div className="flex justify-between w-full gap-40">
          <div className="basis-1/2">
            <h1 className="font-bold text-gray-100 text-5xl mb-5">
              Welcome EasyFluid!
            </h1>
            <p className="text-gray-100 text-base font-normal">
              EasyFluid is a web based service for monitoring your metalworking
              fluids, oils etc.
            </p>
            <div className="flex gap-5 my-12">
              <BlueButton>Go to EasyFluid</BlueButton>
              <TransparentButton>Book a Demo!</TransparentButton>
            </div>
          </div>
          <div className="relative basis-1/2">
            <div className="absolute -top-[120px] -right-4">
              <Image
                src="/phone_page.png"
                width="335"
                height="530"
                priority
                fetchPriority="low"
                alt="easufluid app icon"
              />
            </div>
            <div className="absolute top-28 left-16 py-2 px-6 rounded-2xl overflow-hidden bg-[#E3F0FF]">
              <Image
                src="/widget.png"
                width="220"
                height="150"
                alt="easyfluid dashboard widget icon"
              />
            </div>
            <div className="absolute left-0 -bottom-48">
              <Image
                src="/man1.png"
                width="110"
                height="110"
                alt="human picture 1"
              />
            </div>
            <div className="absolute top-1/2 translate-y-1/2 -left-14">
              <Image
                src="/man2.png"
                width="64"
                height="64"
                alt="human picture 2"
              />
            </div>
            <div className="absolute">
              <Image
                src="/man3.png"
                width="74"
                height="74"
                alt="human picture 3"
              />
            </div>
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
