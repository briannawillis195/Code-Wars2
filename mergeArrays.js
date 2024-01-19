//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.


function mergeArrays(arr1, arr2) {

  const mergedArray = [...new Set([...arr1, ...arr2])];
  

  mergedArray.sort((a, b) => a - b);
  
  return mergedArray;
}