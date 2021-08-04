const express = require('express');

const router = express.Router();

const signInController = require('../controllers/sign_in');

router.post('/', signInController.sign_in);

module.exports = router;