const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const generateOneTag = () => ({
  id: uuidv4(),
  name: faker.commerce.productMaterial(),
  create_at: faker.date.anytime(),
  updated_at: faker.date.anytime()
});

const generateManyTag = (size) => {
  const limit = size ?? 10;
  const fakeTag = [];

  for (let i = 0; i < limit; i += 1) {
    fakeTag.push(generateOneTag());
  }
  return [...fakeTag];
};

module.exports = { generateOneTag, generateManyTag };
