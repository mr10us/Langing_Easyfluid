import { Badge, Tooltip } from "antd";
import React from "react";
import parameters from "./parameters.json";
import { ParameterInput } from "../../UI/Inputs/ParameterInput";

const fixedColumns = [
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
    fixed: "left",
    width: 80,
  },
];

export function getColumns() {
  const columns = [...fixedColumns];

  sortedParameters.forEach((param) => {
    columns.push({
      /**
       * The title of the column, which is a tooltip that displays the title and unit of the parameter,
       * along with a brief explanation of the parameter.
       */
      title: (
        <Tooltip
          title={param.explanation}
          placement="topRight"
          trigger={["hover", "focus"]}
        >
          <Badge color={"#c3c3c3"} count={"i"} size="small">
            <div className="cursor-help">{`${param.name}, ${param.variable_name} (${param.unit})`}</div>
          </Badge>
        </Tooltip>
      ),
      dataIndex: param.id,
      key: param.id,
      align: "center",
      width: 100,
    });
  });

  return columns;
}

export const sortedParameters = sortParameters(parameters);

const fixedData = [{ key: 1, model: "Test Model" }];
export function getInitialTableData() {
  const result = JSON.parse(JSON.stringify(fixedData));

  parameters.forEach((param) => {
    let parameter = <div id={param.id}>-</div>;

    if (param.type === "measured") {
      parameter = <ParameterInput id={param.id} />;
    }

    Object.assign(result[0], {
      [param.id]: <div className="w-28 mx-auto">{parameter}</div>,
    });
  });

  return result;
}

export const getTableData = (params) => {
  if (!params) return;

  const result = JSON.parse(JSON.stringify(fixedData));

  parameters.forEach((param) => {
    let parameter = <div id={param.id}>0</div>;

    const paramIndex = params.findIndex((p) => p.id === param.id);

    // If the parameter is not in the list, add default parameter
    if (paramIndex !== -1) {
      Object.assign(result[0], {
        [param.id]: <div className="w-28 mx-auto">{parameter}</div>,
      });
    }

    // Adding calculated parameter
    const paramValue = params[paramIndex]?.value || 0;
    const fixedValue = Math.round(paramValue * 100) / 100;
    const evaluation = params[paramIndex]?.evaluation;

    if (param.type === "measured") {
      parameter = (
        <ParameterInput
          id={param.id}
          value={fixedValue}
          evaluation={evaluation}
        />
      );
    } else {
      parameter = (
        <ParameterInput.Disabled
          id={param.id}
          value={fixedValue}
          evaluation={evaluation}
        />
      );
    }

    Object.assign(result[0], {
      [param.id]: parameter,
    });
  });

  return result;
};

function sortParameters(parameters) {
  return parameters.toSorted((a, b) => {
    const order = { measured: 1, calculated: 2, static: 3 };

    return order[a.type] - order[b.type];
  });
}

function evaluateParam(param, calculatedValue, variables) {
  if (!param.evaluations) return null;

  for (const [evaluation, ranges] of Object.entries(param.evaluations)) {
    let min,
      max = null;

    try {
      const evalFormula = (formula) => {
        return eval(
          formula.replace(/([a-zA-Z]+)/g, (match) => variables[match] || match)
        );
      };

      min = ranges.min ? evalFormula(ranges.min.formula) : null;
      max = ranges.max ? evalFormula(ranges.max.formula) : null;
    } catch (error) {
      throw new Error(`Error during evaluation: ${error.message}`);
    }

    if (
      (min === null || calculatedValue >= min) &&
      (max === null || calculatedValue <= max)
    ) {
      return evaluation;
    }
  }

  return null;
}

