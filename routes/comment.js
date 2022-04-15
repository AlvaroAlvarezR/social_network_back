module.exports = app => {
    const router  = require('express').Router();
    const comment = require('../controllers/comment');
    const isAuthenticated = require('../middleware/authenticator');

    router.get('/:id(\d+)', isAuthenticated, comment.getComment);
    router.post('/', isAuthenticated, comment.createComment);
    router.put('/:id', isAuthenticated, comment.editComment);
    router.delete('/:id', isAuthenticated, comment.deleteComment);
    router.get('/post/:id?', isAuthenticated, comment.getCommentsByPost);
    app.use('/api/comment', router);
};


