const app = require('./app');
const mongoose = require('mongoose');
const express = require('express');
var programRoutes = require('./routes/programRoutes');
const programController = require('./controller/programController');
const port = 4000;
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
app.use('/all', programRoutes);
app.post('/download', function(req, res){
 console.log('jjj');
 console.log(req.data);
  res.download("./public/science/DataAnalysis.pdf"); // Set disposition and send it.
});
const server = app.listen(port, () => {
	console.log("Hello from the server side...");
});


// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         var oldpath = files.filetoupload.filepath;
//         var newpath = './public/' + files.filetoupload.originalFilename;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write('File uploaded and moved!');
//           res.end();
//         });
//    });
//     } else {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write('</form>');
//       return res.end();
//     }
//   }).listen(8080);
process.on('uncaughtException', (err, origin) => {
    console.log('Caught exception: ', err, 'Exception origin: ', origin);
    server.close();
});

const DB = 'mongodb+srv://excelsior:coder@cluster0.hmmr0.mongodb.net/excelsior';
// mongoose
//     .connect(DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('DB connection successful!'))
//     .catch(e => {
//         console.log(e);
//         server.close();
//     });
mongoose
    .connect('mongodb://localhost:27017/quiz', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'))
    .catch(e => {
        console.log(e);
        server.close();
    });
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: ', promise, 'reason: ', reason);
});