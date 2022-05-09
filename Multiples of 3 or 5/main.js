 //If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 //Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
 //Note: If the number is a multiple of both 3 and 5, only count it once.

//Solution 1 
arrOfNums = [];

function solution(number){

  for(let i = 1; i < number; i++) {
    arrOfNums.push(i);
  }
  return arrOfNums.reduce((sumNums, currentNumber) => currentNumber % 3 === 0 || currentNumber % 5 === 0 ? sumNums + currentNumber : sumNums, 0); 
}

console.log(solution(20));


//Solution 2
function solution(number) {
  let newNum = [];
  
     for(i = 1; i < number; i++) {
        newNum.push(i)
     }
  
    return newNum.filter(e => e % 3 === 0 || e % 5 === 0).reduce((t, c) => t + c, 0) 
  }