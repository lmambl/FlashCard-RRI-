'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'What is the capital of France?',
          answer: 'Paris',
          categotyID: 1, // Замени на реальный ID категории
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Who painted the Mona Lisa?',
          answer: 'Leonardo da Vinci',
          categotyID: 2, // Замени на реальный ID категории
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'What is the largest planet in our solar system?',
          answer: 'Jupiter',
          categotyID: 3, // Замени на реальный ID категории
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'What is the capital of France?',
          answer: 'Paris',
          categotyID: 3, // Замени на реальный ID категории
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Who painted the Mona Lisa?',
          answer: 'Leonardo da Vinci',
          categotyID: 2, // Замени на реальный ID категории
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'What is the largest planet in our solar system?',
          answer: 'Jupiter',
          categotyID: 1, // Замени на реальный ID категории
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

