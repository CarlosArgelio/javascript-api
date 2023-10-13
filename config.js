require('dotenv').config();

module.exports = {
  db: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DOCKER_USER,
    password: process.env.DOCKER_PASSWORD,
    database: process.env.DOCKER_DATABASE,
  }
}
