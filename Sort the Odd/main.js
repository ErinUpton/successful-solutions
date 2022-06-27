// Task
// You will be given an array of numbers. You have to sort the odd numbers 
// in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// Pseudo code 
// create a new arr of odd nums sorted least to greatest
// replace the odd nums in orig arr w the sorted odd nums
// using map and shift 

function sortArray(array) {
  
  const oddNumsSorted = array.filter(e => e % 2 !== 0)
                        .sort((a, b) => a - b)

  let replacedOddNumsArr = array.map(e => {
    if(e % 2 !== 0) {
      return oddNumsSorted.shift()
    } else {
      return e
    }
  })
return replacedOddNumsArr
}

console.log(sortArray([5, 8, 6, 3, 4]))