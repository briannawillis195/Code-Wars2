//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  //your code here
   const result = arr.filter((element, index) => index % 2 === 0);
  return result;
}