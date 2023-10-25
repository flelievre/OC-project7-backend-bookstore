const {
  assertNonEmptyString,
  assertPositiveInteger,
} = require('../../functions');

const bookRateAssert = ({
  params: {
    id = '',
  } = {},
  body: {
    userId = '',
    rating = -1,
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = -1,
    exp = -1,
  } = {},
} = {}) => {
  assertNonEmptyString(id, 'id');
  assertNonEmptyString(userId, 'userId');
  assertPositiveInteger(rating, 'rating');
  assertNonEmptyString(jwtTokenUserId, 'jwtTokenUserId');
  assertPositiveInteger(iat, 'iat');
  assertPositiveInteger(exp, 'exp');
};

exports.default = bookRateAssert;
