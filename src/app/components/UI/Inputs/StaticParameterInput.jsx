import { Tooltip } from "antd";
import { Typography } from "../Typography";
import { ParameterInput } from "./ParameterInput";

export const StaticParameterInput = ({
  title,
  unit,
  explanation,
  varName,
  className,
  id,
}) => {
  const parameterName = varName ? `${title}, ${varName}` : title;
  return (
    <Tooltip
      trigger={["hover", "focus"]}
      title={explanation}
      placement="topLeft"
      className={className}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-2 items-center gap-2" id={`${id}_container`}>
        <Typography className="text-gray-dark">{parameterName}: </Typography>
        <ParameterInput
          id={id}
          suffix={unit}
        />
      </div>
    </Tooltip>
  );
};
