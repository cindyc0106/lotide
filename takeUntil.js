function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Arrays are equal: ${array1}  === ${array2}`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not equal: ${array1} !== ${array2}`);
  }
};

//assignment below


const takeUntil = function(array, callback) {
  let newArray = [];          //assigning new array
  for (element of array) {    //loop through each element of array
    if (!callback(element)) { //if callback fn is not applicable, then push the element to the new array
      newArray.push(element);
    } else {
      break;
    }
  } return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);