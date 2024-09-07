"use client";

import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { Typography } from "../UI/Typography";
import { TourContext } from "../Calculator/contexts/TourContext";
import { useContext } from "react";

export const CalculatorBaner = () => {
  const { toggleTour } = useContext(TourContext);

  return (
    <SectionLayout>
      <div
        style={{
          backgroundImage: "url(/WTP-bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F8F8F8",
          backgroundSize: "cover",
        }}
      >
        <MainWrapper style={{ height: "100%", paddingBlock: 24 }}>
          <div className="flex flex-col justify-center">
            <Typography.H2Bold className="text-gray-100">
              Calculator
            </Typography.H2Bold>
            <Typography.P18 className="text-gray-100">
            <span className="cursor-pointer text-blue hover:text-gray-200 transition-colors" onClick={toggleTour}>ⓘ</span> How the calculation is made?
            </Typography.P18>
          </div>
        </MainWrapper>
      </div>
    </SectionLayout>
  );
};
