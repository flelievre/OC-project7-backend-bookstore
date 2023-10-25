const bookDeleteAssert = require('./bookDeleteAssert').default;
const bookDeleteVerify = require('./bookDeleteVerify').default;
const bookDeleteDbRequests = require('./bookDeleteDbRequests').default;
const bookDeleteExecute = require('./bookDeleteExecute').default;

const bookDeleteHandle = async (req, res) => {
  try {
    const {
      params,
      userJwtToken,
    } = req;

    bookDeleteAssert({
      params,
      userJwtToken,
    });

    const dbResults = await bookDeleteDbRequests({
      params,
    });

    await bookDeleteVerify({
      params,
      dbResults,
      userJwtToken,
    });

    const {
      responseToClient,
    } = await bookDeleteExecute({
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

exports.default = bookDeleteHandle;
