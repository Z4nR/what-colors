import { fm40, fm85 } from "./method-loader";

const genderType = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const testType = [
  { type: "fm85", label: "Fransworth Munsell-85 Hue", value: fm85 },
  { type: "fm40", label: "Fransworth Munsell-40 Hue", value: fm40 },
  //{ type: "hrr", label: "Hardy Rand Rittler" },
  //{ type: "ishihara", label: "Ishihara" },
];

function createArray(type) {
  const test = testType.find((test) => test.type === type);
  const value = test.value;
  return value;
}

function selectedRows(row) {
  const shuffleItem = row.map((item) => item.value);
  return shuffleItem;
}

function shuffleArray(array) {
  const rows = selectedRows(array);
  console.log(rows);

  let nowArray = rows.length;

  while (0 !== nowArray) {
    let shuffle = Math.floor(Math.random() * nowArray);
    nowArray -= 1;

    let tmp = array[nowArray];
    array[nowArray] = array[shuffle];
    array[shuffle] = tmp;
  }

  return array;
}

export { genderType, testType, createArray, shuffleArray };
