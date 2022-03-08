const express = require('express');
const router = express.Router();
const multer = require('multer');
const blogController = require('../controller/blogController');

router.get('/all', blogController.getAll);
router.post('/upload', blogController.updatePhoto, blogController.uploadBlog);
router.delete('/delete/:id', blogController.delete);

module.exports = router;