const userSignupAssert = require('./userSignupAssert').default;
const userSignupVerify = require('./userSignupVerify').default;
const userSignupDbRequests = require('./userSignupDbRequests').default;
const userSignupExecute = require('./userSignupExecute').default;

const userSignupHandle = async (req, res) => {
  try {
    const {
      body,
    } = req;

    userSignupAssert({
      body,
    });

    const dbResults = await userSignupDbRequests({
      body,
    });

    await userSignupVerify({
      body,
      dbResults,
    });

    const {
      responseToClient,
    } = await userSignupExecute({
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

exports.default = userSignupHandle;
