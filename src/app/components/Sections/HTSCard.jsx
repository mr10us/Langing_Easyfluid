"use client";

import React, { useState } from "react";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { SectionCard } from "@/app/layouts/SectionCard";
import { ContactUsModal } from "../Modals/ContactUsModal";
import { TransparentButton } from "../UI/Buttons/TransparentButton";

export const HTSCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SectionCard
      style={{ backgroundImage: "url('/bg-2.svg')", backgroundSize: "cover" }}
      id="contacts"
    >
      <TextWrapper className="py-10 md:py-16 flex flex-col gap-4 items-center">
        <h2 className="font-medium h2 text-gray-100 text-center w-11/12 lg:w-full">
          Well, sounds good. How to start?
        </h2>
        <p className="text-center w-11/12 lg:w-1/2 text-gray-100 text-lg">
          We provide our customers with assisted setup, that means, we add your
          machines and your cutting fluid. We setup your users, their rights,
          and you are good to go! We will walk-through all the steps, show how
          it works and answer all your questions.
        </p>
        <div
        className="flex items-center justify-center flex-col sm:flex-row gap-3 w-3/5">
          <BlueButton className="w-full" onClick={toggleModal}>
            Contact Us
          </BlueButton>
          <span className="hidden text-gray-200 sm:block">or</span>
          <TransparentButton.a
            href="https://easycut.zohobookings.com/#/easyfluid"
            className="!w-full text-white !bg-gray-500 border-transparent hover:border-gray-400 md:w-[calc(50%-20px)]"
          >
            Book a Demo!
          </TransparentButton.a>
        </div>
      </TextWrapper>
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
    </SectionCard>
  );
};
