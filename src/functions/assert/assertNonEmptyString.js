const {
  equal,
} = require('assert')
const assertString = require('./assertString').default

const assertNonEmptyString = (input, variableName) => {
  assertString(input, variableName)
  equal(!!input.length, true, `${variableName} should be a non-empty string and not: ${input} of type ${typeof input}`)
}

exports.default = assertNonEmptyString
