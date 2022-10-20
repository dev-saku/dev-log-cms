const ImageService = require('../services/image.service');

module.exports = class Image {
    // ファイルアップロード.
    static async apiUploadImage (req, res) {
        try {

        } catch (error) {
            res.status(500).json({error: error});
        }
    }
}