function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
   for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false
    } 
   }
  } return true
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Arrays are equal: ${array1}  === ${array2}`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not equal: ${array1} !== ${array2}`);
  }
};

//Assignment below

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];                     //assigning variable to new array
  for (let item of array) {               //loop through each string in the array
    results.push(callback(item));         //push the value of item to results from callback fn. in this case callback is referencing 0 index of each word
  }
  return results;
};
//const results1 = map(words, word => word[0]);
//console.log(results1);
//console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); 



