const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const generateOneCategory = () => ({
  id: uuidv4(),
  name: faker.commerce.productMaterial(),
  create_at: faker.date.anytime(),
  updated_at: faker.date.anytime()
});

const generateManyCategory = (size) => {
  const limit = size ?? 10;
  const fakeCategory = [];

  for (let i = 0; i < limit; i += 1) {
    fakeCategory.push(generateOneCategory());
  }
  return [...fakeCategory];
};

module.exports = { generateOneCategory, generateManyCategory };
