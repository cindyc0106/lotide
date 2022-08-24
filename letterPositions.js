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



const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions('cindy chen'))