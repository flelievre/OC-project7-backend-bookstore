const {
  equal,
} = require('assert');

const bookEditVerify = ({
  body: {
    userId: bodyUserId = '',
  } = {},
  file = undefined,
  file: {
    mimetype = '',
  } = {},
  userJwtToken: {
    userId: jwtUserId = '',
  } = {},
  dbResults: {
    userInDb = null,
    bookInDb = null,
    bookInDb: {
      userId = '',
    } = {},
  } = {},
}) => {
  equal(userId, bodyUserId, 'Wrong user ID provided');
  equal(userId, jwtUserId, 'Unauthorized');
  equal(bodyUserId, jwtUserId, 'Unauthorized');
  equal(userInDb !== null, true, 'Unauthorized');
  equal(bookInDb !== null, true, 'Unauthorized');
  if (file) {
    equal(mimetype.startsWith('image/'), true, 'Wrong file type');
  }
};

exports.default = bookEditVerify;
