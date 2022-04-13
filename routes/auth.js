module.exports = app => {
    const router  = require('express').Router();
    const auth = require('../controllers/auth');

    router.post('/login',auth.loginUser);
    app.use('/api/auth', router);
};


