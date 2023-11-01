const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const userSignupDbRequests = async ({
  // body: {
  //   email = '',
  // } = {},
} = {}) => {
  // const mongodb = mongodbClient.db('monvieuxgrimoir');
  // const usersCollection = mongodb.collection('users');

  // const findResults = await usersCollection.find({
  //   email,
  // });
  
  // const findResultsArray = await findResults.toArray();

  // return ({
  //   nbUsersMatchingEmail: findResultsArray.length,
  // });
};

exports.default = userSignupDbRequests;
