const app = require('./app');
const mongoose = require('mongoose');
const port = 4000;

const server = app.listen(port, () => {
	console.log("Hello from the server side...");
});

process.on('uncaughtException', (err, origin) => {
    console.log('Caught exception: ', err, 'Exception origin: ', origin);
    server.close();
});

const DB = 'mongodb+srv://excelsior:coder@cluster0.hmmr0.mongodb.net/excelsior';

mongoose
    .connect(DB, {
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