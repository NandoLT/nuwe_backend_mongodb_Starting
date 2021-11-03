const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.get('/', userController.getUserSchema);

router.get('/getUser/:username', userController.getUser);

router.post('/create', userController.addUser);

router.delete('/deleteUser', userController.deleteUser);

router.put('/updateUser', userController.updateUser);

module.exports = router;