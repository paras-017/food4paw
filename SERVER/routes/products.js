const express = require('express');
const { getAllproducts } = require('../controllers/products');
const Router = express.Router()

Router.route('/').get(getAllproducts)

module.exports = Router