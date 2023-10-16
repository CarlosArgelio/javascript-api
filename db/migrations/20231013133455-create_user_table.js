const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      emailVerifiedAt: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        field: 'email_verified_at'
      },
      rememberToken: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'remember_token'
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
    await queryInterface.dropTable('recipes')
  }
};
