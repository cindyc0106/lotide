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
  const results = {};       //assigning variable result to empty object

  for (let i = 0; i < sentence.length; i++) {     //looping through each character of sentence
    if (sentence.charAt(i) !== " ") {             //charAt(i) references the letter at that index; if character is not a space
      if (results[sentence.charAt(i)]) {          
        results[sentence.charAt(i)].push(i);      //if the letter is the same, add the index to results
      } else {
        results[sentence.charAt(i)] = [i];        //or else just print index
      }
    }
  } 
  return results;
};

console.log(letterPositions('cindy chen'))