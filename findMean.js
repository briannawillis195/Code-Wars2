//Find the mean (average) of a list of numbers in an array.

var findAverage = function(nums) {
    if (nums.length === 0) {
      return 0; // Return 0 for an empty array
    }
  
    var sum = nums.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  
    return sum / nums.length;
  };