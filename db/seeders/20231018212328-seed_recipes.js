const { generateManyRecipe } = require('../../src/fakes/recipe.fake');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let recipes = await generateManyRecipe().then( (resp) => { return resp })
    console.log(recipes);
    await queryInterface.bulkInsert('recipes', recipes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
