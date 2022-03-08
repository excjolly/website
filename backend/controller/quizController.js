const aEH = require("../utility/asyncErrorHandler");
const Err = require("../utility/error");
const Quiz = require('../models/quizModel');

exports.upload = aEH(async(req,res,next) => {
	const { src } = req.body;
	if(!src) return next(new Err('Link cannot be empty',400));
	const quiz = await Quiz.create({ src, date: new Date() });
	res.status(200).json({
		status: 'success',
		quiz
	});
});

exports.getAll = aEH(async (req, res, next) => {
    const quizs = await Quiz.find();
    res.status(200).json({
        status: 'success',
        quizs
    });
});

exports.delete = aEH(async (req, res, next) => {
    const { id } = req.params;
    let quiz = await Quiz.findById(id);
    await Quiz.findByIdAndDelete(id);
    res.status(200).json({
        status: 'success',
    });
});