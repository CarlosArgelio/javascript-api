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

  return {
    index
  }
}
