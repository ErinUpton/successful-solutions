// // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Solution 1 long way 
function duplicateEncode(word){

    let str = word.toLowerCase();
    let newStr = '';
    
    for (let i = 0; i < str.length; i++) {

        if(str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            newStr += ')';
        } else {
            newStr += '(';
        }
    
        
}
return newStr;
}

console.log(duplicateEncode('Hello World'));




// Solution 2 more concise using map 

function duplicateEncode(word) {
    word = word.toLowerCase()
               .split('')
     
    let newStr = word.map(element => word.indexOf(element) === word.lastIndexOf(element) ? element = '(' : element = ')')
    
    return newStr.join('');
   
   }

   // Solution 3 forEach
   function duplicateEncode(word){
    word = word.toLowerCase().split('')
    encodedStr = [];

   word.forEach(e => word.indexOf(e) === word.lastIndexOf(e) ? encodedStr.push('(') : encodedStr.push(')'))

   return encodedStr.join('')
}