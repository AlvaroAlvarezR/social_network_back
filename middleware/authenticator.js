const jwt = require('jsonwebtoken');
const userQueries = require('../queries/user');

const isAuthenticated = async(req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(400).send('No existe el header de autorización');
    }
    const [bearer, token] = authHeader.split(' ');
    const decodedToken = jwt.verify(token, 'SECRET_JWT_SEED');
    try {
        const decodedToken = jwt.verify(token, 'SECRET_JWT_SEED');
        const user = await userQueries.findUserLogin(decodedToken.user.email);
        req.body.auth = { ...user };
        next();
      } catch (error) {
        return res.status(400).send('Token inválido');
      }
}

module.exports = isAuthenticated;
