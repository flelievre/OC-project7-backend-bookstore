const {
  assertNonEmptyString,
} = require('../../functions');

const userLoginAssert = ({
  body: {
    email = '',
    password = '',
  } = {},
} = {}) => {
  assertNonEmptyString(email, 'email');
  assertNonEmptyString(password, 'password');
};

exports.default = userLoginAssert;
