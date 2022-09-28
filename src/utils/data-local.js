import { fm40, fm85 } from "./method-loader";

const genderType = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const testType = [
  { type: "fm85", label: "Fransworth Munsell-85 Hue", value: fm85 },
  { type: "fm40", label: "Fransworth Munsell-40 Hue", value: fm40 },
  { type: "hrr", label: "Hardy Rand Rittler" },
  { type: "ishihara", label: "Ishihara" },
];

function createArray(type) {
  const test = testType.find((test) => test.type === type);
  const value = test.value;
  return value;
}

export { genderType, testType, createArray };
