const { models } = require('../../libs/sequelize');
// const CategoryResource = require('./resource');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../store/postgres');
  }

  let modelName = models.Category

  async function index() {
    let params = {}
    const resp = await store.index(modelName, params);
    return resp
  }

  async function create() { }

  async function show(id) {
    // let params = {}
    // params['include'] = ['recipes']

    let params = {
      include: [],
      attributes: ['name']
    }

    const resp = await store.show(id, modelName, params);
    return resp
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
