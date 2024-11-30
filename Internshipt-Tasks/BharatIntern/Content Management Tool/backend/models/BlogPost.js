const mongoose = require('mongoose');

const BlogPostSchema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
    video: String,
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
