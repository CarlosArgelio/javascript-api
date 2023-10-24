const express = require('express');

const response = require('../../middlewares/response');
const controller = require('./index');

const router = express.Router();

router.get('/',  index);
router.get('/:recipe', show);

async function index(req, res) {
  try {
    const resp = await controller.index()
    response.success(req, res, resp, 200);
  } catch ( err ) {
    response.error(req, res, err, 400)
  }
};

async function show(req, res) {
  try {
    const resp = await controller.show(req.params.recipe)
    response.success(req, res, resp, 200);
  } catch ( err ) {
    response.error(req, res, err, 400)
  }
};

module.exports = router;
