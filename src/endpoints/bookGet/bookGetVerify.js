const {
  equal,
} = require('assert');

const bookGetVerify = ({
  dbResults: {
    book = null,
  } = {},
} = {}) => {
  equal(book !== null, true, 'Unauthorized');
};

exports.default = bookGetVerify;
