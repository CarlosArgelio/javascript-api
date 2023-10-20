const express = require('express');

const config = require('./config');
const category = require('./components/category/network');

const app = express();

// ROUTERS
app.use('/api/v1/categories', category);

app.listen(config.api.port, () => {
  console.log('Listen API that port ', config.api.port);
});
