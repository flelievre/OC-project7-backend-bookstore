const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookGetDbRequests = async ({
  params: {
    id = '',
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  const book = await booksCollection.findOne({
    _id: new ObjectId(id),
  });
  
  return ({
    book,
  });
};

exports.default = bookGetDbRequests;
