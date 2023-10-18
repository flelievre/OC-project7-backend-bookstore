const {
  assertNonEmptyString,
} = require('../../functions');

const bookGetAssert = ({
  params: {
    id = '',
  } = {},
} = {}) => {
  assertNonEmptyString(id, 'id');
};

exports.default = bookGetAssert;
