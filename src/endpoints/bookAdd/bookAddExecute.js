const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');
const {
  uploadBufferToBucket,
} = require('../../firebase');
const {
  bufferToWebpBuffer,
} = require('../../functions');

const bookAddExecute = async ({
  body: {
    userId = '',
    title = '',
    author = '',
    year = '',
    genre = '',
    ratings = [],
    averageRating = 0,
  } = {},
  file: {
    buffer = null,
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  const book = await booksCollection.insertOne({
    userId,
    title,
    author,
    imageUrl: '',
    year: +year,
    genre,
    ratings,
    averageRating,
  });

  const {
    insertedId: bookId,
  } = book;

  const webpBuffer = await bufferToWebpBuffer({
    buffer: buffer,
  });

  const bucketPath = `books/images/${bookId}.webp`;

  const bookImageUrl = await uploadBufferToBucket(
    bucketPath,
    webpBuffer,
  );

  const result = await booksCollection.updateOne(
    { _id: new ObjectId(bookId) },
    { $set: { imageUrl: bookImageUrl } },
  );

  return ({
    responseToClient: {
      success: true,
    },
  });
};

exports.default = bookAddExecute;
