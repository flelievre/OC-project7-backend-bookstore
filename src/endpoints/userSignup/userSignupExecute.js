const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const userSignupExecute = async ({
  body: {
    email = '',
    password = '',
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const usersCollection = mongodb.collection('users');

  const hashedPassword = hash(password);

  const result = await usersCollection.insertOne({
    email,
    password: hashedPassword,
  });

  const responseToClient = {
    message: 'Sign up successful',
  };

  return ({
    responseToClient,
  });
};

exports.default = userSignupExecute;
