const { models } = require('../../libs/sequelize')
const { v4: uuidv4 } = require('uuid');

let recipeListId = [];
let tagListId = [];

const findRecipe = async () => {
  const recipeId = await models.Recipe.findAll();
  return recipeId
};

const findTag = async () => {
  const tagId = await models.Tag.findAll();
  return tagId
};

findTag()
  .then( (tags) => {
    for (const tag of tags) {
      const tagId = tag.dataValues.id;
      tagListId.push(tagId)
    }
    const indexRandomTag = Math.floor(Math.random() * tagListId.length);
    console.log(tagListId[indexRandomTag]);
});


const generateOneRecipeTag = async() => {
  await findTag()
    .then( (tags) => {
      for (const tag of tags) {
        const tagId = tag.dataValues.id;
        tagListId.push(tagId)
      }
  });

  await findRecipe()
    .then( (recipes) => {
      for (const recipe of recipes) {
        const recipeId = recipe.dataValues.id;
        recipeListId.push(recipeId)
      }
  });

  const indexRandomTag = Math.floor(Math.random() * tagListId.length);
  const indexRandomRecipe = Math.floor(Math.random() * recipeListId.length);

  return {
    id: uuidv4(),
    recipe_id: recipeListId[indexRandomRecipe],
    tag_id: tagListId[indexRandomTag],
  }
};

const generateManyRecipeTag = (size) => {
  const limit = size ?? 10;
  const fakeTag = [];

  for (let i = 0; i < limit; i += 1) {
    fakeTag.push(generateOneRecipeTag());
  }
  return [...fakeTag];
};

module.exports = { generateOneRecipeTag, generateManyRecipeTag };
