const {
  equal,
} = require('assert')

const assertString = (input, variableName) => equal(
  typeof input,
  'string',
  `${variableName} should be a string and not: ${input} of type: ${typeof input}`,
)

exports.default = assertString;
