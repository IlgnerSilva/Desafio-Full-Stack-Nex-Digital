const {Router} = require('express');
const route = Router();
const UsersController = require('../controllers/UsersController');
const {middlewareAuthentication} = require('../middlewares');

route.get('/user', UsersController.searchAllUsers);
route.post('/registerUser', UsersController.registerUser);
route.get('/user/searchByEmail/:email', UsersController.busca);
route.get('/user/searchById/:id', UsersController.searchUserById);
route.post('/user/login', middlewareAuthentication.local, UsersController.login);


module.exports = app => app.use('/auth', route)