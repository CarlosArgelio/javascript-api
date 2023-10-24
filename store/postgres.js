// Create one register in DB
async function create(data, model) {
  const newData = await model.create(data);
  return newData
}

// Find all register in DB
async function find(model) {
  const findRegister = await model.findAll();
  return findRegister
}

// Find one register in DB
async function findOne(id, model) {
  const findOneRegister = await model.findByPk(id);
  return findOneRegister
}

// Update one register in DB
async function update(id, changes, model) {
  const data = await findOne(id, model);
  const updateData = await data.update(changes);
  return updateData
}

// Delete one resource in DB
async function remove(id, model) {
  const data = await findOne(id, model);
  const deleteData = await data.destroy();
  return deleteData
}

module.exports = {
  create,
  index: find,
  show: findOne,
  update,
  remove
}
