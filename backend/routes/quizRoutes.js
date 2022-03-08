const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.get('/all', quizController.getAll);
router.post('/upload', quizController.upload);
router.delete('/delete/:id', quizController.delete);

module.exports = router;