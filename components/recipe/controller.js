const { models } = require('../../libs/sequelize');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../store/postgres');
  }

  let model = models.Recipe

  async function index() {
    let params = {}
    params['include'] = ['category', 'recipe_tag', 'user']
    const resp = await store.index(model, params);
    return resp
  }

  async function create() { }

  async function show(id) {
    let params = {}
    params['include'] = ['category', 'recipe_tag', 'user']
    const resp = await store.show(id, model, params);
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
