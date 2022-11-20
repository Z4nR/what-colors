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
    red: { min: 1, max: 5 },
    blue: { min: 20, max: 35 },
    green: { min: 50, max: 77 },
  },

  type40: {
    red: { min: 1, max: 5 },
    blue: { min: 10, max: 15 },
    green: { min: 20, max: 25 },
  },
};

const colorBlindName = {
  red: "Merah",
  green: " Hijau",
  blue: "Biru",
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

const showFormattedDateEN = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-EN", options);
};

export {
  genderType,
  testType,
  colorBlindRange,
  colorBlindName,
  createArray,
  shuffleArray,
  showFormattedDateEN,
};
