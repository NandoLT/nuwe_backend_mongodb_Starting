const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.get('/', userController.getUserSchema);

router.post('/create', userController.addUser);

router.delete('/deleteUser', userController.deleteUser);

module.exports = router;