'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      a1: {
        type: Sequelize.INTEGER
      },
      a2: {
        type: Sequelize.INTEGER
      },
      a3: {
        type: Sequelize.INTEGER
      },
      a4: {
        type: Sequelize.INTEGER
      },
      a5: {
        type: Sequelize.INTEGER
      },
      a6: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};