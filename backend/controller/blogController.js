const aEH = require("../utility/asyncErrorHandler");
const Err = require("../utility/error");
const Blog = require('../models/blogModel');

exports.upload = aEH(async(req,res,next) => {
	const { title, slug, description, tags, image, imageAlt, author, authorTitle, authorDescription, metaTitle, metaDescription, metaKeywords, ogTitle, ogDescription, twTitle, twDescription } = req.body;
	// if(!src) return next(new Err('Link cannot be empty',400));
	const blog = await Blog.create({ title, slug, description, tags, image, imageAlt, author, authorTitle, authorDescription, metaTitle, metaDescription, metaKeywords, ogTitle, ogDescription, twTitle, twDescription, date: new Date() });
	res.status(200).json({
		status: 'success',
		blog
	});
});

exports.getAll = aEH(async (req, res, next) => {
    const blogs = await Blog.find();
    res.status(200).json({
        status: 'success',
        blogs
    });
});

exports.delete = aEH(async (req, res, next) => {
    const { id } = req.params;
    let blog = await Blog.findById(id);
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
        status: 'success',
    });
});