const { models } = require('../../libs/sequelize');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../store/postgres');
  }

  let model = models.Category

  async function index() {
    const resp = await store.index(model);
    return resp
  }

  async function show(id) {
    let params = {}
    params['include'] = ['recipes']
    const resp = await store.show(id, model, params);
    return resp
  }

  return {
    index,
    show
  }
}
