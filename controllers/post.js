const db = require("../models");
const Post = db.Post;
const paginator = require('../helpers/paginator');

exports.getPost = async (req , res) => {
    const {id} = req.params;
    const post = await Post.findByPk(id, {
        include: ['user']
    });
    res.send(post);
}

exports.createPost = async (req , res) => {
    const {text} = req.body;
    const userId = req.body.auth.id;
    try {
        await Post.create({
            text, userId
        })
        res.status(200).send({msg: 'Post Creado'});
    } catch (error) {
        return res.status(404).send('No se pudo crear post')
    }
}

exports.editPost = async (req , res) => {
    const {id} = req.params;
    const {text} = req.body;
    try {
        await Post.update({
            text
        },{
            where: { id }
        })
        res.status(200).send({msg: 'Post Editado'});
    } catch (error) {
        return res.status(404).send('No se pudo editar post')
    }
}

exports.deletePost = async (req , res) => {
    const {id} = req.params;
    try {
        await Post.destroy({
            where: { id }
        })
        res.status(200).send({msg: 'Post Eliminado'});
    } catch (error) {
        return res.status(404).send('No se pudo eliminar post')
    }
}

exports.getUserPosts = async (req , res) => {
    const {id} = req.params;
    const userId = id ? id : req.body.auth.id;
    try {
        const posts = await Post.findAll({
            where: { userId }
        })
        res.status(200).send({msg: 'Listado post', posts });
    } catch (error) {
        return res.status(404).send('No se pudo traer listado de post')
    }
}

exports.getFeed = async (req , res) => { // Missing: Add Comments to Posts tree
    // const userId = req.body.auth.id;
    const {page, size} = req.query;
    const { limit, offset } = paginator.getPagination(page, size);
    const posts = await Post.findAndCountAll({
        // where: {userId},
        limit,
        offset,
        order: [["createdAt", "DESC" ]]
    })
    const data = paginator.getPagingData(posts, page, limit)
    return res.status(200).send({msg: 'Listado Post', data});
}