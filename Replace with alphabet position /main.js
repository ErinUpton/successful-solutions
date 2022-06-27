// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


// pseudo code 
// create an alphabet str for reference
// split the provided str into an arr 
// traverse through the arr, and for every element 
// find that elements index + 1 in the alphabet str 
// return a str of position nums 

function alphabetPosition(text) {
  
  let textArr = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  text.toLowerCase().split('').forEach(e => {

  if(alphabet.includes(e) === true) { return textArr.push(alphabet.indexOf(e) + 1)}

   }) 

   return textArr.join(' ').toString()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))