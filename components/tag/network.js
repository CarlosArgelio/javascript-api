const express = require('express');

const response = require('../../middlewares/response');
const controller = require('./index');

const router = express.Router();

router.get('/',  index);
router.get('/:tag', show);

async function index(req, res) {
  try {
    const resp = await controller.index()
    response.success(req, res, resp, 200);
  } catch ( err ) {
    response.error(req, res, err, 400)
  }
};

async function create(req, res) { }

async function show(req, res) {
  try {
    console.log('response => ', req.params.tag);
    const resp = await controller.show(req.params.tag)
    response.success(req, res, resp, 200);
  } catch ( err ) {
    response.error(req, res, err, 400)
  }
};

async function update(req, res) { }

async function remove(req, res) { }

module.exports = router;
