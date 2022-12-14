import { fm40, fm85 } from "./method-loader";

const genderType = [
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
];

const testType = [
  {
    type: "Farnsworth Munsell-85 Hue",
    value: fm85,
  },
  {
    type: "Farnsworth Munsell-40 Hue",
    value: fm40,
  },
];

const colorBlindRange = {
  type85: {
    blue: {
      Lower: { min: 42, max: 50 },
      Upper: { min: 2, max: 5 },
    },
    green: {
      Lower: { min: 52, max: 57 },
      Upper: { min: 11, max: 20 },
    },
    red: {
      Lower: { min: 59, max: 66 },
      Upper: { min: 14, max: 22 },
    },
  },

  type40: {
    blue: {
      Lower: { min: 17, max: 20 },
      Upper: { min: 1, max: 3 },
    },
    green: {
      Lower: { min: 24, max: 28 },
      Upper: { min: 5, max: 8 },
    },
    red: {
      Lower: { min: 21, max: 23 },
      Upper: { min: 6, max: 10 },
    },
  },
};

const colorBlindName = {
  blue: "Tritan",
  green: "Deutan",
  red: "Protan",
};

function createArray(type) {
  const test = testType.find((test) => test.type === type);
  const value = test.value;
  return value;
}

function shuffleArray(array) {
  let nowArray = array.length;

  while (0 !== nowArray) {
    let shuffle = Math.floor(Math.random() * nowArray);
    nowArray -= 1;

    let tmp = array[nowArray];
    array[nowArray] = array[shuffle];
    array[shuffle] = tmp;
  }

  return array;
}

const showFormattedDateID = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export {
  genderType,
  testType,
  colorBlindRange,
  colorBlindName,
  createArray,
  shuffleArray,
  showFormattedDateID,
};
