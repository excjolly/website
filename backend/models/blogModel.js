const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    slug: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    tags: [{
        type: String
    }],
    image: {
        type: String,
    },
    imageAlt: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    author: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    authorTitle: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    authorDescription: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    metaTitle: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    metaDescription: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    metaKeywords: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    ogTitle: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    ogDescription: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    twTitle: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    twDescription: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    date: {
        type: Number,
        default: new Date()
    },
    versionKey: false
}, {
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;