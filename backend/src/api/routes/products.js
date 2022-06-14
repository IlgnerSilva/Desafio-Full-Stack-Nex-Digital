const {Router} = require('express');
const route = Router();
const ProductsController = require('../controllers/ProductsController');

route.post('/registerProduct', ProductsController.registerProduct)

module.exports = app => app.use('/products', route);