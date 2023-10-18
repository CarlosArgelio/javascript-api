import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';


const generateOneTag = () => ({
  id: uuidv4(),
  name: faker.commerce.productMaterial(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime()
});

const generateManyTag = (size) => {
  const limit = size ?? 10;
  const fakeTag = [];

  for (let i = 0; i < limit; i += 1) {
    fakeTag.push(generateOneBook());
  }
  return [...fakeTag];
};

module.exports = { generateOneTag, generateManyTag };
