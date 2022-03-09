const aEH = require("../utility/asyncErrorHandler");
const Err = require("../utility/error");
const Program = require('../models/programModel');

exports.upload = aEH(async(req,res,next) => {
	const { src } = req.body;
	if(!src) return next(new Err('Link cannot be empty',400));
	const program = await Program.create({ src, date: new Date() });
	res.status(200).json({
		status: 'success',
		program
	});
});

exports.getAll = aEH(async (req, res, next) => {
    
    const programs = await Program.find();
    res.status(200).json({
        status: 'success',
        programs
    });
});
exports.enquireFrm = aEH(async (req, res, next) => {
   console.log('am in enqjirefrm at server') ;
    // const programs = await Program.find();
    // res.status(200).json({
    //     status: 'success',
    //     programs
    // });
});

exports.delete = aEH(async (req, res, next) => {
    const { id } = req.params;
    let program = await Program.findById(id);
    await Program.findByIdAndDelete(id);
    res.status(200).json({
        status: 'success',
    });
});