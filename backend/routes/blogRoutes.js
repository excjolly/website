const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

router.get('/all', blogController.getAll);
router.post('/upload', blogController.upload);
router.delete('/delete/:id', blogController.delete);

module.exports = router;