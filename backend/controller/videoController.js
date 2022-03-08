const aEH = require("../utility/asyncErrorHandler");
const Err = require("../utility/error");
const Video = require('../models/videoModel');

exports.upload = aEH(async(req,res,next) => {
	const { src } = req.body;
	if(!src) return next(new Err('Link cannot be empty',400));
	const video = await Video.create({ src, date: new Date() });
	res.status(200).json({
		status: 'success',
		video
	});
});

exports.getAll = aEH(async (req, res, next) => {
    const videos = await Video.find();
    res.status(200).json({
        status: 'success',
        videos
    });
});

exports.delete = aEH(async (req, res, next) => {
    const { id } = req.params;
    let video = await Video.findById(id);
    await Video.findByIdAndDelete(id);
    res.status(200).json({
        status: 'success',
    });
});