"use client";

import { SectionCard } from "@/app/layouts/SectionCard";
import Image from "next/image";
import Done from "../../../../public/done.svg";
import { BlueButton } from "../UI/Buttons/BlueButton";
import useIsMobile from "@/app/hooks/useIsMobile";

const benefits = [
  "you save on cutting fluid concentrate when you need to add water",
  "you avoid a situation when after topping-up you and up with too low concetration, thus, reducing risks of bacteria growth, corrosion etc.",
];

export const EFDemoCard = () => {
  const isMobile = useIsMobile();

  return (
    <SectionCard
      className="flex flex-col lg:flex-row gap-8 py-[90px] px-[50px] justify-center items-center"
      style={{
        backgroundColor: "#00346E",
        backgroundImage: "url(/EFDemoBG.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "right",
      }}
    >
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h2 className="h2 font-bold text-gray-100">
          Lucky enough, <span className="text-blue">EasyFluid</span> comes to
          the rescue!
        </h2>
        {isMobile ? <Pseudo3DImage /> : null}
        <p className="font-medium text-lg text-gray-100">
          It calculates everything - all you need is to enter refractometer
          readings and fluid level in the machine sump! As a result:
        </p>
        <div>
          {benefits.map((text, index) => (
            <span
              key={index}
              className="flex items-center gap-4 font-light text-gray-100"
            >
              <div>
                <Done />
              </div>
              {text}
            </span>
          ))}
        </div>
        <BlueButton.a block withArrow>
          Go to EasyFluid
        </BlueButton.a>
      </div>
      {isMobile ? null : <Pseudo3DImage />}
    </SectionCard>
  );
};

const Pseudo3DImage = () => {
  return (
    <div className="lg:w-1/2">
      <Image
        src="/3d_easyfluid.png"
        width="520"
        height="410"
        alt="Easyfluid App"
        title="Easyfluid App"
      />
    </div>
  );
};
