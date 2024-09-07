"use client"

import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { TransparentButton } from "../UI/Buttons/TransparentButton";
import { useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";

const cards = [
  {
    title: "Monitoring",
    content: [
      "Keep track of various parameters of your fluids like concentration, pH value, machine sump, level etc.",
      "Keep track on stock levels of your fluids",
      "Create your own parameters when needed",
      "Set up various ranges of different parameters like cutting fluid target concentration and set them as, say, “recommended”, “imperfect” or “not allowed”",
    ],
  },
  {
    title: "Reporting",
    content: [
      "Generate various reports like “Report on Machine” or “Report on date”",
      "Create alerts when something goes wrong and track them",
      "Add different attachments to alerts to explain what’s wrong",
      "Set up different alerts levels with corresponding notification to different managers",
    ],
  },
  {
    title: "Calculations",
    content: [
      "Calculate required top-up concentration per machine based on actual machine sump level",
      "Calculate corrections to the mixer (more on that below)",
      "Perform various calculations with parameters like Concentration =RefractometerReading * OpticalFactor or any other that you would like to create",
    ],
  },
];

/**
 * FeaturesSection component displays the features of the EasyFluid platform.
 * It contains a list of cards, each representing a feature.
 * Each card has a title and a list of content describing the feature.
 * The FeaturesSection also contains a button to navigate to the EasyFluid platform.
 *
 * @returns {JSX.Element} The FeaturesSection component
 */
export const FeaturesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    // Wrap the section in a layout component
    <SectionLayout
      style={{
        backgroundColor: "#FFF",
      }}
      className="lg:max-h-[615px] lg:h-[615px]"
      id="features"
    >
      {/* Wrap the main content in a wrapper component */}
      <MainWrapper
        style={{
          backgroundImage: "url(/map.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          height: "100%",
        }}
      >
        {/* Display the title of the section */}
        <Typography.H2Bold className="text-gray-dark pt-10">
          Features
        </Typography.H2Bold>
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 md:justify-center md:items-center gap-5 h-fit mt-7 mb-12">
          {/* Map over the cards array to display each card */}
          {cards.map((card) => (
            <Card
              className="h-full w-full self-start p-5 shadow-xl bg-white bg-opacity-40"
              key={card.title}
            >
              {/* Display the title of the card */}
              <Typography.H2Medium style={{ color: "#116ACC" }}>
                {card.title}
              </Typography.H2Medium>
              <ul className="text-gray-500 list-disc text-sm mt-5">
                {/* Map over the content array to display each item in the content list */}
                {card.content.map((item, index) => (
                  <li key={index} className="ml-5 my-2 tracking-wider">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        {/* Display a button to navigate to the EasyFluid platform */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-5 my-12">
            <BlueButton block className="md:w-[calc(50%-20px)]" onClick={toggleModal}>
              Get in Touch!
            </BlueButton>
            <span className="hidden text-gray-dark sm:block">or</span>
            <TransparentButton.a href="https://easycut.zohobookings.com/#/easyfluid" className="text-white !bg-gray-500 hover:border-gray-400 md:w-[calc(50%-20px)]">
              Book a Demo!
            </TransparentButton.a>
          </div>
      </MainWrapper>
      <ContactUsModal isOpen={isModalOpen} onClose={toggleModal}/>
    </SectionLayout>
  );
};
