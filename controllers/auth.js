const userQueries = require('../queries/user');
const jwt = require('../helpers/jwt')
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userQueries.findUserLogin(email);
        if (!user) {
            return res.status(404).send('Credenciales erroneas')
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (validPassword) {
            const token = jwt.generateJwt(user);
            return res.status(200).send({token})
        }
    } catch (error) {
        return res.status(404).send('error')
    }
}