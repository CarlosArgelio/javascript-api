const { models } = require('../../libs/sequelize');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../store/postgres');
  }

  let modelName = models.Category

  async function index() {
    let params = {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      }
    }
    const resp = await store.index(modelName, params);
    // console.log(resp);
    console.log(resp.length);

    let response = [];

    for (let i = 0; i < resp.length; i++) {
      response.push({
        id: resp[i].dataValues.id,
        type: "category",
        attributes: {
          name: resp[i].dataValues.name
        },
      })
    }

    return response
  }

  async function create() { }

  async function show(id) {
    let params = {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: ['recipes'],
    }

    const query = await store.show(id, modelName, params);
    const response = {
      id: query.dataValues.id,
      type: "category",
      attributes: {
        name: query.dataValues.name
      },
      relationships: {
        recipes: query.recipes
      },
    }
    return response
  }

  async function update() { }

  async function remove() { }

  return {
    index,
    show,
    create,
    update,
    remove
  }
}
