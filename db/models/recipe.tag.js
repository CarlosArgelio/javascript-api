const { Model, DataTypes, Sequelize } = require('sequelize');

const RECIPE_TAG_TABLE = 'recipe_tag';

const RecipeTagSchema = {
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
}

class RecipeTag extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECIPE_TAG_TABLE,
      modelName: 'RecipeTag',
      timestamps: false
    }
  }
}


module.exports = { RECIPE_TAG_TABLE, RecipeTagSchema, RecipeTag }
