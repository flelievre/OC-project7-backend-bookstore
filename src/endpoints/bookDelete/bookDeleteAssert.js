const {
  assertNonEmptyString,
  assertPositiveInteger,
} = require('../../functions');

const bookDeleteAssert = ({
  params: {
    id = '',
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = -1,
    exp = -1,
  } = {},
} = {}) => {
  assertNonEmptyString(id, 'id');
  assertNonEmptyString(jwtTokenUserId, 'jwtTokenUserId');
  assertPositiveInteger(iat, 'iat');
  assertPositiveInteger(exp, 'exp');
};

exports.default = bookDeleteAssert;
