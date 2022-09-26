const genderType = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const fm85 = [
  {
    row: "row1",
    value: [
      { number: 1, status: "key", color: "#b2766f" },
      { number: 2, status: "removable", color: "#b1746a" },
      { number: 3, status: "removable", color: "#b17466" },
      { number: 4, status: "removable", color: "#b07464" },
      { number: 5, status: "removable", color: "#ae725f" },
      { number: 6, status: "removable", color: "#aa725b" },
      { number: 7, status: "removable", color: "a8745a" },
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
      { number: 22, status: "key", color: "#91924d" },
    ],
  },
  {
    row: "row2",
    value: [
      { number: 22, status: "key", color: "#91924d" },
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
      { number: 43, status: "key", color: "#4e9689" },
    ],
  },
  {
    row: "row3",
    value: [
      { number: 43, status: "key", color: "#4e9689" },
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
      { number: 22, status: "key", color: "#91924d" },
    ],
  },
];

const fm40 = [];

const testType = [
  { type: "fm85", label: "Fransworth Munsell-85 Hue", value: fm85 },
  { type: "fm40", label: "Fransworth Munsell-40 Hue", value: fm40 },
  { type: "hrr", label: "Hardy Rand Rittler" },
  { type: "ishihara", label: "Ishihara" },
];

function createArray(type) {
  const test = testType.find((test) => test.type === type);
  return test.value;
}

export { genderType, testType, createArray };
