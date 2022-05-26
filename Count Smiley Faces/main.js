// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// : || ;
// ) || D
// - || ~ but not required

//return the total number of smiling faces in the array

// Solution 1 
function countSmileys(arr) {
  var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  var count = 0;
  
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < smileys.length; j++){
      if (arr[i] === smileys[j]){
        count++;
      }
    }
    }
  return count;
  }

console.log(countSmileys([';-)', ';D', '0D']))


function countSmileys(arr) {
  const smiles = ':) :D ;) ;D :-) :-D ;-) ;-D :~) :~D ;~) ;~D'.split(' ');
  return arr.reduce((s, c) => smiles.includes(c) ? s + 1 : s, 0)
}