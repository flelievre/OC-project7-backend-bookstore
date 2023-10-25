const {
  ObjectId,
} = require('mongodb');
const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const bookRateExecute = async ({
  dbResults: {
    book,
    book: {
      ratings = [],
      averageRating = 0,
    } = {},
  } = {},
  params: {
    id: bookId = '',
  } = {},
  body: {
    userId = '',
    rating = -1,
  } = {},
} = {}) => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  ratings.push({
    userId,
    grade: rating,
  });

  const ratingsGrades = ratings.map(({ grade }) => grade);
  const newAverageRating = ratingsGrades.reduce((acc, val) => acc + val, 0) / ratings.length;

  const result = await booksCollection.updateOne(
    { _id: new ObjectId(bookId) },
    {
      $set: {
        ratings,
        averageRating: newAverageRating,
      },
    },
  );
  
  const responseToClient = {
    ...book,
    ratings,
    averageRating: newAverageRating,
  };

  return ({
    responseToClient,
  });
};

exports.default = bookRateExecute;
