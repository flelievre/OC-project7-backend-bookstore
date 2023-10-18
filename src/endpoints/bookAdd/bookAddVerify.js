const {
  equal,
} = require('assert');

const bookAddVerify = ({
  body: {
    userId: bodyUserId = '',
  } = {},
  file: {
    mimetype = '',
  } = {},
  userJwtToken: {
    userId = '',
  } = {},
  dbResults: {
    userInDb = {},
  } = {},
}) => {
  equal(userId, bodyUserId, 'Wrong user ID provided');
  equal(mimetype.startsWith('image/'), true, 'Wrong file type');
  equal(userInDb !== null, true, 'Unauthorized');
};

exports.default = bookAddVerify;
