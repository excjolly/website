const mongoose = require('mongoose');


const quizSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    question: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    optionA: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    optionB: [{
        type: String,
        required: [true, 'This field cannot be empty']
    }],
    optionC: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    optionD: {
        type: String,
        required: [true, 'This field cannot be empty']
    },
    hint: {
        type: String
    },
    versionKey: false
}, {
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;