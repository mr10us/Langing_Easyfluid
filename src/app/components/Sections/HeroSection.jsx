"use client";

import React from "react";
import Image from "next/image";
import { MainWrapper } from "../../layouts/MainWrapper";
import { SectionLayout } from "../../layouts/SectionLayout";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { TransparentButton } from "../UI/Buttons/TransparentButton";
import { motion, useTransform, useScroll } from "framer-motion";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  const widgetY = useTransform(scrollY, [0, 800], [0, -250]);
  const widgetX = useTransform(scrollY, [0, 800], [0, 80]);

  const phoneX = useTransform(scrollY, [0, 800], [0, 100]);

  const manOneY = useTransform(scrollY, [0, 800], [0, -400]);
  const manTwoY = useTransform(scrollY, [0, 800], [0, -320]);
  const manThreeY = useTransform(scrollY, [0, 800], [0, -100]);

  const manOneX = useTransform(scrollY, [0, 800], [0, 220]);
  const manTwoX = useTransform(scrollY, [0, 800], [0, 180]);
  const manThreeX = useTransform(scrollY, [0, 800], [0, 200]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const slideInY = {
    hidden: { y: 100 },
    show: { y: 0, transition: { type: "spring", duration: 1.2 } },
  };
  const slideInX = {
    hidden: { x: 100 },
    show: { x: 0, transition: { type: "spring", duration: 1 } },
  };

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
          <motion.div
            className="relative basis-1/2"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              className="absolute -top-[120px] -right-4"
              style={{ x: phoneX, willChange: "transform", zIndex: 10 }}
              variants={slideInY}
              initial="hidden"
              animate="show"
            >
              <Image
                src="/phone_page.png"
                width="335"
                height="530"
                priority
                fetchPriority="low"
                alt="easufluid app icon"
              />
            </motion.div>
            <motion.div
              className="absolute drop-shadow-xl top-28 left-16 py-2 px-6 rounded-2xl overflow-hidden bg-[#E3F0FF]"
              style={{
                y: widgetY,
                x: widgetX,
                willChange: "transform",
                zIndex: 13,
              }}
              variants={slideInX}
              initial="hidden"
              animate="show"
            >
              <Image
                src="/widget.png"
                width="220"
                height="150"
                alt="easyfluid dashboard widget icon"
              />
            </motion.div>
            <motion.div
              className="absolute left-0 -bottom-48"
              style={{
                y: manOneY,
                x: manOneX,
                willChange: "transform",
                zIndex: 11,
              }}
              variants={fadeIn}
            >
              <Image
                src="/man1.png"
                width="110"
                height="110"
                alt="human picture 1"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 translate-y-1/2 -left-14"
              style={{
                y: manTwoY,
                x: manTwoX,
                willChange: "transform",
                zIndex: 12,
              }}
              variants={fadeIn}
            >
              <Image
                src="/man2.png"
                width="64"
                height="64"
                alt="human picture 2"
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{
                y: manThreeY,
                x: manThreeX,
                willChange: "transform",
                zIndex: 14,
              }}
              variants={fadeIn}
            >
              <Image
                src="/man3.png"
                width="74"
                height="74"
                alt="human picture 3"
              />
            </motion.div>
          </motion.div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
