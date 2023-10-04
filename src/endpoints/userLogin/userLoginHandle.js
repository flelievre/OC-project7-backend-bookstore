const userLoginAssert = require('./userLoginAssert').default;
const userLoginVerify = require('./userLoginVerify').default;
const userLoginDbRequests = require('./userLoginDbRequests').default;
const userLoginExecute = require('./userLoginExecute').default;

const userLoginHandle = async (req, res) => {
  try {
    const {
      body,
    } = req;

    userLoginAssert({
      body,
    });

    const dbResults = await userLoginDbRequests({
      body,
    });

    await userLoginVerify({
      body,
      dbResults,
    });

    const {
      responseToClient,
    } = await userLoginExecute({
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

exports.default = userLoginHandle;
