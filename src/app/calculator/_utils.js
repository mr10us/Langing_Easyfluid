import parameters from "./parameters.json";

function evaluateParam(param, calculatedValue, variables) {
  if (!param.evaluations) return null;

  for (const [evaluation, ranges] of Object.entries(param.evaluations)) {
    let min = null,
      max = null;

    try {
      const evalFormula = (formula) => {
        return eval(
          formula.replace(/([a-zA-Z]+)/g, (match) => variables[match].value)
        );
      };

      // Evaluate min and max formulas
      min = ranges.min ? evalFormula(ranges.min.formula) : null;
      max = ranges.max ? evalFormula(ranges.max.formula) : null;
    } catch (error) {
      throw new Error(`Error during evaluation: ${error.message}`);
    }

    // Check the conditions based on 'include'
    const minCondition =
      min === null ||
      (ranges.min.include ? calculatedValue >= min : calculatedValue > min);

    const maxCondition =
      max === null ||
      (ranges.max.include ? calculatedValue <= max : calculatedValue < max);

    if (minCondition && maxCondition) {
      return evaluation;
    }
  }

  return null;
}

export function calculateParameters(parameters) {
  const result = {};
  parameters.forEach((p) => {
    const parameterName = p.variable_name;

    result[parameterName] = {
      value: formatToNumber(p.value),
      evaluation: null,
    };
  });

  function calculateAC() {
    const R = result.R.value;
    const RF = result.RF.value;
    const rcor = result.rcor.value;

    if (R === null) {
      throw new Error("[R]: R is not defined. Please, fill the parameter.");
    }
    if (RF === null) {
      throw new Error("[RF]: RF is not defined. Please, fill the parameter.");
    }
    if (rcor === null) {
      throw new Error(
        "[rcor]: rcor is not defined. Please, fill the parameter."
      );
    }

    const AC = R * RF + rcor;
    return cutLongNumber(AC);
  }

  function calculateTF() {
    const Hmax = result.Hmax.value;
    const H = result.H.value;

    if (Hmax === null) {
      throw new Error(
        "[Hmax]: Hmax is not defined. Please, fill the parameter."
      );
    }
    if (H === null) {
      throw new Error("[H]: H is not defined. Please, fill the parameter.");
    }

    return cutLongNumber(fromPercent(H / Hmax));
  }

  function calculateS() {
    if (result.S.value !== 0) return result.S.value;
    const Hmax = result.Hmax.value;
    const TV = result.TV.value;
    const AV = result.AV.value;

    if (Hmax === null) {
      throw new Error(
        "[Hmax]: Hmax is not defined. Please, fill the parameter."
      );
    }
    if (TV === null) {
      throw new Error("[TV]: TV is not defined. Please, fill the parameter.");
    }
    if (AV === null) {
      throw new Error("[AV]: AV is not defined. Please, fill the parameter.");
    }

    return cutLongNumber((TV - AV) / (Hmax * 1000));
  }

  function calculateTV() {
    if (result.TV.value !== 0) return result.TV.value;
    const Hmax = result.Hmax.value;
    const S = result.S.value;
    const AV = result.AV.value;

    if (Hmax === null) {
      throw new Error(
        "[Hmax]: Hmax is not defined. Please, fill the parameter."
      );
    }
    if (S === null) {
      throw new Error("[S]: S is not defined. Please, fill the parameter.");
    }
    if (AV === null) {
      throw new Error("[AV]: AV is not defined. Please, fill the parameter.");
    }

    return cutLongNumber(Hmax * S * 1000 + AV);
  }

  function calculateACV() {
    const S = result.S.value;
    const H = result.H.value;
    const AV = result.AV.value;

    if (S === null) {
      throw new Error("[S]: S is not defined. Please, fill the parameter.");
    }
    if (H === null) {
      throw new Error("[H]: H is not defined. Please, fill the parameter.");
    }
    if (AV === null) {
      throw new Error("[AV]: AV is not defined. Please, fill the parameter.");
    }

    return cutLongNumber(S * H * 1000 + AV);
  }

  function calculateTUV() {
    const TV = result.TV.value;
    const ACV = result.ACV.value;

    if (TV === null) {
      throw new Error("[TV]: TV is not defined. Please, fill the parameter.");
    }
    if (ACV === null) {
      throw new Error("[ACV]: ACV is not defined. Please, fill the parameter.");
    }

    return cutLongNumber(TV - ACV);
  }

  function calculateCPlus() {
    const ACV = result.ACV.value;
    const TV = result.TV.value;
    const AC = toPercent(result.AC.value);
    const TC = toPercent(result.TC.value);

    if (ACV === null) {
      throw new Error("[ACV]: ACV is not defined. Please, fill the parameter.");
    }
    if (TV === null) {
      throw new Error("[TV]: TV is not defined. Please, fill the parameter.");
    }
    if (AC === null) {
      throw new Error("[AC]: AC is not defined. Please, fill the parameter.");
    }
    if (TC === null) {
      throw new Error("[TC]: TC is not defined. Please, fill the parameter.");
    }

    if (ACV <= TV) return cutLongNumber(TV * TC - ACV * AC);
    else if (ACV > TV && AC < TC) return cutLongNumber(((TC - AC) * ACV) / (1 - TC));
    else if (ACV > TV && AC > TC) return null;

    return null;
  }

  function calculateTUC() {
    const TUV = result.TUV.value;
    const CPlus = result.CPlus.value;

    if (TUV === null) {
      throw new Error("[TUV]: TUV is not defined. Please, fill the parameter.");
    }

    if (TUV < CPlus) return 1;
    else return cutLongNumber(fromPercent(CPlus / (TUV - CPlus)));
  }

  function calculateAddC() {
    const TUC = toPercent(result.TUC.value);
    const MC = toPercent(result.MC.value);
    const CPlus = result.CPlus.value;
    const ACV = result.ACV.value;
    const TV = result.TV.value;
    const AC = toPercent(result.AC.value);
    const TC = toPercent(result.TC.value);

    if (TUC === null) {
      throw new Error("[TUC]: TUC is not defined. Please, fill the parameter.");
    }
    if (MC === null) {
      throw new Error("[MC]: MC is not defined. Please, fill the parameter.");
    }
    if (ACV === null) {
      throw new Error("[ACV]: ACV is not defined. Please, fill the parameter.");
    }
    if (TV === null) {
      throw new Error("[TV]: TV is not defined. Please, fill the parameter.");
    }
    if (AC === null) {
      throw new Error("[AC]: AC is not defined. Please, fill the parameter.");
    }
    if (TC === null) {
      throw new Error("[TC]: TC is not defined. Please, fill the parameter.");
    }

    if (0 < TUC && TUC < MC) return null;
    else if (CPlus <= 0) return null;
    else if (TUC > MC && ACV < TV - CPlus)
      return cutLongNumber((TV * (TC - MC) + ACV * (MC - AC)) / (1 - MC));
    else if (ACV >= TV - CPlus && CPlus > 0 && ACV < TV)
      return cutLongNumber(CPlus + (TC * (ACV + CPlus - TV)) / (1 - TC));
    else if (ACV >= TV - CPlus && CPlus > 0 && ACV >= TV) return cutLongNumber(CPlus);

    return null;
  }

  function calculateAddW() {
    const ACV = result.ACV.value;
    const TV = result.TV.value;
    const AC = toPercent(result.AC.value);
    const TC = toPercent(result.TC.value);
    const TUC = toPercent(result.TUC.value);
    const MC = toPercent(result.MC.value);
    const TUV = result.TUV.value;

    if (ACV === null) {
      throw new Error("[ACV]: ACV is not defined. Please, fill the parameter.");
    }
    if (TV === null) {
      throw new Error("[TV]: TV is not defined. Please, fill the parameter.");
    }
    if (AC === null) {
      throw new Error("[AC]: AC is not defined. Please, fill the parameter.");
    }
    if (TC === null) {
      throw new Error("[TC]: TC is not defined. Please, fill the parameter.");
    }
    if (TUC === null) {
      throw new Error("[TUC]: TUC is not defined. Please, fill the parameter.");
    }
    if (MC === null) {
      throw new Error("[MC]: MC is not defined. Please, fill the parameter.");
    }
    if (TUV === null) {
      throw new Error("[TUV]: TUV is not defined. Please, fill the parameter.");
    }

    if (ACV >= TV && AC < TC) return null;
    else if (ACV <= TV && TUC <= 0) return cutLongNumber((ACV * (AC - TC)) / TC);
    else if (ACV <= TV && TUC > 0 && TUC < MC)
      return cutLongNumber((ACV * AC + MC * TUV - TC * TV) / MC);
    else if (ACV >= TV && AC >= TC) return cutLongNumber((ACV * (AC - TC)) / TC);
    else if (ACV <= TV && TUC >= MC) return null;

    return null;
  }
  // AC = R * RF + rcor;
  // TF = H / Hmax;
  // S = (Hmax * 1000) / TV - AV;
  // TV = Hmax * S * 1000 + AV;
  // ACV = S * H * 1000 + AV;
  // TUV = TV - ACV;
  // MC = 0.03;

  // CPlus = ACV, TV, TC, AC;

  // TUC = TUV, CPlus;

  // AddC = TUC, MC, CPlus, ACV, TV, AC;
  // AddW = ACV, TV, AC, TC, TUC, MC, TUV;

  result.AC.value = calculateAC();
  result.TF.value = calculateTF();
  result.S.value = calculateS();
  result.TV.value = calculateTV();
  result.ACV.value = calculateACV();
  result.TUV.value = calculateTUV();
  result.CPlus.value = calculateCPlus();
  result.TUC.value = calculateTUC();
  result.AddC.value = calculateAddC();
  result.AddW.value = calculateAddW();

  parameters.forEach((p) => {
    result[p.variable_name].evaluation = evaluateParam(
      p,
      result[p.variable_name].value,
      result
    );

    result[p.variable_name].explanation = p.explanation;
  });

  return result;
}

export const formatToNumber = (input) => {
  if (input === null) return 0;
  if (isNaN(input)) return 0;
  if (typeof input == "string") input.replace(/[^\d.]/g, "");

  const number = parseFloat(input);

  return number;
};

export const cutLongNumber = (input) => {
  if (input === null) return 0;
  if (isNaN(input)) return 0;

  return Number(input.toFixed(4));
};

const toPercent = (decimal) => decimal / 100;
const fromPercent = (decimal) => decimal * 100;