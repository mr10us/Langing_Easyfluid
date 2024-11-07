import { useContext } from "react";
import Image from "next/image";
import machineImage from "../../../../../public/Frame 1.png";
import { ParametersProvider } from "../../ParametersContext";
import { StaticParameterInput } from "@/app/components/UI/Inputs/StaticParameterInput";
import { Underlined } from "../Underlined";

export const FillMixer = () => {
  const parameters = useContext(ParametersProvider);

  const mixerParams = parameters.filter((p) => p.for === "mixer");

  return (
    <div className="flex flex-col gap-4">
      <h3>Next - we need data of your <Underlined>mixer</Underlined>:</h3>

      <div className="flex flex-col gap-4">
        {mixerParams.map((p) => (
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
