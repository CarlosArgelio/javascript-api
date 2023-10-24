const express = require('express');

const response = require('../../middlewares/response');
const controller = require('./index');

const router = express.Router();

router.get('/',  index);
router.get('/:category', show);

async function index(req, res) {
  try {
    const resp = await controller.index()
    response.success(req, res, resp, 200);
  } catch ( err ) {
    response.error(req, res, err, 409)
  }
};

function show(req, res) {
  const categorId = req;
  response.success(req, res, 'Succesfuly', 200);
};

module.exports = router;
