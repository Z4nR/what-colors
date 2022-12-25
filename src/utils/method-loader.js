import { colorBlindName, colorBlindRange } from "./data-local";

const compareArray = (result, initial) => {
  const compare = result.map((item, rowIndex) => {
    const res = [];
    const initialRow = initial[rowIndex];

    for (let i = 0; i < item.value.length; i++) {
      const resultValue = item.value[i];
      if (resultValue.status !== "removable") {
        continue;
      }

      const initialValue = initialRow.value[i];
      res.push(resultValue === initialValue);
    }

    return res;
  });

  const comparisonResult = compare.flat(1);

  const value = [];
  for (let i = 0; i < comparisonResult.length; i++) {
    const compare = `${comparisonResult[i]}`;
    const upperCompare = compare.toUpperCase();
    value.push({ _id: `C${i + 1}`, comparison: upperCompare });
  }

  return { value: value, result: comparisonResult };
};

const discriminantValue = (result, initial) => {
  const discriminant = result.map((item, rowIndex) => {
    const res = [];
    const initialRow = initial[rowIndex];

    for (let i = 0; i < item.value.length; i++) {
      const resultValue = item.value[i];
      const resultNumber = resultValue.number;

      if (resultValue.status !== "removable") {
        continue;
      }

      const initialValue = initialRow.value[i];
      const initialNumber = initialValue.number;

      const countingDiscriminant =
        resultNumber >= initialNumber
          ? resultNumber - initialNumber
          : initialNumber - resultNumber;

      res.push(countingDiscriminant);
    }

    return res;
  });

  const discriminantResult = discriminant.flat(1);

  const number = [];
  for (let i = 0; i < discriminantResult.length; i++) {
    number.push(i + 1);
  }

  const value = [];
  for (let i = 0; i < discriminantResult.length; i++) {
    value.push({ _id: `D${number[i]}`, discriminant: discriminantResult[i] });
  }

  discriminantResult.reverse();
  number.reverse();

  return {
    number: number,
    result: discriminantResult,
    value: value,
  };
};

const methodCalculation = (result) => {
  const method = result.map((item) => {
    const res = [];

    for (let i = 0; i < item.value.length; i++) {
      const iCap = item.value[i];
      if (iCap.status !== "removable") {
        continue;
      }
      const capNumber = iCap.number;

      const beforeCap = item.value[i - 1];
      const capBefore = beforeCap.number;

      const afterCap = item.value[i + 1];
      const capAfter = afterCap.number;

      const beforeCapCount = capNumber - capBefore;
      const afterCapCount = capAfter - capNumber;
      const totalCapError = beforeCapCount + afterCapCount;
      const countingMethod = Math.abs(totalCapError - 2);

      res.push(countingMethod);
    }

    const result = res.reduce((sum, cap) => sum + cap, 0);

    return {
      result: result,
    };
  });

  const methodMapping = method.map((item) => item.result);
  const totalErrorScore = methodMapping.reduce((sum, cap) => sum + cap, 0);

  return totalErrorScore;
};

const colorBlindType = (type, resultArray) => {
  const testRule = colorBlindRange[type];
  const resultColor = {};
  Object.keys(testRule).forEach((color) => {
    const selectedColor = testRule[color];
    let falseLower = 0;
    for (let i = selectedColor.Lower.min; i <= selectedColor.Lower.max; i++) {
      if (!resultArray[i]) falseLower++;
    }

    let falseUpper = 0;
    for (let i = selectedColor.Upper.min; i <= selectedColor.Upper.max; i++) {
      if (!resultArray[i]) falseUpper++;
    }

    const totalFalse = falseLower + falseUpper;

    resultColor[color] = totalFalse;
  });

  let maxFalse = 0;
  let blindType;
  for (let prop in resultColor) {
    if (resultColor[prop] > maxFalse) {
      maxFalse = resultColor[prop];
      blindType = prop;
    }
  }

  const result = colorBlindName[blindType];
  return result;
};

const colorBlind = (t, result) => {
  let type;
  if (t === "Farnsworth Munsell-85 Hue") {
    type = "type85";
  } else {
    type = "type40";
  }

  const findBlindType = colorBlindType(type, result);

  return findBlindType;
};

const blindType = (t, totalScore, findBlind) => {
  let type;
  if (t === "Farnsworth Munsell-85 Hue") {
    type = totalScore < 100 ? "Normal" : findBlind;
  } else {
    type = totalScore < 45 ? "Normal" : findBlind;
  }

  return type;
};

