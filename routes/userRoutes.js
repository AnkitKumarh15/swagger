const express = require('express')
const router = express.Router();
const {getData, postData, visualize} = require('../controller/userController');
const {body} = require('express-validator')

const postVlidations = [
    body('name').notEmpty().withMessage('Name is required'),
    body('company').notEmpty().withMessage('Company is required'),
    body('price').isNumeric().withMessage('Price must be a number')
]

router.get('/getdata', getData);
router.post('/insert', postVlidations, postData);
router.get('/visualize', visualize)

module.exports = router;

