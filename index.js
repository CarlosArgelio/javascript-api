const listEndpoints = require('express-list-endpoints');
const express = require('express');

const config = require('./config');
const category = require('./components/category/network');
const recipe = require('./components/recipe/network');
const tag = require('./components/tag/network');

const app = express();

// categories
app.use('/api/v1/categories', category);

// recipes
app.use('/api/v1/recipes', recipe);

// tags
app.use('/api/v1/tags', tag);

console.log(listEndpoints(app));

app.listen(config.api.port, () => {
  console.log('Listen API that port ', config.api.port);
});

module.exports = app
