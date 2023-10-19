const { generateManyRecipeTag } = require('../../src/fakes/recipe-tag.fake');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let recipesTag = await generateManyRecipeTag().then( (resp) => { return resp })
    await queryInterface.bulkInsert('recipe_tag', recipesTag);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipe_tag', null, {});
  }
};
