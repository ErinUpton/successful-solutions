//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
   return  x.split('').filter(e => e !== ' ').join('')
}

console.log(noSpace('remove these spaces'))