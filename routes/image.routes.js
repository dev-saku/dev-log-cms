const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/image.controller');

const multer = require('multer');

router.post('/upload', ImageController.apiUploadImage);

module.exports = router;