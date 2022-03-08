const express = require('express');
const router = express.Router();
const programController = require('../controller/programController');

router.get('/', programController.getAll);
// router.post('/upload', programController.upload);
// router.delete('/delete/:id', programController.delete);

module.exports = router;