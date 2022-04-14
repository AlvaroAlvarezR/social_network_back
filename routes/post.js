module.exports = app => {
    const router  = require('express').Router();
    const post = require('../controllers/post');
    const isAuthenticated = require('../middleware/authenticator');

    router.get('/:id(\d+)', isAuthenticated, post.getPost);
    router.post('/', isAuthenticated, post.createPost);
    router.put('/:id', isAuthenticated, post.editPost);
    router.delete('/:id', isAuthenticated, post.deletePost);
    router.get('/user/:id?', isAuthenticated, post.getUserPosts);
    router.get('/feed', isAuthenticated, post.getFeed);
    app.use('/api/post', router);
};


