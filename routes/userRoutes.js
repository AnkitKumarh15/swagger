const express = require('express')
const router = express.Router();
const {getData, postData} = require('../controller/userController');

router.get('/getdata', getData);
router.post('/insert', postData);

module.exports = router;