require('dotenv').config();

// SDKロード.
const AWS = require('aws-sdk');

// region設定する.
AWS.config.update({ region: 'ap-northeast-1' });

// S3オブジェクト作成
client = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION
});

module.exports = client


