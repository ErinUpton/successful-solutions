// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Using two separate functions
// function findLengthsOfWords(word) {
  
//   word = word.split(' ')
//   let lengthsOfAllWords = [];

//   for(i = 0; i < word.length; i++) { 
//       lengthsOfAllWords.push(word[i].length)
// }
// return lengthsOfAllWords
// }


function findShort(s){

  s = findLengthsOfWords(s)
  s.sort((a, b) => a - b)
  return s[0]

}

// Combined Two Functions 
function findLengthsOfWords(word) {
  
  word = word.split(' ')
  let lengthsOfAllWords = [];

  for(i = 0; i < word.length; i++) { 
        lengthsOfAllWords.push(word[i].length)
}
  lengthsOfAllWords.sort((a, b) => a - b)
  return lengthsOfAllWords[0]
}

console.log(findLengthsOfWords("this is a string"))


//Using a bunch of Methods Side by Side 
function findShort(s) {
  //split the string and sort it according to length
  s = s.split(' ').sort((a,b) => a.length - b.length)
  
  return s[0].length


}

console.log(findShort("this string has many letters"))


//Using Math.min()
function findShort(s) {
  s = s.split(' ')
  
  wordLengths = s.map(word => Number(word.length))
  
  return Math.min(...wordLengths)
  
  }
  
  console.log(findShort('this is a string'))