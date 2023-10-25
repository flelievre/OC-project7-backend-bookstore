const bookEditAssert = require('./bookEditAssert').default;
const bookEditVerify = require('./bookEditVerify').default;
const bookEditDbRequests = require('./bookEditDbRequests').default;
const bookEditExecute = require('./bookEditExecute').default;

const bookEditHandle = async (req, res) => {
  try {
    const {
      body: {
        book = '',
        ...bookProps
      } = {},
      file,
      userJwtToken,
      params,
    } = req;

    const isFormData = (book.length > 0)

    const body = isFormData
      ? JSON.parse(book)
      : {
        ...bookProps,
      };

    bookEditAssert({
      body,
      file,
      userJwtToken,
      params,
    });

    const dbResults = await bookEditDbRequests({
      userJwtToken,
      params,
    });

    await bookEditVerify({
      body,
      file,
      userJwtToken,
      dbResults,
      params,
    });

    const {
      responseToClient,
    } = await bookEditExecute({
      body,
      file,
      params,
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

exports.default = bookEditHandle;
