"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MainWrapper } from "../../layouts/MainWrapper";
import { SectionLayout } from "../../layouts/SectionLayout";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { TransparentButton } from "../UI/Buttons/TransparentButton";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInX,
  slideInY,
  staggerContainer,
} from "@/app/animations/HeroSection";
import useScrollAnimations from "@/app/hooks/useScrollAnimations";
import useIsMobile from "@/app/hooks/useIsMobile";
import { ContactUsModal } from "../Modals/ContactUsModal";

export const HeroSection = () => {
  const {
    widgetY,
    widgetX,
    phoneX,
    manOneY,
    manTwoY,
    manThreeY,
    manOneX,
    manTwoX,
    manThreeX,
  } = useScrollAnimations();
  const isMobile = useIsMobile();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SectionLayout
      id="hero"
      style={{
        backgroundImage: "url(/hero.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="md:max-h-[800px] md:h-[800px] flex items-center overflow-hidden"
    >
      <MainWrapper>
        <div className="flex justify-between flex-col md:flex-row w-full gap-40 mt-[120px] md:mt-0">
          <div className="md:basis-1/2">
            <h1 className="font-bold text-gray-100 text-5xl mb-5">
              Welcome EasyFluid!
            </h1>
            <p className="text-gray-100 text-base font-normal">
              EasyFluid is a web based service for monitoring your metalworking
              fluids, oils etc.
            </p>
            <div className="flex flex-row items-center w-full md:flex-col md:w-full lg:flex-row gap-5 my-12">
              <BlueButton onClick={toggleModal} block className="w-full">
                Get in Touch!
              </BlueButton>
              <span className="hidden text-gray-200 sm:block">or</span>
              <TransparentButton.a href="https://easycut.zohobookings.com/#/easyfluid" className="text-center">
                Book a Demo!
              </TransparentButton.a>
            </div>
          </div>
          <motion.div
            className="relative md:basis-1/2 w-full md:w-1/2 lg: h-[460px] md:h-[252px]"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              className={`absolute -top-[120px] -right-28 md:-top-20 md:-right-4 lg:-top-[120px] lg:w-3/4`}
              style={{
                zIndex: 10,
                ...(isMobile ? {} : { x: phoneX, willChange: "transform" }),
              }}
              variants={slideInY}
              initial="hidden"
              animate="show"
            >
              <Image
                className="h-auto w-2/3 md:w-full"
                src="/phone_page.png"
                width="335"
                height="530"
                priority
                fetchPriority="low"
                alt="easufluid app icon"
              />
            </motion.div>
            <motion.div
              className="absolute w-1/2 drop-shadow-xl top-0 left-20 sm:left-40 md:-left-6 md:top-28 md:w-4/5 lg:w-auto lg:top-20 lg:left-16 py-2 px-6 rounded-2xl overflow-hidden bg-[#E3F0FF]"
              style={{
                zIndex: 13,
                ...(isMobile
                  ? {}
                  : { y: widgetY, x: widgetX, willChange: "transform" }),
              }}
              variants={slideInX}
              initial="hidden"
              animate="show"
            >
              <Image
                className="h-auto"
                src="/widget.png"
                width="220"
                height="150"
                alt="easyfluid dashboard widget icon"
              />
            </motion.div>
            <motion.div
              className="absolute left-10 bottom-28 rounded-full overflow-hidden md:-left-28 md:-bottom-28 lg:-left-0 lg:-bottom-44"
              style={{
                zIndex: 11,
                ...(isMobile
                  ? {}
                  : { y: manOneY, x: manOneX, willChange: "transform" }),
              }}
              variants={fadeIn}
            >
              <Image
                className="height-unset object-cover"
                src="/man1.jpg"
                width="110"
                height="110"
                alt="human picture 1"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/4 left-0 scale-125 rounded-full overflow-hidden md:-left-28 md:top-28 md:scale-0 lg:-left-34"
              style={{
                zIndex: 12,
                ...(isMobile
                  ? {}
                  : { y: manTwoY, x: manTwoX, willChange: "transform" }),
              }}
              variants={fadeIn}
            >
              <Image
                className="height-unset object-cover"
                src="/man2.jpeg"
                width="64"
                height="64"
                alt="human picture 2"
              />
            </motion.div>
            <motion.div
              className="absolute -top-28 left-20 rounded-full overflow-hidden md:top-0 md:-left-10 lg:-top-16 lg:-left-0"
              style={{
                zIndex: 14,
                ...(isMobile
                  ? {}
                  : { y: manThreeY, x: manThreeX, willChange: "transform" }),
              }}
              variants={fadeIn}
            >
              <Image
                className="height-unset object-cover"
                src="/man3.jpg"
                width="74"
                height="74"
                alt="human picture 3"
              />
            </motion.div>
          </motion.div>
        </div>
      </MainWrapper>
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal} />
    </SectionLayout>
  );
};
