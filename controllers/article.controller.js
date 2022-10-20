const ArticleService = require('../services/article.service');

module.exports = class Article {

    // 投稿全件取得API.
    static async apiGetAllArticle (req, res) {
        try {
            const articles = await ArticleService.getAllArticles();
            if (!articles) {
                res.status(404).json('データなし');
            }
            res.json(articles);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    // 投稿記事の取得.
    static async apiGetArticle (req, res) {
        try {
            const article = await ArticleService.getArticle(req.params.id);
            if (!article) {
                res.status(404).json('データなし');
            }
            res.json(article);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    // 投稿作成API.
    static async apiCreateArticle(req, res) {
        try {
            const createdArticle = await ArticleService.createArticle(req.body);
            res.json(createdArticle);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }    
}