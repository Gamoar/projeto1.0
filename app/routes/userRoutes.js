const express = require("express");

const userController = require("../controllers/UserControllers.js");

const router = express.Router();


router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.post('/login', userController.loginUser)
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;