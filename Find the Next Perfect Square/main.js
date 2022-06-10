// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


// pseudo code 
// square the num arg if int next-step else -1
// round down to nearest int
// nearest int + 1 
// (nearest int + 1) * (nearest int + 1) to find next perf square
// nums:  1 2 3  4  5  6  7  8  9  10  11  12
// nums^2 1 4 9 16 25 36 49 64 81 100 121 144
// pattern 3 5 7  9 11 13 15 17  19  21  23 
// theres a pattern.. the next perf square is 2++

function findNextSquare(sq) {

  if(Number.isInteger(sq) === true && Number.isInteger(Math.sqrt(sq)) === true) {
    let sqrtSq = Math.sqrt(sq)
    let roundDown = Math.floor(sqrtSq)
    let nearestSqrt = roundDown + 1
    let nearestSq = nearestSqrt * nearestSqrt
    return nearestSq

  } else {
    return -1
  }
}

console.log(findNextSquare(4))
