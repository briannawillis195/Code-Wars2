//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
      return 0;
    }
  
    const sortedArr = arr.sort((a, b) => b - a);
    let sum = 0;
  
    for (let i = 0; i < sortedArr.length - 1; i++) {
      sum += sortedArr[i] - sortedArr[i + 1];
    }
  
    return sum;
  }