// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.



// Pseudo code 
// loop through the array 
// for each e loop through sub array 
// do any of them match eachother ? ignore it : return arr [i]
// could use includes() method

// Solution 1: 
// this times out w long arrays 
// need to make more efficient aka optimize
function findUniq(arr) {

  let uniqueLetter

  arr.forEach( (e, i) => {
    const subArr = arr.slice(0, i).concat(arr.slice(i + 1))

    if(subArr.includes(e) === false) {uniqueLetter = e}

  })

  return uniqueLetter

}

console.log(findUniq([1, 1, 1, 1, 2, 1, 1, 1, 1, 1]))
console.log(findUniq([1, 1, 1, 1, 1, 1, .55, 1, 1, 1]))


// Solution 2: 
// why is this solution faster? 
function findUniq(arr) {
  arr.sort()
  return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
}

console.log(findUniq([1, 1, 1, 1, 2, 1, 1, 1, 1, 1]))
console.log(findUniq([1, 1, 1, 1, 1, 1, .55, 1, 1, 1]))






