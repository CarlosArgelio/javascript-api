const { Sequelize } = require('sequelize');

const config = require('../config');

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const URI = `mariadb://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mariadb',
  logging: true
});

const getDatabases = async () => {
  var q = "SELECT * FROM hello"
  let [data, metadata] = await sequelize.query(q)
  return {data, metadata}
}

console.log(getDatabases())

module.exports = sequelize
