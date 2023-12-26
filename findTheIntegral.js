//Create a function that finds the integral of the expression passed.

//In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

function integrate(coefficient, exponent) {
  const newExponent = exponent + 1;
  const newCoefficient = coefficient / newExponent;

  return `${newCoefficient}x^${newExponent}`
}

