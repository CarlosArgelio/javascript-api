const { Sequelize } = require('sequelize');

const config = require('../config');
const setupModels = require('../db/models')

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize);

module.exports = sequelize
