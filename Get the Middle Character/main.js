// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// pseudo code
// figure out length of word 
// figure out if its odd or even using modulo
// if statement to handle two different cases 
// return midle character/s 

// evens
// split num into thirds 
// 6 / 3 === 2
// starting at index 1, give me that and 1 index over 

// odds
// split number into half
// 7 / 2 === 3.5 
// minus .5 to get middle number index
// return that index 


function getMiddle(s){
 if(s.length % 2 === 0) {

  let indexMidNum = (s.length / 2) -1
  return s.split('').splice(indexMidNum, 2).join('')

 } else if(s.length % 2 !== 0) {

  let indexMidNum = (s.length / 2) - .5
  return s.split('').splice(indexMidNum, 1).join('')

 }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
