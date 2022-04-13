'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        as: 'comments'
      })
      // define association here
    }
  }
  Post.init({
    text: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};