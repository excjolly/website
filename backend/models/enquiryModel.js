const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
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

const Enquiry = mongoose.model('enquiry', enquirySchema);
module.exports = Enquiry;