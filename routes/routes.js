const express = require('express');
const router = express.Router();



//Controllers
const triController = require('../controllers/triController')

module.exports = function(){

//Routes
router.get('/arrayNumbers', triController.arrayNumbers);
router.post('/tri', triController.triArray);

return router;
}