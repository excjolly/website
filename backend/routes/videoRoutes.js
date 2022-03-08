const express = require('express');
const router = express.Router();
const videoController = require('../controller/videoController');

router.get('/all', videoController.getAll);
router.post('/upload', videoController.upload);
router.delete('/delete/:id', videoController.delete);

module.exports = router;