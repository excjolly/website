const mongoose = require('mongoose');

const journeySchema = mongoose.Schema({
    name: {
        type: String,
        //required: [true, 'This field cannot be empty']
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    course: {
        type: String
    },
     versionKey: false
}, {
    toObject: { virtuals: true },
    toJson: { virtuals: true }
});

const Journey = mongoose.model('journey', journeySchema);
module.exports = Journey;