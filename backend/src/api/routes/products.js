const {Router} = require('express');
const route = Router();
const ProductsController = require('../controllers/ProductsController');
const { middlewareAuthentication } = require('../middlewares');


route.get('/searchAllProducts', ProductsController.searchAllProducts);
route.post('/registerProduct', middlewareAuthentication.bearer, ProductsController.registerProduct);

module.exports = app => app.use('/products', route);