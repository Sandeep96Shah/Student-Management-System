const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');

router.use('/assignment', require('./assignment'));

router.use('/submission', require('./submission'));

router.use('/sign_up', require('./user'));

router.use('/sign_in', require('./sign_in'));

router.get('/',homeController.home);

module.exports = router;