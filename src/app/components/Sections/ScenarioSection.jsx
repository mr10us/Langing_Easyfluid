import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";
import React from "react";
import Image from "next-export-optimize-images/image";

/**
 * ScenarioSection component.
 * This component renders the scenario section of the page.
 * It contains two scenario cards, ScenarioOne and ScenarioTwo.
 *
 * @return {JSX.Element} The rendered scenario section.
 */
export const ScenarioSection = () => {
  // Render the scenario section
  return (
    // Apply styling to the section
    <SectionLayout className="bg-white py-16">
      {/* Wrap the main content */}
      <MainWrapper>
        {/* Apply styling to the container */}
        <div className="bg-scenatio-gradient rounded-[20px] flex flex-col gap-20 py-10 px-6 shadow-md hover:shadow-2xl transition-shadow duration-500">
          {/* Render the first scenario card */}
          <ScenarioOne />
          {/* Render the second scenario card */}
          <ScenarioTwo />
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};

const scenatioCardsOne = [
  {
    title: "85%",
    content: "Machine tank is full on",
    arrow: "scenario-down",
  },
  {
    title: "8%",
    content: "Concentration",
    arrow: "scenario-up",
  },
];

const scenarioTextOne = [
  {
    text: "If you top up with 3% (default mixer concentration), you will end up with concentration of 7,25%.",
    span: "Not a big deal?",
    color: "gray",
    weight: "regular",
  },
  {
    text: "Indeed, but you could still add ca. 20L of water, saving some money on concentrate and get spot on 7% as a result. Here’s a very typical situation of one of our customers. Real field data, and believe it or not - this happens all the time everywhere.",
    color: "gray",
    weight: "regular",
  },
  {
    text: "Here’s a very typical situation of one of our customers. Real field data, and believe it or not - this happens all the time everywhere:",
    color: "gray",
    weight: "medium",
  },
];

/**
 * Render the scenario 1 component
 *
 * This component displays a scenario where the concentration of the machine
 * tank is low after a few days of operation.
 *
 * @returns {JSX.Element} The rendered scenario 1 component
 */
const ScenarioOne = () => {
  return (
    <TextWrapper className="flex gap-6 flex-col items-center">
      {/* Heading */}
      <Typography.H2Medium className="text-gray-dark text-2xl">
        Scenario 1
      </Typography.H2Medium>
      <p className="font-bold text-2xl text-gray">
        After a few days you have a situation like this:
      </p>
      {/* Cards */}
      <div className="flex justify-between w-full gap-5">
        {/* Render the cards */}
        {scenatioCardsOne.map((card) => (
          <Card
            key={card.title}
            className="relative w-1/2 flex flex-col gap-4 lg:gap-10 bg-white"
          >
            {/* Arrow */}
            <svg
              className={`${card.arrow} absolute top-5 right-5`}
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L15.0711 18.3431C15.4616 17.9526 15.4616 17.3195 15.0711 16.9289C14.6805 16.5384 14.0474 16.5384 13.6569 16.9289L8 22.5858L2.34315 16.9289C1.95262 16.5384 1.31946 16.5384 0.928932 16.9289C0.538408 17.3195 0.538408 17.9526 0.928932 18.3431L7.29289 24.7071ZM7 0L7 24H9L9 0L7 0Z"
                fill="#FD4E5D"
              />
            </svg>
            {/* Card title */}
            <p
              className={`font-inter text-2xl font-bold font ${
                card.arrow.includes("down") ? "text-red" : "text-green"
              }`}
            >
              {card.title}
            </p>
            {/* Card content */}
            <p className="text-xl font-medium text-gray-dark">{card.content}</p>
          </Card>
        ))}
      </div>
      {/* Text */}
      {scenarioTextOne.map((item, index) => (
        <React.Fragment key={index}>
          <p className={`text-${item.color} font-${item.weight} self-start`}>
            {item.text}{" "}
            {item?.span ? <span className="text-blue">{item.span}</span> : null}
          </p>
        </React.Fragment>
      ))}

      {/* Image */}
      <Image
        src="/report.png"
        width="510"
        height="415"
        alt="Easyfluid PDF report"
        title="Easyfluid PDF report"
      />
      {/* Text */}
      <p className="text-justify w-5/6 text-gray">
        In this example total amount of water that can be added to machines
        sumps is 406L for 13 machines. With topping-up concentration of 3% you
        save 12L of concentrate, or kinda €85. Given, that average consumption
        of a machine per day is ~20L, you may expect similar savings basically
        every week or so.
      </p>
    </TextWrapper>
  );
};

const scenatioCardsTwo = [
  {
    title: "50%",
    content: "Machine tank is full on",
    arrow: "scenario-down",
  },
  {
    title: "9%",
    content: "Concentration is",
    arrow: "scenario-up",
  },
];

const scenarioTextTwo = [
  {
    text: "Then if you top-up from mixer, you will end up with concentration of 6% which is well below the target.",
    color: "gray",
    weight: "regular",
  },
  {
    text: "To compensate this deviation you need to add 2,3L of concentrate so that you will have exactly 7% afterwards. By doing this you decrease risks of bacteria growth, corrosion and short cutting tool life.",
    color: "gray",
    weight: "regular",
  },
  {
    text: "All these figures may be way more substantial if you take a machine with a sump of, say, 2 m3.And depending on operators responsibility level the risks related to deviations may also be very significant.What if your cutting fluid contains a lot of tramp oil?",
    color: "gray",
    weight: "regular",
  },
  {
    text: "In this case your refractometer shows you higher concentration, than it really is, and you are supposed to perform so-called titration in order to find the correct one and calculate the offset, using it every next time to adjust the refractometer reading.",
    color: "gray",
    weight: "regular",
  },
  {
    text: "This offset you apply to a machine in Easyfluid it will be used in all calculations down the road.",
    color: "gray",
    weight: "regular",
  },
];

/**
 * Render the scenario 2 component
 *
 * This component displays a scenario where the concentration of the machine
 * tank is low due to operator's inactivity.
 *
 * @returns {JSX.Element} The rendered scenario 2 component
 */
const ScenarioTwo = () => {
  return (
    // Wrapper for the scenario section
    <TextWrapper className="flex gap-6 flex-col items-center">
      {/* Heading */}
      <Typography.H2Medium className="text-gray-dark text-2xl">
        Scenario 2
      </Typography.H2Medium>
      {/* Description */}
      <p className="font-bold text-2xl text-gray text-center">
        What if your operator has not been topping up for a while and you get a
        situation like this:
      </p>
      {/* Cards */}
      <div className="flex justify-between w-full gap-5">
        {/* Render the cards */}
        {scenatioCardsTwo.map((card) => (
          <Card
            key={card.title}
            className="relative w-1/2 flex flex-col gap-4 lg:gap-10 bg-white"
          >
            {/* Arrow */}
            <svg
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              className={`${card.arrow} absolute top-5 right-5`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L15.0711 18.3431C15.4616 17.9526 15.4616 17.3195 15.0711 16.9289C14.6805 16.5384 14.0474 16.5384 13.6569 16.9289L8 22.5858L2.34315 16.9289C1.95262 16.5384 1.31946 16.5384 0.928932 16.9289C0.538408 17.3195 0.538408 17.9526 0.928932 18.3431L7.29289 24.7071ZM7 0L7 24H9L9 0L7 0Z"
                fill="#FD4E5D"
              />
            </svg>
            {/* Card title */}
            <p
              className={`font-inter text-2xl font-bold font ${
                card.arrow.includes("down") ? "text-red" : "text-green"
              }`}
            >
              {card.title}
            </p>
            {/* Card content */}
            <p className="text-xl font-medium text-gray-dark">{card.content}</p>
          </Card>
        ))}
      </div>
      {/* Text */}
      {scenarioTextTwo.map((item, index) => (
        <React.Fragment key={index}>
          {/* Text item */}
          <p className={`text-${item.color} font-${item.weight} self-start`}>
            {item.text}{" "}
            {item?.span ? <span className="text-blue">{item.span}</span> : null}
          </p>
        </React.Fragment>
      ))}
    </TextWrapper>
  );
};
