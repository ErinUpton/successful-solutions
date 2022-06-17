// Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

// input	NE	    NO
// 126453	264	    153
// 3012	    2	    31
// 4628	    4628	0

// 0 is considered as an even number.

// In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.

// Solution 1: ternary 
function evenAndOdd(num){
    num = num.toString().split('')
    let NE = [];
    let NO = [];
    let combinedArr = []
    

    num.forEach(e => e === 0 ?  NE[0] = e : e % 2 === 0 ? NE.push(e) : NO.push(e))
 
    combinedArr.push(Number(NE.join('')))
    combinedArr.push(Number(NO.join('')))
    
    return combinedArr
    
  }

  console.log(evenAndOdd(126453))


// Solution: 2 if... else.. 
// Pseudo Code 
// split even numbers NE 
// % 2 === 0 
// 0 is even NE 
// split odd numbers NO 
// % 2 !== 0 

function splitEvenAndOdd(N) {

  const NE = []
  const NO = []

  N.toString().split('').forEach(e => {

    if(e % 2 === 0) {
      NE.push(e)
    } else if(e % 2 !== 0) {
      NO.push(e)
    }
  })

  return [Number(NE.join('')),  Number(NO.join(''))]

}


console.log(splitEvenAndOdd(12345))
