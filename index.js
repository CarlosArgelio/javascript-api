const express = require('express');

const config = require('./config');
const category = require('./components/category/network');
const recipe = require('./components/recipe/network');
const tag = require('./components/tag/network');

const app = express();

// ROUTERS
app.use('/api/v1/categories', category);
app.use('/api/v1/recipes', recipe);
app.use('/api/v1/tags', tag);

app.listen(config.api.port, () => {
  console.log('Listen API that port ', config.api.port);
});
