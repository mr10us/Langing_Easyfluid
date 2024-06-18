"use client";

import React, { useState } from "react";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { SectionCard } from "@/app/layouts/SectionCard";
import { ContactUsModal } from "../Modals/ContactUs";

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
      <TextWrapper className="py-20 flex flex-col gap-4 items-center">
        <h2 className="font-medium h2 text-gray-100 text-center w-11/12 lg:w-full">
          Well, sounds good. How to start?
        </h2>
        <p className="text-center w-11/12 lg:w-1/2 text-gray-100 text-lg">
          We provide our customers with assisted setup, that means, we add your
          machines and your cutting fluid. We setup your users, their rights,
          and you are good to go! We will walk-through all the steps, show how
          it works and answer all your questions.
        </p>
        <BlueButton style={{ width: "60%", justifyContent: "center" }} onClick={toggleModal}>
          Contact Us
        </BlueButton>
      </TextWrapper>
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
    </SectionCard>
  );
};
