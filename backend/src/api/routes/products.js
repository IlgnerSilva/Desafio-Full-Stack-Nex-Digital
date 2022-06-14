const {Router} = require('express');
const route = Router();
const ProductsController = require('../controllers/ProductsController');
const { middlewareAuthentication } = require('../middlewares');


route.post('/registerProduct', middlewareAuthentication.bearer, ProductsController.registerProduct)

module.exports = app => app.use('/products', route);