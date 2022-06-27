// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


// A prime number is a number that is only divisible 
// by two distinct numbers: 1 and itself.
// For example, 7 is a prime because it is only divisible
// by 1 and 7. For example, 6 is not a prime because it 
// is divisible by 1, 2, 3, and 6.

// take in a pos num
// determine if its prime (not divisible by anything but 1 and itself)
// return true or false 

// Pseudo 
// if num < 2 return false b/c 1 is not prime (prime must
// be divisible by 1 and itself aka 2 numbers)
//  mod by all factors of n OR
//  mod by all factors of n up to sqrt of n 
// (factor pairs to either side of sqrt)
// return true or false


function isThisPrime(n) {
  if(n < 2) {
    return false
  }

  for(let i = 2; i <= n; i++) {
    if(n % i === 0) {
      return false
    }
  }
return true
}

console.log(isThisPrime(4))