"use client";

import { SectionCard } from "@/app/layouts/SectionCard";
import Image from "next-export-optimize-images/image";
import { BlueButton } from "../UI/Buttons/BlueButton";
import useIsMobile from "@/app/hooks/useIsMobile";
import { TransparentButton } from "../UI/Buttons/TransparentButton";
import { useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";

const benefits = [
  "you save on cutting fluid concentrate when you need to add water",
  "you avoid a situation when after topping-up you and up with too low concetration, thus, reducing risks of bacteria growth, corrosion etc.",
];

export const EFDemoCard = () => {
  const isMobile = useIsMobile();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SectionCard
      className="flex flex-col lg:flex-row gap-8 py-14 md:py-[90px] px-[50px] justify-center items-center"
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
        <div className="grid grid-rows-2 gap-2">
          {benefits.map((text, index) => (
            <span
              key={index}
              className="grid grid-cols-[auto,1fr] items-center gap-4 font-light text-gray-100"
            >
              <div className="w-[22px] h-[22px]">
                <Image src="/done.svg" width="22" height="22" alt="done image" title="done image" />
              </div>
              {text}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-5 mt-12">
          <BlueButton
            onClick={toggleModal}
            block
            className="md:w-[calc(50%-20px)]"
          >
            Get in Touch!
          </BlueButton>
          <span className="hidden text-gray-200 sm:block">or</span>
          <TransparentButton.a
            href="https://easycut.zohobookings.com/#/easyfluid"
            className="md:w-[calc(50%-20px)]"
          >
            Book a Demo!
          </TransparentButton.a>
        </div>
      </div>
      {isMobile ? null : <Pseudo3DImage />}
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
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
