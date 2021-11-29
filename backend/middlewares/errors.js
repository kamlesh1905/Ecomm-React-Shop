const ErrorHandler = require('../utils/errorHandlers');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }


    if (process.env.NODE_ENV === 'PRODUCTION') {

        let error = {...err }

        error.message = err.message

        //wrong Moogoose Object Id error

        if (err.name == 'CastError') {
            const message = `Resource not found. Invlaid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        //Handle Moogoose Validation Error
        if (err.name == 'validationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }

        // Handling Moongoose duplicate key errors

        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`
            error = new ErrorHandler(message, 400)
        }

        // Handling wrong JWT error

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }
}