const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    src: {
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

const Video = mongoose.model('video', videoSchema);
module.exports = Video;