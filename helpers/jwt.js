const jwt = require('jsonwebtoken');

exports.generateJwt = ( user ) => {
  const payload = {user};
  return jwt.sign(
    payload,
    process.env.SECRET_JWT_SEED || 'SECRET_JWT_SEED',
    { expiresIn: '30d'},
  );
}