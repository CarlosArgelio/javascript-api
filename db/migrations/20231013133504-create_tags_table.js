const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tags')
  }
};

