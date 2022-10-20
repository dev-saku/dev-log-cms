const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

// ルーター・モジュールのロード.
const articleRouter = require('./routes/article.routes');
const imageRouter = require('./routes/image.routes');

//DB接続.
const connectDB = async() => {
    await mongoose.connect(process.env.DB);
}

connectDB()
    .then(console.log('DB接続中...'))
    .catch(error => console.log('接続エラー : ' + error.message));

app.get('/', (req, res) => {
    res.send(':)');
})

// cors対応.
app.use(cors());

// ルーティング
app.use(bodyParser.json());
app.use('/article', articleRouter);
app.use('/image', imageRouter);

module.exports = app;