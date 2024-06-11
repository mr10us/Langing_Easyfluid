import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Card } from "../UI/Card";
import React from "react";
import Lock from "../../../../public/lock.svg";
import Graph from "../../../../public/graph.svg";


const cards = [
  {
    title: "Rate per machine added",
    price: "5,00 €",
    content: "incl.EasyFluid remote monitoring.",
    icon: <Lock />,
  },
  {
    title: "Flat rate per company",
    price: "19,90 €",
    content: "per month per company.",
    icon: <Graph />,
  },
];

export const PricingSection = () => {
  return (
    <SectionLayout className="bg-[#f8f8f8] py-16" id="pricing">
      <MainWrapper>
        <h2 className="text-center text-5xl font-medium text-blue">Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 group transition-all my-10 w-11/12 mx-auto">
          {cards.map((card) => (
            <Card
              showAnim
              className="relative px-5 py-10 overflow-hidden md:w-1/2 w-full bg-white card transition-opacity duration-300"
              style={{ borderRadius: 30 }}
              key={card.title}
            >
              <div className="w-3/4 flex flex-col gap-4">
                <p className="text-3xl font-light">{card.title}</p>
                <h2 className="text-[47px] font-bold font-inter text-gray-dark">
                  {card.price}
                </h2>
                <p className="font-inter text-xl text-gray">{card.content}</p>
              </div>
              <div className="absolute -top-3 -right-5">{card.icon}</div>
            </Card>
          ))}
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
