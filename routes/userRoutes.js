const express = require('express')
const router = express.Router();
const {getData, postData, visualize} = require('../controller/userController');

router.get('/getdata', getData);
router.post('/insert', postData);
router.get('/visualize', visualize)

module.exports = router;