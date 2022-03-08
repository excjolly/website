const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    title: {
        type: String,
        //required: [true, 'This field cannot be empty']
    },
    slug: {
        type: String
    },
    question1: {
        type: String
    },
    answer1: {
        type: String
    },
    question2: {
        type: String
    },
    answer2: {
        type: String
    },
    question3: {
        type: String
    },
    answer3: {
        type: String
    },
    question4: {
        type: String
    },
    answer4: {
        type: String
    },
    versionKey: false
}, {
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

const Program = mongoose.model('program', programSchema);
module.exports = Program;