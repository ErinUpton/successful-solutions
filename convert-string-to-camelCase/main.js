// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// const { stringify } = require("uuid")

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// function toCamelCase(str){

//   let newStr = []
//   let newerStr 
//   let newestStr
//   let newerestStr

//   str.split('').forEach(e => {
//     e.includes('-') === false && e.includes('_') === false 
//     ? newStr.push(e) 
//     : newStr.push(' ')
//   })

//   newerStr = newStr.join('').split(' ')

//   newerStr.forEach(e => {
//    return e.split('')
//   })

//   newestStr = newerStr.map(e => {
//     return e.split('')
//   })

//   newerestStr = newestStr.map(e => { 

//   })
//   return newestStr

// }

// console.log(toCamelCase('this-is-not-camelCase'))




function toCamelCase(str = '') {
  const camelSymbol = str.includes('-') ? '-' : '_';
  const camelType =
    str.charAt(0) === str.charAt(0).toUpperCase() ? 'upperCase' : 'camelCase';
  const strToArr = str.split(camelSymbol);
  const mutateArr = strToArr.map((word, index) => {
    if (index === 0) {
      if (camelType === 'camelCase') {
        return word.charAt(0).toLowerCase() + word.slice(1);
      }

      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return mutateArr.join('');
}

console.log(toCamelCase('This-is-not-camelCase'))
