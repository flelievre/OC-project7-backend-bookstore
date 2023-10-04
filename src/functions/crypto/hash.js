const crypto = require('crypto');

const hash = (text) => (
  crypto.createHash('md5').update(text).digest('hex')
);

exports.default = hash;
