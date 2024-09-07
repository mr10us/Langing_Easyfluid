"use client";

import { SectionCard } from "@/app/layouts/SectionCard";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import Image from "next-export-optimize-images/image";
import { TransparentButton } from "../UI/Buttons/TransparentButton";
import { ContactUsModal } from "../Modals/ContactUsModal";
import { useState } from "react";

export const DemoCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SectionCard className="overflow-hidden flex flex-col bg-demo-gradient py-6 px-6 gap-6 md:flex-row md:justify-between head:gap-16 lg:px-20">
      <div className="flex flex-col gap-5 w-full self-center justify-between text-center lg:w-1/2 lg:text-start">
        <h2 className="font-medium h2 text-gray-dark w-full">
          How about a demo?
        </h2>
        <Typography className="text-gray">
          <span className="font-bold">Sure!</span> We will walk-through all the
          steps, show how it works and answer all your questions..
        </Typography>
        <div className="flex items-center justify-center flex-row text-center gap-3">
          <BlueButton
            className="w-full"
            onClick={toggleModal}
            block
          >
            Get in Touch!
          </BlueButton>
          <span className="hidden text-gray-dark sm:block">or</span>
          <TransparentButton.a
            href="https://easycut.zohobookings.com/#/easyfluid"
            className="text-white !bg-gray-500 hover:border-gray-400"
          >
            Book a Demo!
          </TransparentButton.a>
        </div>
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
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
    </SectionCard>
  );
};
