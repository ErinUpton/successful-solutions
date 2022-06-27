// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let revArrOfNums = [];

    for(i = 1; i <= n; i++) {
        revArrOfNums.push(i);
    }
    
    return revArrOfNums.reverse()
  };

  console.log(reverseSeq(5))