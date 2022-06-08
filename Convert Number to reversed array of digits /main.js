// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
 return n.toString().split('').reverse().map(e => Number(e))
}

console.log(digitize(1234))

