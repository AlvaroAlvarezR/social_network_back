const db = require("../models");
const Comment = db.Comment;

exports.getComment = async (req , res) => {
    const {id} = req.params;
    const post = await Post.findByPk(id, {
        include: ['user']
    });
    res.send(post);
}

exports.createComment = async (req , res) => {
    const {postId} = req.params;
    res.send({msg: 'Comment Creado'});
}

exports.editComment = async (req , res) => {
    const {postId} = req.params;
    res.send({msg: 'Comment Creado'});
}

exports.deleteComment = async (req , res) => {
    const {postId} = req.params;
    res.send({msg: 'Comment Eliminado'});
}

exports.getCommentsByPost = async (req , res) => {
    const {postId} = req.params;
    res.send({msg: 'Listado Post'});
}
