'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      // define association here
    }
  }
  Like.init({
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Post', 'Comment'],
      defaultValue: 'Post',
    },
    parentId: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};