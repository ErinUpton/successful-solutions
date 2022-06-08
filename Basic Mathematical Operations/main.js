// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2){
 
  let objectSums = {
  '+': value1 + value2,
  '-': value1 - value2,
  '/': value1 / value2,
  '*': value1 * value2
 }

  return objectSums[operation]

}

console.log(basicOp('+', 1, 2))
console.log(basicOp('/', 10, 2))
console.log(basicOp('*'))