const blindStatus = (t, totalScore) => {
  let type;
  if (t === "Farnsworth Munsell-85 Hue") {
    if (totalScore <= 16) {
      type = "Superior";
    } else if (totalScore >= 10 && totalScore <= 100) {
      type = "Average";
    } else {
      type = "Weak";
    }
  } else {
    if (totalScore <= 10) {
      type = "Superior";
    } else if (totalScore >= 10 && totalScore <= 50) {
      type = "Average";
    } else {
      type = "Weak";
    }
  }

  return type;
};

const fm85 = [
  {
    row: "row1",
    value: [
      { number: 1, status: "first", color: "#b2766f" },
      { number: 2, status: "removable", color: "#b1746a" },
      { number: 3, status: "removable", color: "#b17466" },
      { number: 4, status: "removable", color: "#b07464" },
      { number: 5, status: "removable", color: "#ae725f" },
      { number: 6, status: "removable", color: "#aa725b" },
      { number: 7, status: "removable", color: "#a8745a" },
      { number: 8, status: "removable", color: "#a87456" },
      { number: 9, status: "removable", color: "#a87452" },
      { number: 10, status: "removable", color: "#a97650" },
      { number: 11, status: "removable", color: "#a8794e" },
      { number: 12, status: "removable", color: "#a77c4e" },
      { number: 13, status: "removable", color: "#a97e4c" },
      { number: 14, status: "removable", color: "#a57e46" },
      { number: 15, status: "removable", color: "#a78244" },
      { number: 16, status: "removable", color: "#a48546" },
      { number: 17, status: "removable", color: "#a28946" },
      { number: 18, status: "removable", color: "#9f8b46" },
      { number: 19, status: "removable", color: "#9d8e48" },
      { number: 20, status: "removable", color: "#9b8f49" },
      { number: 21, status: "removable", color: "#97914b" },
      { number: 22, status: "last", color: "#91924d" },
    ],
  },
  {
    row: "row2",
    value: [
      { number: 22, status: "first", color: "#91924d" },
      { number: 23, status: "removable", color: "#8d9352" },
      { number: 24, status: "removable", color: "#899557" },
      { number: 25, status: "removable", color: "#86955c" },
      { number: 26, status: "removable", color: "#84975f" },
      { number: 27, status: "removable", color: "#7e9760" },
      { number: 28, status: "removable", color: "#7d9666" },
      { number: 29, status: "removable", color: "#7c9567" },
      { number: 30, status: "removable", color: "#7a986b" },
      { number: 31, status: "removable", color: "#73966b" },
      { number: 32, status: "removable", color: "#70996d" },
      { number: 33, status: "removable", color: "#699a71" },
      { number: 34, status: "removable", color: "#679a74" },
      { number: 35, status: "removable", color: "#649a76" },
      { number: 36, status: "removable", color: "#619778" },
      { number: 37, status: "removable", color: "#5b947a" },
      { number: 38, status: "removable", color: "#5a957f" },
      { number: 39, status: "removable", color: "#589480" },
      { number: 40, status: "removable", color: "#559584" },
      { number: 41, status: "removable", color: "#529687" },
      { number: 42, status: "removable", color: "#519688" },
      { number: 43, status: "last", color: "#4e9689" },
    ],
  },
  {
    row: "row3",
    value: [
      { number: 43, status: "first", color: "#4e9689" },
      { number: 44, status: "removable", color: "#4c968e" },
      { number: 45, status: "removable", color: "#4c9691" },
      { number: 46, status: "removable", color: "#4a9794" },
      { number: 47, status: "removable", color: "#4a9696" },
      { number: 48, status: "removable", color: "#4b9596" },
      { number: 49, status: "removable", color: "#4a9698" },
      { number: 50, status: "removable", color: "#50969c" },
      { number: 51, status: "removable", color: "#52949f" },
      { number: 52, status: "removable", color: "#5393a1" },
      { number: 53, status: "removable", color: "#5494a3" },
      { number: 54, status: "removable", color: "#5a92a4" },
      { number: 55, status: "removable", color: "#6090a5" },
      { number: 56, status: "removable", color: "#6690a5" },
      { number: 57, status: "removable", color: "#688fa7" },
      { number: 58, status: "removable", color: "#6b8ca6" },
      { number: 59, status: "removable", color: "#6c8aa6" },
      { number: 60, status: "removable", color: "#6f89a6" },
      { number: 61, status: "removable", color: "#7489a7" },
      { number: 62, status: "removable", color: "#7686a6" },
      { number: 63, status: "removable", color: "#7b84a3" },
      { number: 64, status: "last", color: "#8084a3" },
    ],
  },
  {
    row: "row4",
    value: [
      { number: 64, status: "first", color: "#8084a3" },
      { number: 65, status: "removable", color: "#8484a3" },
      { number: 66, status: "removable", color: "#8a86a6" },
      { number: 67, status: "removable", color: "#8d85a3" },
      { number: 68, status: "removable", color: "#9185a3" },
      { number: 69, status: "removable", color: "#9483a0" },
      { number: 70, status: "removable", color: "#97839f" },
      { number: 71, status: "removable", color: "#99819d" },
      { number: 72, status: "removable", color: "#9d809b" },
      { number: 73, status: "removable", color: "#9f7f98" },
      { number: 74, status: "removable", color: "#a37d94" },
      { number: 75, status: "removable", color: "#a57c92" },
      { number: 76, status: "removable", color: "#a67a8e" },
      { number: 77, status: "removable", color: "#a9798b" },
      { number: 78, status: "removable", color: "#ab7788" },
      { number: 79, status: "removable", color: "#ae7787" },
      { number: 80, status: "removable", color: "#b07683" },
      { number: 81, status: "removable", color: "#b1757f" },
      { number: 82, status: "removable", color: "#b3747c" },
      { number: 83, status: "removable", color: "#b3757a" },
      { number: 84, status: "removable", color: "#b37576" },
      { number: 85, status: "last", color: "#b37673" },
    ],
  },
];

