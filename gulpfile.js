const GulpClient = require("gulp");

const { app } = require('./index');
const listEndpoints = require('express-list-endpoints');

GulpClient.task('LogPathsApi', function(cb) {
  console.log(listEndpoints(app));
  cb()
});
