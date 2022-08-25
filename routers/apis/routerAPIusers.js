const express = require('express')
const router = express.Router();

const controller = require('../../controllers/apis/apiUsersController');

router.get('/list-users', controller.listUsers)
router.get('/user/:id', controller.showUser)
router.get('/user/:id/profile_image', controller.showUserImage)

module.exports = router;