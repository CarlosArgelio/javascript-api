const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const generateOneUser = () => ({
  id: uuidv4(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  emailVerifiedAt: faker.datatype.boolean(),
  // rememberToken: ,
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime()
});

const generateManyUser = (size) => {
  const limit = size ?? 10;
  const fakeUSers = [];

  for (let i = 0; i < limit; i += 1) {
    fakeUSers.push(generateOneBook());
  }
  return [...fakeUSers];
};

module.exports = { generateOneUser, generateManyUser };
