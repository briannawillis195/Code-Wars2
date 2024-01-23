//Numbers ending with zeros are boring. They might be fun in your world, but not here Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  // your code
    const stringWithoutZeros = String(n).replace(/0+$/, '');

  // Convert the string back to a number
  const result = Number(stringWithoutZeros);

  return result;
}