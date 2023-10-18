const bookGetAssert = require('./bookGetAssert').default;
const bookGetVerify = require('./bookGetVerify').default;
const bookGetDbRequests = require('./bookGetDbRequests').default;
const bookGetExecute = require('./bookGetExecute').default;

const bookGetHandle = async (req, res) => {
  try {
    const {
      params,
    } = req;

    bookGetAssert({
      params,
    });

    const dbResults = await bookGetDbRequests({
      params,
    });

    await bookGetVerify({
      params,
      dbResults,
    });

    const {
      responseToClient,
    } = await bookGetExecute({
      params,
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
    
    console.error(e);
    console.error(`[-] ${message}`);

    res.status(400).send({
      success: false,
      message,
      responseData: data,
    });
  }
};

exports.default = bookGetHandle;
