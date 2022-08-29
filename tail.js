const assertEqual = require('./assertEqual');

let tail = function(actual) {
  let array = actual.slice(1); //assigning new array. slicing the first element (index0). 
  return array;
};

module.exports = tail;