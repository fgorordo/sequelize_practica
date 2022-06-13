const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.list)
router.get('/actors/details/:id', actorsController.details)

module.exports = router;