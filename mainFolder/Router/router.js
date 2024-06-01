const express = require('express');
const router = express.Router();
const controller = require('../Controller/crontroller');

router.post('/uploadImage', controller.receiveUpload);

module.exports = router;