import { User, UserSchema } from './user';
import { Category, CategorySchema } from './category';
import { Recipe, RecipeSchema } from './recipe';
import { Tag, TagSchema } from './tag';
import { RecipeTag, RecipeTagSchema } from './recipe.tag';


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Recipe.init(RecipeSchema, Recipe.config(sequelize));
  Tag.init(TagSchema, Tag.config(sequelize));
  RecipeTag.init(RecipeTagSchema, RecipeTag.config(sequelize));
};

module.exports = setupModels;
