const booksGetAssert = require('./booksGetAssert').default;
const booksGetVerify = require('./booksGetVerify').default;
const booksGetDbRequests = require('./booksGetDbRequests').default;
const booksGetExecute = require('./booksGetExecute').default;

const booksGetHandle = async (req, res) => {
  try {
    const {
      body,
    } = req;

    booksGetAssert({
      body,
    });

    const dbResults = await booksGetDbRequests({
      body,
    });

    await booksGetVerify({
      body,
      dbResults,
    });

    const {
      responseToClient,
    } = await booksGetExecute({
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

exports.default = booksGetHandle;
