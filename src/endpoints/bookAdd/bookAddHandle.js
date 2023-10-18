const bookAddAssert = require('./bookAddAssert').default;
const bookAddVerify = require('./bookAddVerify').default;
const bookAddDbRequests = require('./bookAddDbRequests').default;
const bookAddExecute = require('./bookAddExecute').default;

const bookAddHandle = async (req, res) => {
  try {
    const {
      body: {
        book,
      },
      file,
      userJwtToken,
    } = req;

    const body = JSON.parse(book);

    bookAddAssert({
      body,
      file,
      userJwtToken,
    });

    const dbResults = await bookAddDbRequests({
      userJwtToken,
    });

    await bookAddVerify({
      body,
      file,
      userJwtToken,
      dbResults,
    });

    const {
      responseToClient,
    } = await bookAddExecute({
      body,
      file,
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

exports.default = bookAddHandle;
