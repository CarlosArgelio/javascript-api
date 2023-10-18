import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';


const generateOneCategory = () => ({
  id: uuidv4(),
  name: faker.commerce.productMaterial(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime()
});

const generateManyCategory = (size) => {
  const limit = size ?? 10;
  const fakeCategory = [];

  for (let i = 0; i < limit; i += 1) {
    fakeCategory.push(generateOneBook());
  }
  return [...fakeCategory];
};

module.exports = { generateOneCategory, generateManyCategory };
