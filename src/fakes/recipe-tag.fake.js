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

const generateOneRecipeTag = async () => {

  const indexRandomTag = Math.floor(Math.random() * tagListId.length);
  const indexRandomRecipe = Math.floor(Math.random() * recipeListId.length);

  return {
    id: uuidv4(),
    recipe_id: recipeListId[indexRandomRecipe],
    tag_id: tagListId[indexRandomTag],
  }
};

const generateManyRecipeTag = async (size) => {
  const limit = size ?? 10;
  const fakeTag = [];

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

  for (let i = 0; i < limit; i += 1) {
    fakeTag.push(generateOneRecipeTag());
  }
  var myRecipeTag = null;
  await Promise.all(fakeTag)
  .then(results => {
    const objects = results.map(result => result);
    myRecipeTag = objects
  })
  .catch(error => {
    console.error(error);
  });
  return myRecipeTag;
};
// generateManyRecipeTag()
//   .then( (resp) => {
//     console.log(resp);
//   })
module.exports = { generateOneRecipeTag, generateManyRecipeTag };
