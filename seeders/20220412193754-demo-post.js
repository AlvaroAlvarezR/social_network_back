'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          text: '!Hola! !Probando mi red social!',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Segundo Post',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post', null, {});
  }
};
