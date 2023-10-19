const { generateManyRecipeTag } = require('../../src/fakes/recipe-tag.fake');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipe_tag', generateManyRecipeTag());
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipe_tag', null, {});
  }
};
