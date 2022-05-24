// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//Solution 1
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let zeroToThree = [];
let fourToSix = [];
let sevenToTen = [];


function createPhoneNumber(numbers){

    if (numbers.length === 10) {

        zeroToThree = numbers.slice(0, 3).join('');
        fourToSix = numbers.slice(3, 6).join('');
        sevenToTen = numbers.slice(6, 10).join('');

}
    return `(${zeroToThree}) ${fourToSix}-${sevenToTen}`;
}

console.log(createPhoneNumber(numsArr));


//Solution 2
function createPhoneNumber(numbers) {

    return numbers.length === 10 && !numbers.forEach(e => e < 10 && e >= 0) ? `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}` : 'not a valid phone number'
    
    }