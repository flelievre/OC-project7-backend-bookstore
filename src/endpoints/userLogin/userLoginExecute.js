const {
  hash,
} = require('../../functions');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');
const jwt = require('jsonwebtoken');

const {
  JWT_SECRET = '',
} = process.env;

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

  const payload = {
    userId,
  };

  const options = {
    expiresIn: '10d',
  };

  const token = jwt.sign(payload, JWT_SECRET, options);

  const responseToClient = {
    userId,
    token,
  };

  return ({
    responseToClient,
  });
};

exports.default = userLoginExecute;
