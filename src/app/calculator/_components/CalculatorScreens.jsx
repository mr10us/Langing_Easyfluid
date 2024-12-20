"use client";

import { Button, Steps, App, Divider } from "antd";
import { useContext, useRef, useState } from "react";
import { FillCF } from "./Steps/FillCF";
import { FillMachine } from "./Steps/FillMachine";
import { LastStep } from "./Steps/LastStep";
import { ParametersProvider } from "../ParametersContext";
import { calculateParameters } from "../_utils";
import { FillMixer } from "./Steps/FillMixer";
import { Result } from "./Result";
import { Underlined } from "./Underlined";
import { RegisterForm } from "./RegisterForm";

const inputedParamKeys = ["AV", "Hmax", "TV", "S", "RF", "TC", "MC", "H", "R"];

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

  const missingParams = parameters.filter((param) => {
    if (inputedParamKeys.includes(param.variable_name)) {
      return param.value === null ? true : false;
    }
  });

  const isDisabledCalculate = missingParams.length > 1;

  const steps = [
    { title: "Fill the machine parameters", content: <FillMachine /> },
    { title: "Fill the CF parameters", content: <FillCF /> },
    { title: "Fill the Mixer parameters", content: <FillMixer /> },
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
        <Button
          type="primary"
          disabled={isDisabledCalculate}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
      </div>

      <div className="my-6">
        {!!result && (
          <>
            <div className="my-8">
              <Result resultParams={result} />
            </div>
            <p className="text-lg">
              In other words, you <Underlined>save costs</Underlined> and{" "}
              <Underlined>avoid risks</Underlined>.
            </p>
            <Divider type="horizontal" />
            <RegisterForm />
          </>
        )}
      </div>
    </div>
  );
};
