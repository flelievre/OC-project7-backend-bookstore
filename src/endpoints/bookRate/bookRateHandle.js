const bookRateAssert = require('./bookRateAssert').default;
const bookRateVerify = require('./bookRateVerify').default;
const bookRateDbRequests = require('./bookRateDbRequests').default;
const bookRateExecute = require('./bookRateExecute').default;

const bookRateHandle = async (req, res) => {
  try {
    const {
      params,
      body,
      userJwtToken,
    } = req;

    bookRateAssert({
      params,
      body,
      userJwtToken,
    });

    const dbResults = await bookRateDbRequests({
      params,
      body,
    });

    await bookRateVerify({
      params,
      dbResults,
      userJwtToken,
      body,
    });

    const {
      responseToClient,
    } = await bookRateExecute({
      params,
      dbResults,
      body,
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

exports.default = bookRateHandle;
