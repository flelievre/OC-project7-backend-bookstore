const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookEditDbRequests = async ({
  userJwtToken: {
    userId = '',
  } = {},
  params: {
    id: bookId = '',
  },
}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const usersCollection = mongodb.collection('users');
  const booksCollection = mongodb.collection('books');

  const userInDb = await usersCollection.findOne({
    _id: new ObjectId(userId),
  });

  const bookInDb = await booksCollection.findOne({
    _id: new ObjectId(bookId),
  });

  return ({
    userInDb,
    bookInDb,
  });
};

exports.default = bookEditDbRequests;
