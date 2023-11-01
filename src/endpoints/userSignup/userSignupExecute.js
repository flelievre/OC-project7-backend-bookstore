const {
  hash,
} = require('../../functions');
const {
  // mongodbClient,
  mongoose,
} = require('../../mongodb/mongodbClient');
const UserModel = require('./userSignup.model/UserModel').default;

const userSignupExecute = async ({
  body: {
    email = '',
    password = '',
  } = {},
} = {}) => {
  // const mongodb = mongodbClient.db('monvieuxgrimoir');
  // const usersCollection = mongodb.collection('users');

  const hashedPassword = hash(password);

  const newUser = new UserModel({
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const responseToClient = {
    message: 'Sign up successful',
  };

  return ({
    responseToClient,
  });
};

exports.default = userSignupExecute;
