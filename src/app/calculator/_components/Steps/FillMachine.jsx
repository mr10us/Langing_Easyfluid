import { useContext } from "react";
import Image from "next/image";
import machineImage from "../../../../../public/Frame 1.png";
import { ParametersProvider } from "../../ParametersContext";
import { StaticParameterInput } from "@/app/components/UI/Inputs/StaticParameterInput";

export const FillMachine = () => {
  const parameters = useContext(ParametersProvider);

  const machineParams = parameters.filter((p) => p.for === "machine");

  const withS = machineParams.filter((p) => p.variable_name !== "TV");
  const withoutS = machineParams.filter((p) => p.variable_name !== "S");

  return (
    <div className="flex flex-col gap-4">
      <h3>
        Let’s start with the machine itself. Usually, emulsion in the machine is
        in the machine tank and some other places like filtration unit and/or
        high pressure one. We assume, that the emulsion level is changing in the
        machine tank and it stays the same in the additional volume (filtration
        unit etc.)
      </h3>
      <p>
        What we need is the geometry of your machine tank and the additional
        volume if the one exists. Namely, we need to know your machine tank area
        and the max height of emulsion which we consider as “full”. <br />
        <b>
          Our task is to calculate required corrections to the default mixer so
          that we end up with target concentration at tank being 100% full,
          i.e., filled to the max height of emulsion.
        </b>
      </p>
      <p>Here’s the sketch showing how to calculate one (pretty simple):</p>

      <div className="flex gap-16">
        <Image className="w-1/2" src={machineImage} alt="machine image" />
      </div>

      <div className="flex flex-col gap-4">
        {withS.map((p) => (
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

      <div>
        If you don’t have a chance to pull out the machine tank and measure it,
        but you do know the max total volume of emulsion in your machine, that’s
        ok, we can work with it just fine. In this case we still need the max
        height of emulsion in your machine tank and if there’s additional
        volume, it’s size in L.
      </div>

      <div className="flex flex-col gap-4">
        {withoutS.map((p) => (
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
