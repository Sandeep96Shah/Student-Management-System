const express = require('express');
const multer = require('multer');

const passport = require('passport');

const router = express.Router();

const submissionController = require('../controllers/submission');

const upload = multer({dest:'uploads/studens'});

router.post('/', passport.authenticate('jwt', {session:false}) ,upload.single('file'), submissionController.create);

module.exports = router;