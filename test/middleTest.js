//const assertEqual = require('../assertEqual');
//const eqArrays = require('../eqArrays');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle')



//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3] )
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

describe("#middle", () => {
  it("should get back 2, 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should get back 3, 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});