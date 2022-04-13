const path = require('path');
const db = require("../models");
const User = db.User;

exports.getUser = async (req , res) => {
    const {id} = req.params;
    const user = await User.findByPk(id)
    res.send(user);
}

exports.createUser = async (req , res) => {
    const bcrypt = require('bcrypt');
    const salt = bcrypt.genSaltSync();
    const { firstName, lastName, email, password: descPassword } = req.body;
    const lastLogin = new Date();
    const imageUrl = '127.0.0.1:8000/static/uploads/' + req.file.filename;
    const password = bcrypt.hashSync(descPassword, salt);
    try {
        const user = await User.create({
            firstName, lastName, email, password, lastLogin, imageUrl
        })
        res.status(200).send({msg: 'Usuario Creado', user});
    } catch (error) {
        return res.status(404).send('No se pudo crear usuario')
    }
}

exports.editUser = async (req , res) => {
    const { firstName, lastName, email } = req.body;
    try {
        await User.update({
            firstName, lastName, email
        },{
            where: { id: req.body.auth.user.id}
        })
        res.status(200).send({msg: 'Usuario Editado'});
    } catch (error) {
        return res.status(404).send('No se pudo editar usuario')
    }
}

exports.editUserImage = async (req , res) => {
    const imageUrl = '127.0.0.1:8000/static/uploads/' + req.file.filename;
    try {
        await User.update({
            imageUrl
        },{
            where: { id: req.body.auth.user.id}
        })
        res.status(200).send({msg: 'Imagen de Usuario Editado'});
    } catch (error) {
        return res.status(404).send('No se pudo editar usuario')
    }
}