const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const booksGetExecute = async ({
  dbResults: {
    books = [],
  } = {},
} = {}) => {
  
  const responseToClient = [
    ...books,
  ];

  return ({
    responseToClient,
  });
};

exports.default = booksGetExecute;
