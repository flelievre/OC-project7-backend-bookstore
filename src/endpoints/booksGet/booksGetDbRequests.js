const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const booksGetDbRequests = async ({
  body: {
    email = '',
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  const findResults = await booksCollection.find();
  
  const findResultsArray = await findResults.toArray();

  return ({
    books: findResultsArray,
  });
};

exports.default = booksGetDbRequests;
