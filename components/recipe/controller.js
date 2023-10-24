const { models } = require('../../libs/sequelize');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../store/postgres');
  }

  let model = models.Recipe

  async function index() {
    const resp = await store.index(model);
    return resp
  }

  async function show(id) {
    const resp = await store.show(id, model);
    return resp
  }

  return {
    index,
    show
  }
}
