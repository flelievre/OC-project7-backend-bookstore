const jwt = require('jsonwebtoken');

const {
  JWT_SECRET = '',
} = process.env;

const verifyToken = (req, res, next) => {
  const {
    headers: {
      authorization: bearerHeader,
    } = {},
  } = req;

  const [,token] = bearerHeader.split(' ');

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized request' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    req.decoded = decoded;
    next();
  });
};

exports.default = verifyToken;
