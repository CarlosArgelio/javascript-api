const { User, UserSchema } = require('./user');
const { Category, CategorySchema } = require('./category');
const { Recipe, RecipeSchema } = require('./recipe');
const { Tag, TagSchema } = require('./tag');
const { RecipeTag, RecipeTagSchema } = require('./recipe.tag');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Recipe.init(RecipeSchema, Recipe.config(sequelize));
  Tag.init(TagSchema, Tag.config(sequelize));
  RecipeTag.init(RecipeTagSchema, RecipeTag.config(sequelize));

  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Recipe.associate(sequelize.models);
  Tag.associate(sequelize.models);
  RecipeTag.associate(sequelize.models);
};

module.exports = setupModels;