export function calculateParameters() {
  let S,
    MSV,
    AV,
    Hmax,
    rcor,
    H,
    R,
    RF,
    TC,
    MC,
    AC,
    AddC,
    AddW,
    TF,
    TUC = 0;
  try {
    S = formatToNumber(document.getElementById(1).value);
  } catch (error) {
    throw new Error("[S]: S is not defined. Please, fill the parameter.");
  }
  try {
    MSV = formatToNumber(document.getElementById(2).value);
  } catch (error) {
    throw new Error("[MSV]: S is not defined. Please, fill the parameter.");
  }
  try {
    AV = formatToNumber(document.getElementById(3).value);
  } catch (error) {
    throw new Error("[AV]: AV is not defined. Please, fill the parameter.");
  }

  try {
    Hmax = formatToNumber(document.getElementById(4).value);
  } catch (error) {
    throw new Error("[Hmax]: Hmax is not defined. Please, fill the parameter.");
  }

  try {
    rcor = formatToNumber(document.getElementById(5).value);

    rcor = toPercent(rcor);
  } catch (error) {
    throw new Error("[rcor]: rcor is not defined. Please, fill the parameter.");
  }

  try {
    H = formatToNumber(document.getElementById(6).value);
  } catch (error) {
    throw new Error("[H]: H is not defined. Please, fill the parameter.");
  }

  try {
    R = formatToNumber(document.getElementById(7).value);

    R = toPercent(R);
  } catch (error) {
    throw new Error("[R]: R is not defined. Please, fill the parameter.");
  }

  try {
    RF = formatToNumber(document.getElementById(8).value);

    RF = toPercent(RF);
  } catch (error) {
    throw new Error("[RF]: RF is not defined. Please, fill the parameter.");
  }

  try {
    TC = formatToNumber(document.getElementById(9).value);

    TC = toPercent(TC);
  } catch (error) {
    throw new Error("[TC]: TC is not defined. Please, fill the parameter.");
  }

  try {
    MC = formatToNumber(document.getElementById(10).value);

    MC = toPercent(MC);
  } catch (error) {
    throw new Error("[MC]: MC is not defined. Please, fill the parameter.");
  }

  // Теперь можно выполнять вычисления с проверками
  try {
    if (S === 0) {
      S = (Hmax * 1000) / MSV;
    }
  } catch (error) {
    throw new Error("[S, Hmax, MSV]: Error during calculation");
  }

  try {
    AC = R * RF + rcor;

    AC = fromPercent(AC);
  } catch (error) {
    throw new Error("[AC, R, RF, rcor]: Error during calculation");
  }

  let TV, ACV, TUV;
  try {
    TV = Hmax * S * 1000 + AV;
    ACV = S * H * 1000 + AV;
    TUV = TV - ACV;
  } catch (error) {
    throw new Error("[TV, ACV, TUV, Hmax, S, AV, H]: Error during calculation");
  }

  try {
    TF = H / Hmax;
  } catch (error) {
    throw new Error("[TF, H, Hmax]: Error during calculation");
  }

  let CPlus;
  try {
    if (ACV <= TV) CPlus = TV * TC - ACV * AC;
    else if (ACV > TV && AC < TC) CPlus = ((TC - AC) * ACV) / (1 - TC);
    else if (ACV > TV && AC > TC) CPlus = null;
    else CPlus = null;
  } catch (error) {
    throw new Error("[CPlus, AC, ACV, TC, TV]: Error during calculation");
  }

  try {
    if (TUV < CPlus) TUC = 0.01;
    else TUC = CPlus / (TUV - CPlus);
  } catch (error) {
    throw new Error("[TUC, CPlus, TUV]: Error during calculation");
  }

  try {
    if (0 < TUC && TUC < MC) AddC = null;
    else if (CPlus <= 0) AddC = null;
    else if (TUC > MC && ACV < TV - CPlus)
      AddC = (TV * (TC - MC) + ACV * (MC - AC)) / (1 - MC);
    else if (ACV >= TV - CPlus && CPlus > 0 && ACV < TV)
      AddC = CPlus + (TC * (ACV + CPlus - TV)) / (1 - TC);
    else if (ACV >= TV - CPlus && CPlus > 0 && ACV >= TV) AddC = CPlus;
    else AddC = null;
  } catch (error) {
    throw new Error(
      "[AddC, ACV, TV, AC, TC, TUC, MC]: Error during calculation"
    );
  }

  try {
    if (ACV >= TV && AC < TC) AddW = null;
    else if (ACV <= TV && TUC <= 0) AddW = (ACV * (AC - TC)) / TC;
    else if (ACV <= TV && TUC > 0 && TUC < MC)
      AddW = ((ACV * AC + MC * TUV - TC * TV) / MC) * 200;
    else if (ACV >= TV && AC >= TC) AddW = (ACV * (AC - TC)) / TC;
    else if (ACV <= TV && TUC >= MC) AddW = null;
    else AddW = null;
  } catch (error) {
    throw new Error(
      "[AddW, ACV, TV, AC, TC, TUC, MC, TUV]: Error during calculation"
    );
  }

  const result = [
    { value: S, id: 1 },
    { value: MSV, id: 2 },
    { value: AV, id: 3 },
    { value: Hmax, id: 4 },
    { value: rcor, id: 5 },
    { value: H, id: 6 },
    { value: fromPercent(R), id: 7 },
    { value: fromPercent(RF), id: 8 },
    { value: fromPercent(TC), id: 9 },
    { value: fromPercent(MC), id: 10 },
    {
      value: fromPercent(AC),
      id: 11,
      evaluation: evaluateParam(parameters[10], AC, { TC: TC }),
    },
    { value: AddC, id: 12 },
    { value: AddW, id: 13 },
    {
      value: fromPercent(TF),
      id: 14,
      evaluation: evaluateParam(parameters[13], TF),
    },
    { value: fromPercent(TUC), id: 15 },
    { value: TV, id: 16 },
    { value: ACV, id: 17 },
    { value: TUV, id: 18 },
    { value: CPlus, id: 19 },
  ];

  return result;
}

export function getSortedStaticParameters(forType) {
  return parameters.filter((p) => p.type === "static" && p.for === forType);
}

export const formatToNumber = (input) => {
  if (!input) throw new Error();
  if (isNaN(input)) return 0;
  if (typeof input == "string") input.replace(/[^\d.]/g, "");

  const number = parseFloat(input);

  return number;
};

const toPercent = (decimal) => decimal / 100;
const fromPercent = (decimal) => decimal * 100;
