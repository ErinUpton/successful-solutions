// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// filter list for both x and o and give back that string 
// is that string % 2 === 0 
// aka its even ? then there are an equal amount of x and o 

function XO(str) {
  
  let strXO = str.toLowerCase().split('').filter(e => {
    if(e === 'x' || e === 'o') {
      return e
    }
  })

  if(strXO.includes('x', 0) === false && strXO.includes('o', 0) === false) {
    return true

  } else if(strXO.length % 2 === 0 && strXO.includes('x', 0) === true && strXO.includes('o', 0) === true){
    return true

  } else {
   return false
  }
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('zpzpzpp'))
console.log(XO('oo'))

