const Article = require('../models/Article');

module.exports = class PostService {

    // すべての投稿データの取得.
    static async getAllArticles() {
        try {
            const allArticles = await Article.find();
            return allArticles;
        } catch (error) {
            console.log('投稿取得失敗 : ${error}');
        }
    }

    // idから投稿データ取得.
    static async getArticle(id) {
        try {
            const article = await Article.findById(id);
            return article;
        } catch (error) {
            console.log('投稿取得失敗 : ${error}');
        }
    }

    // 投稿作成.
    static async createArticle(data) {
        try {
            const newArticle = {
                title: data.title,
                contents: data.contents,
                s3Bucket: data.s3Bucket,
                category: data.category
            }
            const response = await new Article(newArticle).save();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}