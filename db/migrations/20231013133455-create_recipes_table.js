const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      userId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      ingredients: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      instructions: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      image: {
        allowNull: true,
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
    await queryInterface.dropTable('recipes')
  }
};
