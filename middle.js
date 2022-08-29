const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let result = [];                     //assigning empty variable to new array
  if (array.length <= 2) {             //if the length of array is less or equal to 2, return the array
    return result;
  } else if (array.length % 2 === 0) {   //or else if length of array is even, return the index of arr.length/2 and the index to the left
    return result = [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {                              // or else, return the middle of array(calculated by the odd # -1 and divided by 2)
    return result = array[(array.length - 1) / 2];
  }
};


module.exports = middle