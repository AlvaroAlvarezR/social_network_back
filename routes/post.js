module.exports = app => {
    const router  = require('express').Router();
    const post = require('../controllers/post');

    router.get('/:id',post.getPost);
    router.post('/',post.createPost);
    app.use('/api/post', router);
};


