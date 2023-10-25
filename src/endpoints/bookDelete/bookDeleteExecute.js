const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookDeleteExecute = async ({
  params: {
    id = '',
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  const book = await booksCollection.deleteOne({
    _id: new ObjectId(id),
  });
  
  const responseToClient = {
    ...book,
  };

  return ({
    responseToClient,
  });
};

exports.default = bookDeleteExecute;
