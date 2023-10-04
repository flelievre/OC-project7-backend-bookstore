const {
  assertNonEmptyString,
} = require('../../functions');

const userSignupAssert = ({
  body: {
    email = '',
    password = '',
  } = {},
} = {}) => {
  assertNonEmptyString(email, 'email');
  assertNonEmptyString(password, 'password');
};

exports.default = userSignupAssert;
