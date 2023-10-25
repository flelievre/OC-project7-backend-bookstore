const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookRateDbRequests = async ({
  params: {
    id = '',
  } = {},
  body: {
    userId = '',
    rating = -1,
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');
  const usersCollection = mongodb.collection('users');

  const book = await booksCollection.findOne({
    _id: new ObjectId(id),
  });
  const user = await usersCollection.findOne({
    _id: new ObjectId(userId),
  });
  
  return ({
    book,
    user,
  });
};

exports.default = bookRateDbRequests;
