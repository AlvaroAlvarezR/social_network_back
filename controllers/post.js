const db = require("../models");
const Post = db.Post;

exports.getPost = async (req , res) => {
    const {id} = req.params;
    const post = await Post.findByPk(id, {
        include: ['user']
    });
    res.send(post);
}

exports.createPost = async (req , res) => {
    const {text} = req.body;
    const user = await User.create({
        text, userId
    })
    res.send({msg: 'Post Creado'});
}

exports.editPost = async (req , res) => {
    res.send({msg: 'Post Creado'});
}

exports.deletePost = async (req , res) => {
    res.send({msg: 'Post Eliminado'});
}

exports.getUserPosts = async (req , res) => {
    const {id} = req.params;
    res.send({msg: 'Listado Post'});
}

exports.getFeed = async (req , res) => {
    res.send({msg: 'Listado Post'});
}