const genderType = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const testType = [
  { type: "fm85", label: "Fransworth Munsell-85 Hue", value: 85 },
  { type: "fm40", label: "Fransworth Munsell-40 Hue", value: 40 },
  { type: "hrr", label: "HRR" },
  { type: "ishihara", label: "Ishihara" },
];

function createArray(type, value) {
  const array = testType.find((test) =>
    test.type === type ? test.value === value : null
  );
  return array;
}

export { genderType, testType, createArray };
