'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync();

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Alvaro Andrés',
          lastName: 'Alvarez Rodriguez',
          email: 'aaar529658@gmail.com',
          password: bcrypt.hashSync('12345678', salt),
          lastLogin: new Date(),
          imageUrl: '127.0.0.1:8000/static/uploads/no_image.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jeferson',
          lastName: 'Correa Perez',
          email: 'usertest1@gmail.com',
          password: bcrypt.hashSync('12345678', salt),
          lastLogin: new Date(),
          imageUrl: '127.0.0.1:8000/static/uploads/no_image.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
