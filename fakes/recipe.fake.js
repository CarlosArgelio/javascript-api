const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

const { models } = require('../../libs/sequelize');

let categoryListId = [];
let userListId = [];

const findCategory = async () => {
  const categoryId = await models.Category.findAll();
  return categoryId;
};

const findUser = async () => {
  const userId = await models.User.findAll();
  return userId;
};

const generateOneRecipe = async () => {
  const indexRandomCategory = Math.floor(Math.random() * categoryListId.length);
  const indexRandomUSer = Math.floor(Math.random() * userListId.length);

  const object = {
    id: uuidv4(),
    category_id: categoryListId[indexRandomCategory],
    user_id: userListId[indexRandomUSer],
    title: faker.person.jobTitle(),
    description: faker.commerce.productDescription(),
    ingredients: faker.commerce.productDescription(),
    instructions: faker.commerce.productDescription(),
    image: faker.image.url(),
    create_at: faker.date.anytime(),
    updated_at: faker.date.anytime()
  }

  return object
};

const generateManyRecipe = async (size) => {
  const limit = size ?? 10;
  const fakeRecipe = [];

  await findCategory()
    .then( (categories) => {
      for ( const category of categories ) {
        const categoryId = category.dataValues.id;
        if (!categoryListId.includes(categoryId)) {
          categoryListId.push(categoryId);
        }
      };
    });

  await findUser()
    .then( (users) => {
      for ( const user of users ) {
        const userId = user.dataValues.id;
        if (!userListId.includes(userId)) {
          userListId.push(userId);
        }
      };
    });

  for (let i = 0; i < limit; i += 1) {
    fakeRecipe.push(generateOneRecipe());
  }
  // console.log([...fakeRecipe]);
  var myRecipes = null;
  await Promise.all(fakeRecipe)
  .then(results => {
    const objects = results.map(result => result);
    myRecipes = objects
  })
  .catch(error => {
    console.error(error);
  });
  return myRecipes;
};

module.exports = { generateOneRecipe, generateManyRecipe };
