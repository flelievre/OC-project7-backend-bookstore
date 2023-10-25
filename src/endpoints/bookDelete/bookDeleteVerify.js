const {
  equal,
} = require('assert');

const bookDeleteVerify = ({
  dbResults: {
    book = null,
    book: {
      userId: bookUserId = '',
    } = {},
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = 0,
    exp = 0,
  } = {},
} = {}) => {
  equal(book !== null, true, 'Unauthorized');
  equal(bookUserId === jwtTokenUserId, true, 'Unauthorized');
};

exports.default = bookDeleteVerify;
