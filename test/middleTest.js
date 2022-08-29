const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3] )
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])