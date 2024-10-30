import { useContext } from "react";
import Image from "next/image";
import machineImage from "../../../../../public/Frame 1.png";
import { Input, Tooltip } from "antd";
import { ParametersProvider } from "../../ParametersContext";
import { Underlined } from "../Underlined";
import { StaticParameterInput } from "@/app/components/UI/Inputs/StaticParameterInput";

export const FillCF = () => {
  const parameters = useContext(ParametersProvider);

  const cfParams = parameters.filter((p) => p.for === "cf");

  return (
    <div className="flex flex-col gap-4">
      <h3>Next - we need data of your <Underlined>cutting fluid</Underlined>:</h3>

      <div className="flex flex-col gap-4">
        {cfParams.map((p) => (
          <StaticParameterInput
            key={p.variable_name}
            title={p.name}
            unit={p.unit}
            explanation={p.explanation}
            varName={p.variable_name}
            id={p.variable_name}
          />
        ))}
      </div>
    </div>
  );
};
