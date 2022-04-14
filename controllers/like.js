const db = require("../models");
const Like = db.Like;

exports.countLikesByPost = async (req , res) => {
    const {id: postId} = req.params;
    try {
        const likes = await Like.count({
            where: { type: 'Post', parentId: postId }
        });
        res.status(200).send({msg: 'Likes por Post', likes});
    } catch (error) {
        return res.status(404).send('No se pudo contar likes del post')
    }
}

exports.countLikesByComment = async (req , res) => {
    const {id: commentId} = req.params;
    try {
        const likes = await Like.count({
            where: { type: 'Comment', parentId: commentId }
        });
        res.status(200).send({msg: 'Likes por Comentario', likes});
    } catch (error) {
        return res.status(404).send('No se pudo contar likes del comentario')
    }
}

exports.createLike = async (req , res) => {
    const {type, parentId} = req.body;
    const userId = req.body.auth.id;
    try {
        await Like.create({
            type, parentId, userId
        })
        res.status(200).send({msg: 'Like Añadido'});
    } catch (error) {
        return res.status(404).send('No se pudo añadir like')
    }
}


exports.deleteLike = async (req , res) => {
    const {id} = req.params;
    try {
        await Like.destroy({
            where: { id }
        })
        res.status(200).send({msg: 'Like Quitado'});
    } catch (error) {
        return res.status(404).send('No se pudo quitar like')
    }
}