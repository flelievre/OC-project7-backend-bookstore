const {
  equal,
} = require('assert');

const bookRateVerify = ({
  params: {
    id = '',
  } = {},
  body: {
    userId = '',
  } = {},
  dbResults: {
    book = null,
    book: {
      userId: bookUserId = '',
      ratings = [],
    },
    user = null,
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = 0,
    exp = 0,
  } = {},
} = {}) => {
  equal(book !== null, true, 'Unauthorized');
  equal(user !== null, true, 'Unauthorized');
  equal(jwtTokenUserId === userId, true, 'Unauthorized');
  equal(jwtTokenUserId !== bookUserId, true, 'Unauthorized');
  equal(userId !== bookUserId, true, 'Unauthorized');
  ratings.forEach(({ userId: ratingUserId = ''}) => {
    equal(jwtTokenUserId !== ratingUserId, true, 'Unauthorized');
    equal(userId !== ratingUserId, true, 'Unauthorized');
  });
};

exports.default = bookRateVerify;
