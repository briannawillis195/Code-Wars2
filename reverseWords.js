
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
const wordsArray = str.split(' ');

  // Reverse each word in the array
  const reversedArray = wordsArray.map(word => {
    // Reverse the characters in each word
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a string
  const reversedString = reversedArray.join(' ');

  return reversedString;
}