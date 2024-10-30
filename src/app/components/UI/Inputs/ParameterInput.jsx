import {
  ParametersDispatchProvider,
  ParametersProvider,
} from "@/app/calculator/ParametersContext";
import { cn } from "@/app/utils";
import { Input } from "antd";
import { useContext, useState } from "react";

const isNumeric = (input) => /^[-+.,]?\d*[.,]?\d*$/.test(input);

const evaluations = {
  good: {
    color: "#21715e",
    borderColor: "#b5d0c9",
    backgroundColor: "rgb(231, 249, 245)",
  },
  suspicious: {
    color: "#f1ca76",
    borderColor: "#ffe7b5",
    backgroundColor: "rgb(254, 250, 243)",
  },
  warning: {
    color: "#fbc756",
    borderColor: "#fbc756",
    backgroundColor: "rgb(255, 245, 224)",
  },
  critical: {
    color: "#fd4e5d",
    borderColor: "#fd4e5d",
    backgroundColor: "rgb(255, 233, 235)",
  },
};

export const ParameterInput = ({ evaluation, id, suffix }) => {
  const [isValid, setIsValid] = useState(true);

  const parameters = useContext(ParametersProvider);
  const inputValue = parameters.find(
    (param) => param.variable_name === id
  )?.value;
  const dispatch = useContext(ParametersDispatchProvider);

  const handleChangeValue = (event) => {
    const value = event.target.value;

    if (isNumeric(value)) {
      dispatch((prev) =>
        prev.map((param) =>
          param.variable_name === id ? { ...param, value } : param
        )
      );
    } else {
      setIsValid(false);
      setTimeout(() => setIsValid(true), 500);
    }
  };

  const evaluationStyle = evaluations[evaluation];

  return (
    <Input
      key={id}
      id={id}
      inputMode="decimal"
      value={inputValue}
      style={evaluationStyle ? evaluationStyle : null}
      onChange={handleChangeValue}
      onFocus={(e) => e.target.select()}
      suffix={suffix ? suffix : null}
      className={cn(
        "rounded-xl",
        isValid ? "" : "!border-red-500 outline-none animate-shake",
        evaluationStyle ? "border-2" : ""
      )}
    />
  );
};

ParameterInput.Disabled = ({ value, evaluation, id }) => {
  const evaluationStyle = evaluations[evaluation];

  return (
    <div
      id={id}
      style={evaluationStyle ? evaluationStyle : null}
      className={cn("rounded-xl py-1 px-3", evaluationStyle ? "border-2" : "")}
    >
      {value}
    </div>
  );
};
