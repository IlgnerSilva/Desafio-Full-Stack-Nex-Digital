const {Router} = require('express');
const route = Router();
const UsersController = require('../controllers/UsersController');
const passport = require('passport');

route.get('/user', UsersController.searchAllUsers);
route.post('/registerUser', UsersController.registerUser);
route.get('/user/:email', UsersController.busca);
route.post('/user/login', passport.authenticate('local', {session: false}), UsersController.login);


module.exports = app => app.use('/auth', route)