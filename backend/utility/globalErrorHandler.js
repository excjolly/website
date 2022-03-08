const Err = require('./error');

const duplicateKeyErr = (err) => {
    let duplicateKey = err.keyValue;
    const val = Object.keys(duplicateKey)[0];
    const message = `${val}: ${duplicateKey[val]} is already taken.`;
    const error = new Err(message, err.statusCode);
    return error;
}

const validationErr = (err) => {
    const errors = Object.values(err.errors).map(el => el.message);
    let message = '';
    errors.forEach(el => {
        if (el.startsWith("Path `password`")) {
            message = message + (message === '' ? '' : '\n') + 'Password is shorter than minimum allowed length (8)';
        } else {
            message = message + (message === '' ? '' : '\n') + el;
        }
    });
    const error = new Err(message, 400);
    return error;
}

const castErr = (err) => {
    let castErr = err.message;
    let model = castErr.split(' ');
    model = model[model.length - 1];
    let message = `Invalid ID for model ${model}`;
    const error = new Err(message, 400);
    return error;
}

const sendErrRes = (res, err) => {
    res.status(err.statusCode).json({
        statusCode: err.statusCode,
        status: err.status,
        message: err.message
    });
}

const globalErrorHandler = (err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Something went wrong :(";
    if (err.code === 11000) {
        err = duplicateKeyErr(err);
    }
    if (err.name == 'ValidationError') {
        err = validationErr(err);
    }
    if (err.name === 'CastError') {
        err = castErr(err);
    }
    sendErrRes(res, err);
}

module.exports = globalErrorHandler;
