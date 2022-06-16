// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// triangle inequality theorem 
// the sum of two side lengths of a triangle is always greater 
// than the third side; if this is true for all 3 combinations 
// of added side lengths, its a triangle

// pseudo code 
// create an object w/ 3 ternary returning a boolean
// testing for all 3 potential triangle sides 
// if all of those are truthy return true else false 

function isTriangle(a,b,c){

  let triangle = {

    'sideA': b + c > a ? true : false,
    'sideB': a + c > b ? true : false,
    'sideC': a + b > c ? true : false,
  }

  return triangle['sideA'] === true && triangle['sideB'] === true && triangle['sideC'] === true
  ? true 
  : false

}

console.log(isTriangle(7, 10, 5))

