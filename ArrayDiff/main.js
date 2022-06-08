// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.


function arrayDiff(a, b) {
  let arr1 = [];

  if(b.length === 0 || a.length === 0){
    return a;
    
  } else{
      arr1 = a.filter(num => !(b.includes(num)) );
      return arr1;
  }
}