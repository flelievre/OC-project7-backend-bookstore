const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookAddDbRequests = async ({
  userJwtToken: {
    userId = '',
    iat = 0,
    exp = 0,
  } = {},
}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const usersCollection = mongodb.collection('users');

  const userInDb = await usersCollection.findOne({
    _id: new ObjectId(userId),
  });

  return ({
    userInDb,
  });
};

exports.default = bookAddDbRequests;
