const { Model, DataTypes, Sequelize } = require('sequelize');

const RECIPE_TABLE = 'recipes';

const RecipeSchema = {
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
}

class Recipe extends Model {
  static associate(models) {
    this.belongsTo(models.Category, {
      as: 'category'
    });
    this.belongsTo(models.User, {
      as: 'user'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECIPE_TABLE,
      modelName: 'Recipe',
      timestamps: false
    }
  }
}


module.exports = { RECIPE_TABLE, RecipeSchema, Recipe }
