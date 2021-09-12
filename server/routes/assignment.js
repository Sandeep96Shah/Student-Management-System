const express = require('express');

const passport = require('passport');

const router = express.Router();

const assignmentController = require('../controllers/assignment');

//todo later create the routes to access all the assignments of teacher!
router.get('/allAssignment', assignmentController.allAssignments);

router.post('/updateAssignment', assignmentController.assignmentEvaluated);

//passport.authenticate('jwt', {session:false})
router.post('/' ,assignmentController.create);

module.exports = router;