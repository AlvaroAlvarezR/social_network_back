module.exports = app => {
    const router  = require('express').Router();
    const like = require('../controllers/like');
    const isAuthenticated = require('../middleware/authenticator');

    router.post('/', isAuthenticated, like.createLike);
    router.delete('/:id', isAuthenticated, like.deleteLike);
    router.get('/post/:id?', isAuthenticated, like.countLikesByPost);
    router.get('/comment/:id?', isAuthenticated, like.countLikesByComment);
    app.use('/api/like', router);
};


