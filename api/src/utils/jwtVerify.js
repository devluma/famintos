const jwt = require('jsonwebtoken');

module.exports = function jwtVerify(request, response, next) {
  const token = request.headers['x-access-token'];
  if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err)
      return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

    request.userId = decoded.id;

    return next();
  });

  return next();
};
