// const mongoose = require('mongoose');
// 
// const programSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'This field cannot be empty']
//     },
//     duration: {
//         type: String
//     },
//     content: {
//         type: String
//     },
//     level: {
//         type: String
//     },
//     price: {
//         type: String
//     },
//     starting: {
//         type: Number,
//         default: new Date()
//     },
//     rating: {
//         type: String
//     },
//     completedBy: {
//         type: String
//     },
//     abbout: {
//         type: String
//     },
//     prereq: {
//         type: String
//     },
//     learn: {
//         type: String
//     },
//     scope: {
//         type: String
//     },
//     feature1: {
//         type: String
//     },
//     feature2: {
//         type: String
//     },
//     feature3: {
//         type: String
//     },
//     feature4: {
//         type: String
//     },
//     feature5: {
//         type: String
//     },
//     feature6: {
//         type: String
//     },
//     versionKey: false
// }, {
//     toObject: { virtuals: true },
//     toJson: { virtuals: true }
// });
// 
// const Program = mongoose.model('program', programSchema);
// module.exports = Program;