const express = require('express');

const response = require('../../middlewares/response');

const router = express.Router();

router.get('/',  index);
router.get('/:category', show);

function index(req, res) {
  response.success(req, res, 'Succesfuly', 200);
};

function show(req, res) {
  const categorId = req;
  response.success(req, res, 'Succesfuly', 200);
};

module.exports = router;
