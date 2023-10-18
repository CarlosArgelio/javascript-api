const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

const { models } = require('../../libs/sequelize');


const findCategory = async () => {
  const categoryId = await models.Category.findAll()
  return categoryId
};

const findUser = async () => {
  const userId = await models.User.findAll()
  return userId
};

const generateOneRecipe = () => ({
  id: uuidv4(),
  categoryId: findCategory().then((resp) => { resp[0].dataValues.id }),
  userId: findUser().then((resp) => { resp[0].dataValues.id }),
  title: faker.person.jobTitle(),
  description: faker.commerce.productDescription(),
  ingredients: faker.commerce.productDescription(),
  instructions: faker.commerce.productDescription(),
  image: faker.image.url(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime()
});

const generateManyRecipe = (size) => {
  const limit = size ?? 10;
  const fakeRecipe = [];

  for (let i = 0; i < limit; i += 1) {
    fakeRecipe.push(generateOneRecipe());
  }
  return [...fakeRecipe];
};

// find()
//   .then((resp) => {
//     console.log(resp[0].dataValues.id);
//   });
