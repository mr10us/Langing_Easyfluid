import { StaticParameterInput } from "@/app/components/UI/Inputs/StaticParameterInput";
import { Underlined } from "../Underlined";
import { useContext } from "react";
import { ParametersProvider } from "../../ParametersContext";

export const LastStep = () => {
  const parameters = useContext(ParametersProvider);

  const measuredParams = parameters.filter((p) => p.for === "measure");

  return (
    <div className="flex flex-col gap-4">
      <h3>Finally, let’s measure actual data.</h3>

      <p>
        <b>H</b> is your current height of the emulsion in the machine tank, or its
        depth. <b>R</b> means the refractometer reading from the sample of emulsion
        taken just now (BTW, <Underlined>never</Underlined> take a sample from the machine sump as it may
        be heavily overvalued by tramp oil, always take it from the <Underlined>spindel</Underlined>!)
      </p>

      <div className="flex flex-col gap-4">
        {measuredParams.map((p) => (
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
