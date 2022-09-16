const router = require('express').Router()
const UserController = require('../controllers/user.controller')

// host:PORT/api/users/

router.get('/',UserController.getUsers);

router.post('/signup',UserController.signup)

router.post('/login',UserController.login)

module.exports = router;
