const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const booksBestRatingExecute = async ({
  dbResults: {
    bestBooks = [],
  } = {},
} = {}) => {
  
  const responseToClient = [
    ...bestBooks,
  ];

  return ({
    responseToClient,
  });
};

exports.default = booksBestRatingExecute;
