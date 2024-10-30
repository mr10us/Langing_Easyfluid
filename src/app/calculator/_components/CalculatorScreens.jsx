"use client";

import { Button, Steps, App } from "antd";
import { useContext, useRef, useState } from "react";
import { FillCF } from "./Steps/FillCF";
import { FillMachine } from "./Steps/FillMachine";
import { LastStep } from "./Steps/LastStep";
import { ParametersProvider } from "../ParametersContext";
import { calculateParameters } from "../_utils";

export const CalculatorScreens = () => {
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null);

  const { message } = App.useApp();
  const parameters = useContext(ParametersProvider);
  const step = useRef(null);

  const resultParams = parameters.filter((p) => p.for === "result");

  const next = () => {
    if (step.current) step.current.scrollIntoView();

    setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    if (step.current) step.current.scrollIntoView();

    setCurrent((previous) => previous - 1);
  };

  const handleCalculate = () => {
    try {
      const resultObj = calculateParameters(parameters);
      const resultArray = Object.entries(resultObj);

      const result = resultArray
        .map(([key, value]) => {
          if (resultParams.some((p) => p.variable_name === key))
            return {
              key,
              data: value,
            };
        })
        .filter(Boolean);

      setResult(result);
    } catch (error) {
      message.error(error.message);
    }
  };

  const steps = [
    { title: "Fill the machine parameters", content: <FillMachine /> },
    { title: "Fill the CF parameters", content: <FillCF /> },
    { title: "Get the result", content: <LastStep /> },
  ];

  return (
    <div ref={step}>
      <Steps
        id="step"
        className="my-6"
        responsive
        current={current}
        items={steps}
        onChange={setCurrent}
      />
      <div className="p-6 bg-scenatio-gradient rounded-[20px]">
        {steps[current].content}
      </div>
      <div className="flex gap-4 justify-between mt-4">
        <div className="flex gap-4">
          <Button type="primary" disabled={current === 0} onClick={prev}>
            Previous
          </Button>
          <Button
            type="primary"
            disabled={current === steps.length - 1}
            onClick={next}
          >
            Next
          </Button>
        </div>
        <Button type="primary" onClick={handleCalculate}>
          Calculate
        </Button>
      </div>

      <div className="my-6">
        {!!result && (
          <>
            <p className="py-4">
              So, if you proceed with the recommendations above, you will end up
              with exactly target concentration with 100% full tank.
            </p>
            <div className="grid grid-flow-col gap-4 my-4">
              {result.map(({ key, data }) => (
                <div
                  key={key}
                  className="flex flex-col gap-4 bg-[#f3f9ff] overflow-hidden rounded-[20px] shadow-lg"
                >
                  <h3 className="bg-blue text-center p-2 font-bold text-gray-100">{key}</h3>
                  <p className="text-center pb-4">{data.value || 0}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
