// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    
    return num = Number(num.toString()
                    .split('')
                    .map(element => element **2)
                    .join(''))

  }

  console.log(squareDigits(9119))
  

  function squareDigits(num){
    
    num = num.toString().split('')

   let squaredNums =   num.map(element => element **2)

   return Number(squaredNums.join(''))

  }

  console.log(squareDigits(9119))
  