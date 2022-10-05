import { fm40, fm85 } from "./method-loader";

const genderType = [
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
];

const testType = [
  {
    type: "Fransworth Munsell-85 Hue",
    label: "Fransworth Munsell-85 Hue",
    value: fm85,
  },
  {
    type: "Fransworth Munsell-40 Hue",
    label: "Fransworth Munsell-40 Hue",
    value: fm40,
  },
  //{ type: "hrr", label: "Hardy Rand Rittler" },
  //{ type: "ishihara", label: "Ishihara" },
];

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

export { genderType, testType, createArray, shuffleArray, showFormattedDateEN };
