const {
  equal,
} = require('assert')

const assertPositiveInteger = (input, variableName) => {
  const errorMessage = `${variableName} should be a positiveInteger and not: ${input} of type: ${typeof input}`;

  equal(typeof input, 'number', errorMessage);
  equal(input >= 0, true, errorMessage);
  equal(Number.isNaN(input), false, errorMessage);
  equal(Number.isInteger(input), true, errorMessage);
};

exports.default = assertPositiveInteger;
