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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++)  {
    if (itemsToRemove.includes(source[i])){
      newArray.push(source[i])
    }
    } return newArray
  } 
  console.log(without([1, 2, 3], [1])) // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]