const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const generateOneUser = () => ({
  id: uuidv4(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  email_verified_at: faker.datatype.boolean(),
  // rememberToken: ,
  create_at: faker.date.anytime(),
  updated_at: faker.date.anytime()
});

const generateManyUser = (size) => {
  const limit = size ?? 10;
  const fakeUSers = [];

  for (let i = 0; i < limit; i += 1) {
    fakeUSers.push(generateOneUser());
  }
  return [...fakeUSers];
};

module.exports = { generateOneUser, generateManyUser };
