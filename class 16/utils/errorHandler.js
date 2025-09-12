import ApiError from "./ApiError.js";
import logger from './logger.js'; // Import logger

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    if (err instanceof ApiError) {
        error.statusCode = err.statusCode;
        error.status = err.status;
    } else {
        error.statusCode = err.statusCode || 500;
        error.status = 'error';
    }

    // Log the error
    logger.error(err.message, { stack: err.stack, statusCode: error.statusCode, status: error.status, isOperational: error.isOperational });

    if (process.env.NODE_ENV === 'production' && !error.isOperational) {
        // For production, don't leak internal error details for non-operational errors
        error.message = 'Something went wrong!';
        error.statusCode = 500;
    }

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export { errorHandler };