const fm40 = [
  {
    row: "row1",
    value: [
      { number: 1, status: "first", color: "#b2766f" },
      { number: 2, status: "removable", color: "#b17466" },
      { number: 3, status: "removable", color: "#ae725f" },
      { number: 4, status: "removable", color: "#a8745a" },
      { number: 5, status: "removable", color: "#a87452" },
      { number: 6, status: "removable", color: "#a8794e" },
      { number: 7, status: "removable", color: "#a97e4c" },
      { number: 8, status: "removable", color: "#a78244" },
      { number: 9, status: "removable", color: "#a28946" },
      { number: 10, status: "last", color: "#9d8e48" },
    ],
  },
  {
    row: "row2",
    value: [
      { number: 11, status: "first", color: "#97914b" },
      { number: 12, status: "removable", color: "#8d9352" },
      { number: 13, status: "removable", color: "#86955c" },
      { number: 14, status: "removable", color: "#7e9760" },
      { number: 15, status: "removable", color: "#7c9567" },
      { number: 16, status: "removable", color: "#699a71" },
      { number: 17, status: "removable", color: "#649a76" },
      { number: 18, status: "removable", color: "#5b947a" },
      { number: 19, status: "removable", color: "#589480" },
      { number: 20, status: "last", color: "#529687" },
    ],
  },
  {
    row: "row3",
    value: [
      { number: 21, status: "first", color: "#4e9689" },
      { number: 22, status: "removable", color: "#4c9691" },
      { number: 23, status: "removable", color: "#4a9696" },
      { number: 24, status: "removable", color: "#4a9698" },
      { number: 25, status: "removable", color: "#52949f" },
      { number: 26, status: "removable", color: "#6090a5" },
      { number: 27, status: "removable", color: "#688fa7" },
      { number: 28, status: "removable", color: "#6c8aa6" },
      { number: 29, status: "removable", color: "#7489a7" },
      { number: 30, status: "last", color: "#7b84a3" },
    ],
  },
  {
    row: "row4",
    value: [
      { number: 31, status: "first", color: "#8484a3" },
      { number: 32, status: "removable", color: "#8d85a3" },
      { number: 33, status: "removable", color: "#9483a0" },
      { number: 34, status: "removable", color: "#99819d" },
      { number: 35, status: "removable", color: "#9f7f98" },
      { number: 36, status: "removable", color: "#a9798b" },
      { number: 37, status: "removable", color: "#ae7787" },
      { number: 38, status: "removable", color: "#b1757f" },
      { number: 39, status: "removable", color: "#b3757a" },
      { number: 40, status: "last", color: "#b37673" },
    ],
  },
];

export {
  compareArray,
  discriminantValue,
  methodCalculation,
  colorBlind,
  blindType,
  blindStatus,
  fm85,
  fm40,
};
