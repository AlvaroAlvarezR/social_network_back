module.exports = app => {
    const router  = require('express').Router();
    const upload = require("../middleware/upload");
    const isAuthenticated = require('../middleware/authenticator');
    const user = require('../controllers/user');

    router.get('/:id', isAuthenticated, user.getUser);
    router.post('/', [
            upload.single("file"),
            isAuthenticated
        ],
        user.createUser);
    router.put('/:id', user.editUser);
    app.use('/api/user', router);
};


