const {
  mongodbClient,
} = require('../../mongodb/mongodbClient');

const booksBestRatingDbRequests = async () => {
  const mongodb = mongodbClient.db('monvieuxgrimoir');
  const booksCollection = mongodb.collection('books');

  const pipeline = [
    {
      $sort: {
        averageRating: -1,
      },
    },
    {
      $limit: 3,
    },
  ];

  const bestBooks = await booksCollection.aggregate(pipeline).toArray();

  return ({
    bestBooks,
  });
};

exports.default = booksBestRatingDbRequests;
