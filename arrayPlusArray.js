//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.


function arrayPlusArray(arr1, arr2) {
  function add(a, b) {
    return a + b;
  }

  let sum = arr1.reduce(add, 0) + arr2.reduce(add, 0);
  
  return sum;
}