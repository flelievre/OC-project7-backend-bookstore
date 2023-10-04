const {
  equal,
} = require('assert');

const userSignupVerify = ({
  dbResults: {
    nbUsersMatchingEmail = 1,
  } = {},
} = {}) => {
  equal(nbUsersMatchingEmail === 0, true, 'User already registered');
};

exports.default = userSignupVerify;
