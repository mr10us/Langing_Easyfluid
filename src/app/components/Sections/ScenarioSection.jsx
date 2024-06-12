import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { TextWrapper } from "@/app/layouts/TextWrapper";
import { Typography } from "../UI/Typography";
import { Card } from "../UI/Card";
import Arrow from "../../../../public/arrow.svg";
import React from "react";
import Image from "next/image";

export const ScenarioSection = () => {
  return (
    <SectionLayout className="bg-white py-16">
      <MainWrapper>
        <div className="bg-scenatio-gradient rounded-[20px] flex flex-col gap-20 py-10 px-6 shadow-md hover:shadow-2xl transition-shadow duration-500">
          <ScenarioOne />
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

const ScenarioOne = () => {
  return (
    <TextWrapper className="flex gap-6 flex-col items-center">
      <Typography.H2Medium className="text-gray-dark text-2xl">
        Scenario 1
      </Typography.H2Medium>
      <p className="font-bold text-2xl text-gray">
        After a few days you have a situation like this:
      </p>
      <div className="flex justify-between w-full gap-5">
        {scenatioCardsOne.map((card) => (
          <Card key={card.title} className="relative w-full flex flex-col gap-4 lg:gap-10 bg-white">
            <Arrow className={`${card.arrow} absolute top-5 right-5`} />
            <p
              className={`font-inter text-2xl font-bold font ${
                card.arrow.includes("down") ? "text-red" : "text-green"
              }`}
            >
              {card.title}
            </p>
            <p className="text-xl font-medium text-gray-dark">{card.content}</p>
          </Card>
        ))}
      </div>
      {scenarioTextOne.map((item, index) => (
        <React.Fragment key={index}>
          <p className={`text-${item.color} font-${item.weight} self-start`}>
            {item.text}{" "}
            {item?.span ? <span className="text-blue">{item.span}</span> : null}
          </p>
        </React.Fragment>
      ))}

      <Image
        src="/report.png"
        width="510"
        height="415"
        alt="Easyfluid PDF report"
        title="Easyfluid PDF report"
      />
      <p className="text-justify w-5/6">
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

const ScenarioTwo = () => {
  return (
    <TextWrapper className="flex gap-6 flex-col items-center">
      <Typography.H2Medium className="text-gray-dark text-2xl">
        Scenario 2: opposite
      </Typography.H2Medium>
      <p className="font-bold text-2xl text-gray text-center">
        What if your operator has not been topping up for a while and you get a
        situation like this:
      </p>
      <div className="flex justify-between w-full gap-5">
        {scenatioCardsTwo.map((card) => (
          <Card key={card.title} className="relative w-full flex flex-col gap-4 lg:gap-10 bg-white">
            <Arrow className={`${card.arrow} absolute top-5 right-5`} />
            <p
              className={`font-inter text-2xl font-bold font ${
                card.arrow.includes("down") ? "text-red" : "text-green"
              }`}
            >
              {card.title}
            </p>
            <p className="text-xl font-medium text-gray-dark">{card.content}</p>
          </Card>
        ))}
      </div>
      {scenarioTextTwo.map((item, index) => (
        <React.Fragment key={index}>
          <p className={`text-${item.color} font-${item.weight} self-start`}>
            {item.text}{" "}
            {item?.span ? <span className="text-blue">{item.span}</span> : null}
          </p>
        </React.Fragment>
      ))}
    </TextWrapper>
  );
};
