import winston from 'winston';

const logger = winston.createLogger({
    level: 'info', // Default logging level
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }), // Log stack trace for errors
        winston.format.splat(),
        winston.format.json() // Use JSON format for logs
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Colorize console output
                winston.format.simple() // Simple format for console
            )
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: 'combined.log' }) // Log all levels to combined.log
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' }) // Catch uncaught exceptions
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'rejections.log' }) // Catch unhandled promise rejections
    ]
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
}

export default logger;
