const {Router} = require('express');
const route = Router();
const UsersController = require('../controllers/UsersController');

route.get('/user', UsersController.searchAllUsers);
route.post('/registerUser', UsersController.registerUser)


module.exports = app => app.use('/auth', route)