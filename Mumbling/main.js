// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Pseudo code
// split string to make arr 
// walk through the arr
// for every element push e in letters at current i and capitalize it 
// add on and arr of current letter in lowercase current index + 1 times
// return new arr of letters and join it with a dash 



function accum(s) {

  const letters = s.split('')
  let words = []

  for(i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
  }

  return words.join('-')
}

console.log(accum('abcd' ))