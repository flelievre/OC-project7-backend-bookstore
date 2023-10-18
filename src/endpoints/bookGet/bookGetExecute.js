const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookGetExecute = async ({
  dbResults: {
    book = {},
  } = {},
} = {}) => {
  
  const responseToClient = {
    ...book,
  };

  return ({
    responseToClient,
  });
};

exports.default = bookGetExecute;
