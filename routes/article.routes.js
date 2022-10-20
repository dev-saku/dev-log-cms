const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article.controller');

router.get('/', ArticleController.apiGetAllArticle);
router.get('/:id', ArticleController.apiGetArticle);
router.post('/', ArticleController.apiCreateArticle);

module.exports = router;