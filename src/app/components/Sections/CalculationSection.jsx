"use client";

import { MainWrapper } from "@/app/layouts/MainWrapper";
import { SectionLayout } from "@/app/layouts/SectionLayout";
import { StaticParameterInput } from "../UI/Inputs/StaticParameterInput";
import CalculationTable from "../Calculator/CalculationTable";
import { useContext } from "react";
import { TourContext } from "../Calculator/contexts/TourContext";
import { Collapse } from "antd";
import { getSortedStaticParameters } from "../Calculator/CalculationTable/_utils";
import { UniqStaticInputHOC } from "../UniqStaticInputHOC";
import { VolumeModal } from "../Calculator/contexts/VolumeModalContext";
import { useVolumeModalContext } from "@/app/hooks/useVolumeModalContext";
import { VolumeCalculationModal } from "../Calculator/VolumeCalculationModal";
import { CalculationSuccessModalContext } from "../Calculator/contexts/CalculationSuccessModalContext";
import { useSuccessModalContext } from "@/app/hooks/useSuccessModalContext";

const items = [
  {
    key: "machine",
    label: "Machine Static Parameters",
    children: getSortedStaticParameters("machine").map((param) => {
      const parameterInput = (
        <StaticParameterInput
          key={param.id}
          id={param.id}
          title={param.name}
          unit={param.unit}
          explanation={param.explanation}
          varName={param.variable_name}
          className="my-2"
        />
      );
      if (param.id === 1)
        return (
          <div key={param.id}>
            <UniqStaticInputHOC>{parameterInput}</UniqStaticInputHOC>
            <span>
              <b>or</b>
            </span>
          </div>
        );
      return parameterInput;
    }),
  },
  {
    key: "cf",
    label: "Cutting Fluid Static Parameters",
    children: getSortedStaticParameters("cf").map((param) => (
      <StaticParameterInput
        key={param.id}
        id={param.id}
        title={param.name}
        unit={param.unit}
        explanation={param.explanation}
        varName={param.variable_name}
        className="my-2"
      />
    )),
  },
  {
    key: "mixer",
    label: "Mixer Static Parameters",
    children: getSortedStaticParameters("mixer").map((param) => (
      <StaticParameterInput
        key={param.id}
        id={param.id}
        title={param.name}
        unit={param.unit}
        explanation={param.explanation}
        varName={param.variable_name}
        className="my-2"
      />
    )),
  },
];

export const CalculationSection = () => {
  const volumeModalContext = useVolumeModalContext();
  const successModalContext = useSuccessModalContext();

  const { step1, step2 } = useContext(TourContext);

  return (
    <SectionLayout id="calc" ref={step1} style={{ backgroundColor: "#F8F8F8" }}>
      <MainWrapper>
        <div className="flex flex-col gap-8 py-8">
          <VolumeModal.Provider value={volumeModalContext}>
            <Collapse items={items} ref={step2} expandIconPosition="end" />
            <VolumeCalculationModal />
          </VolumeModal.Provider>
          <div className="2xl:-mx-[22%]">
            <CalculationSuccessModalContext.Provider value={successModalContext}>
              <CalculationTable />
            </CalculationSuccessModalContext.Provider>
          </div>
        </div>
      </MainWrapper>
    </SectionLayout>
  );
};
