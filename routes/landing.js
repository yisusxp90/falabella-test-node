const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landingController');
const landingMiddleware = require('../middleware/ladingMiddleware');

// api/rest
router.post('/',
    landingMiddleware,
    landingController.guardarLanding
);

module.exports = router;