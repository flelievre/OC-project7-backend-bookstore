const booksBestRatingAssert = require('./booksBestRatingAssert').default;
const booksBestRatingVerify = require('./booksBestRatingVerify').default;
const booksBestRatingDbRequests = require('./booksBestRatingDbRequests').default;
const booksBestRatingExecute = require('./booksBestRatingExecute').default;

const booksBestRatingHandle = async (req, res) => {
  try {
    const {
      body,
    } = req;

    booksBestRatingAssert({
      body,
    });

    const dbResults = await booksBestRatingDbRequests({
      body,
    });

    await booksBestRatingVerify({
      body,
      dbResults,
    });

    const {
      responseToClient,
    } = await booksBestRatingExecute({
      body,
      dbResults,
    });

    res.status(200).send(responseToClient);
  } catch (e) {
    const {
      message = '',
      response: {
        data = {},
      } = {},
    } = e || {};
    
    console.error(`[-] ${message}`);

    res.status(400).send({
      success: false,
      message,
      responseData: data,
    });
  }
};

exports.default = booksBestRatingHandle;
