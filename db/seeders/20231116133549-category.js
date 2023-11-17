'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Мемы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Просто Яблоко',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Привычные вещи',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

