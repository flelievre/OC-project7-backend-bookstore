const {
  assertNonEmptyString,
  assertPositiveInteger,
} = require('../../functions');

const bookEditAssert = ({
  body: {
    userId = '',
    title = '',
    author = '',
    year = '',
    genre = '',
  } = {},
  params: {
    id: bookId = '',
  },
  file = undefined,
  file: {
    mimetype = '',
    size = '',
    originalname = '',
    fieldname = '',
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = -1,
    exp = -1,
  } = {},
} = {}) => {
  assertNonEmptyString(bookId, 'bookId');
  assertNonEmptyString(userId, 'userId');
  assertNonEmptyString(title, 'title');
  assertNonEmptyString(author, 'author');
  assertPositiveInteger(+year, 'year');
  assertNonEmptyString(genre, 'genre');
  if (file) {
    assertNonEmptyString(mimetype, 'mimetype');
    assertPositiveInteger(size, 'size');
    assertNonEmptyString(originalname, 'originalname');
    assertNonEmptyString(fieldname, 'fieldname');
  }
  assertNonEmptyString(jwtTokenUserId, 'jwtTokenUserId');
  assertPositiveInteger(iat, 'iat');
  assertPositiveInteger(exp, 'exp');
};

exports.default = bookEditAssert;


