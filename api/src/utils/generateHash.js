const crypto = require('crypto-js');

module.exports = function generateUniqueId(text = process.env.API_SECRET) {
  const hash = crypto.SHA256(text);

  return hash.toString(crypto.enc.Base64);
};
