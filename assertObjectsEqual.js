const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);       //assigning keys in object1
  const keys2 = Object.keys(object2);       //assigning keys in object2
  if (keys1.length !== keys2.length) {      //if the number of keys1 is not equal to keys 2, return false
    return false;
  }

  for (const key of keys1) {              //loop through key1
    const value1 = object1[key];          //assigning value of key1
    const value2 = object2[key];
    if (Array.isArray(value1)) {          //if value1 is an array
      if (!eqArrays(value1, value2)) {    //if value1 + value2 are not equal then return false
        return false;
      }
      continue;                           //instead of else
    }

    if (value1 !== value2) {              //if value1 doesn't equal value2, return false
      return false;
    }
  }

  return true;                        
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  // Implement me!
};

const ab = { a: "5", b: "2" };
const ba = { b: "2", a: "5" };
assertObjectsEqual(ab, ba);