const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const userLoginExecute = async ({
  body: {
    email = '',
    password = '',
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const usersCollection = mongodb.collection('users');

  const hashedPassword = hash(password);

  const user = await usersCollection.findOne({
    email,
    password: hashedPassword,
  });

  if (!user) {
    throw Error('User not found');
  }

  const {
    _id: userId,
  } = user;

  const responseToClient = {
    userId,
    token: 'token',
  };

  return ({
    responseToClient,
  });
};

exports.default = userLoginExecute;
