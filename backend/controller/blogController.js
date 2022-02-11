const aEH = require("../utility/asyncErrorHandler");
const Err = require("../utility/error");
const Blog = require('../models/blogModel');
const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/blogs/");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        const title = req.title;
        cb(null, `${title}_${Date.now()}.${ext}`);
    },
});

const multerFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith("image")) {
        cb(new Err("Not an image", 400), false);
    } else {
        cb(null, true);
    }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
exports.updatePhoto = upload.single("photo");

exports.uploadBlog = aEH(async(req,res,next) => {
	const { title, slug, description, tags, imageAlt, author, authorTitle, authorDescription, metaTitle, metaDescription, metaKeywords, ogTitle, ogDescription, twTitle, twDescription } = req.body;
    console.log(req.file);
    const image = req.file.filename;
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