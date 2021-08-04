const express = require('express');

const passport = require('passport');

const router = express.Router();

const assignmentController = require('../controllers/assignment');

router.post('/', passport.authenticate('jwt', {session:false}) ,assignmentController.create);

module.exports = router;