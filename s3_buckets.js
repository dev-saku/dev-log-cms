// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'ap-northeast-1' });

// Create S3 service object
s3 = new AWS.S3();

require('dotenv').config();

// pathモジュール
var fs = require('fs');
var path = require('path');


const fileStream = fs.createReadStream('D:/dev-log/public/img/profile-icon.PNG');
const key = path.basename('D:/dev-log/public/img/profile-icon.PNG');

const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `test/${path.basename('D:/dev-log/public/img/profile-icon.PNG')}`,
    Body: fileStream
}

s3.upload (uploadParams, function(err, data) {
    if (err) {
        console.log('error', err);
    } if (data) {
        console.log('upload success', data.Location);
    }
});