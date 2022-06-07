
// // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// // let array = [0, 'word', false, 0, 'anotherword', 0, true];

// Solution 1 for loop & else.. else.. if... 
function moveZeros(array) {
  let newArr = [];
  let arrZero = [];
      for(i = 0; i < array.length; i++) {
          if(array[i] !== 0) {
              newArr.push(array[i])
          } else if(array[i] === 0) {
              arrZero.push(0)
          }
      }
      return newArr.concat(arrZero)
  }


console.log(moveZeros(array));


// Solution 2 ternary 
function moveZeros(array) {
  let newArr = [];
  let arrZero = [];
      for(i = 0; i < array.length; i++) {
          array[i] !== 0 ? newArr.push(array[i]) : arrZero.push(0)
      }
      return newArr.concat(arrZero)
  }