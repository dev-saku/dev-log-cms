const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({

    title: {
        type: String,
        required: true,
    },

    s3Bucket: {
        type: String,
        required: true,
    },

    contents: {
        type: String,
        required: true,
    },

    category: {
        type: Array,
        default: "",
    }
});

module.exports = Article = mongoose.model('Article', articleSchema);