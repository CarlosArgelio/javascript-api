const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipe_tag', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      recipeId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'recipe_id',
        references: {
          model: 'recipes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      tagId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tag_id',
        references: {
          model: 'tags',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('recipe_tag')
  }
};
