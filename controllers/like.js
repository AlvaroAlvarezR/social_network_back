const db = require("../models");
const Like = db.Like;

exports.countLikesByPost = async (req , res) => {
    const {id} = req.params;
    const like = await Like.findByPk(id);
    res.send(like);
}

exports.createLike = async (req , res) => {
    const {parentId} = req.params;
    res.send({msg: 'Like Creado'});
}


exports.deleteLike = async (req , res) => {
    const {id} = req.params;
    res.send({msg: 'Like Eliminado'});
}

exports.countLikesByComment = async (req , res) => {
    const {id} = req.params;
    const like = await Like.findByPk(id);
    res.send(like);
}