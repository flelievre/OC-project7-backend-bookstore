const {
  assertNonEmptyString,
  assertPositiveInteger,
} = require('../../functions');

const bookAddAssert = ({
  body: {
    userId = '',
    title = '',
    author = '',
    year = '',
    genre = '',
    ratings: [
      {
        userId: ratingUserId = '',
        grade = '',
      } = {},
    ] = [],
    averageRating = 0,
  } = {},
  file: {
    mimetype = '',
    size = '',
    originalname = '',
    fieldname = '',
  } = {},
  userJwtToken: {
    userId: jwtTokenUserId = '',
    iat = 0,
    exp = 0,
  } = {},
} = {}) => {
  assertNonEmptyString(userId, 'userId');
  assertNonEmptyString(title, 'title');
  assertNonEmptyString(author, 'author');
  assertPositiveInteger(+year, 'year');
  assertNonEmptyString(ratingUserId, 'ratingUserId');
  assertPositiveInteger(grade, 'grade');
  assertPositiveInteger(averageRating, 'averageRating');
  assertNonEmptyString(mimetype, 'mimetype');
  assertPositiveInteger(size, 'size');
  assertNonEmptyString(originalname, 'originalname');
  assertNonEmptyString(fieldname, 'fieldname');
  assertNonEmptyString(jwtTokenUserId, 'userId');
  assertPositiveInteger(iat, 'iat');
  assertPositiveInteger(exp, 'exp');
};

exports.default = bookAddAssert;


