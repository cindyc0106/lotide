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

const middle = function(array) {
  let result = []
  if(array.length <= 2) {
    return result
  } else if(array.length % 2 === 0) {
    return result = [array[(array.length / 2)- 1], array[array.length / 2]];
  } else {
    return result = array[(array.length - 1) / 2];
  }
} 
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]