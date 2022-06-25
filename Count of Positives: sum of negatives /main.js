// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {

  let finalArr = [];
  if(!input) {
    finalArr = [];
  } else {
    let positives = [input.filter(e => e > 0).length];
    let negatives = [input.filter(e => e < 0).reduce((t, c) => t + c, 0)];
    finalArr = positives.concat(negatives)

    finalArr[0] === 0 && finalArr[1] === 0 || input === null ? finalArr = [] : finalArr 
  }
    return finalArr
}


console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))

console.log(countPositivesSumNegatives([0, 0]))

console.log(countPositivesSumNegatives(null))
