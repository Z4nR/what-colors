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
    blue: { min: 2 && 42, max: 5 && 50 },
    green: { min: 11 && 52, max: 20 && 57 },
    red: { min: 14 && 59, max: 22 && 66 },
  },

  type40: {
    blue: { min: 1 && 17, max: 3 && 20 },
    green: { min: 5 && 24, max: 8 && 28 },
    red: { min: 6 && 21, max: 10 && 23 },
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
