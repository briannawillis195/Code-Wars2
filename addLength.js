//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
  // Split the string into words
  const words = str.split(' ');

  // Map each word to a new string with its length appended
  const result = words.map(word => `${word} ${word.length}`);

  return result;
}