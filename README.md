# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cindyc0106/lotide`

**Require it:**

`const _ = require('@cindyc0106/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: retrieves the first element in an array
* tail: retrieves all, but the first element in an array
* middle: retrieves the middle element(s) in an array
* assertArraysEqual: checks if two arrays are equal
* assertEqual: checks if two values are equal
* assertObjectsEqual: checks if two Objects are equal
* countLetters: counts occurence of each letter in a string
* countOnly: counts occurence of an item in an object
* eqArrays: checks if two arrays are equal
* eqObjects: checks if two objects are equal
* findKey: finds key within an object of the result of callback function
* findKeyByValue: finds key within object given the value of key
* letterPositions: find position of a letter within a string
* map: creates new array with the result of callback function
* takeUntil: returns array up until the callback function is returned true
* without: takes in an array and a value, returning array with said values removed