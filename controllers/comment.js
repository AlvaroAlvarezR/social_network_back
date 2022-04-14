const db = require("../models");
const Comment = db.Comment;

exports.getComment = async (req , res) => {
    const {id} = req.params;
    const post = await Comment.findByPk(id);
    res.send(post);
}

exports.createComment = async (req , res) => {
    const {text, postId} = req.body;
    const userId = req.body.auth.id;
    try {
        await Comment.create({
            text, userId, postId
        })
        res.status(200).send({msg: 'Comentario Creado'});
    } catch (error) {
        return res.status(404).send('No se pudo crear Comentario')
    }
}

exports.editComment = async (req , res) => {
    const {id} = req.params;
    const {text} = req.body;
    try {
        await Comment.update({
            text
        },{
            where: { id }
        })
        res.status(200).send({msg: 'Comentario Editado'});
    } catch (error) {
        return res.status(404).send('No se pudo editar comentario')
    }
}

exports.deleteComment = async (req , res) => {
    const {id} = req.params;
    try {
        await Comment.destroy({
            where: { id }
        })
        res.status(200).send({msg: 'Comentario Eliminado'});
    } catch (error) {
        return res.status(404).send('No se pudo eliminar comentario')
    }
}

exports.getCommentsByPost = async (req , res) => {
    const {postId} = req.params;
    try {
        const comments = await Comment.findAll({
            where: { postId }
        })
        res.status(200).send({msg: 'Listado Comentarios del post', comments });
    } catch (error) {
        return res.status(404).send('No se pudo traer listado de comentarios del post')
    }
}
