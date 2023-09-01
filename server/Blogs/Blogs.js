const mongoose = require('mongoose')

const BlogsSchema = mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    view: Number,
    comments: Number,
    poster: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
});


module.exports = mongoose.model('blogs', BlogsSchema)