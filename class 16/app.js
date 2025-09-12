import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan"; // Import morgan
import { connectDB } from "./config/dbconfig.js";
import wishlistRoutes from './Routes/wishlistRoutes.js';
import cartRoutes from './Routes/cartRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import ratingRoutes from './Routes/ratingRoutes.js';
import userAddressRoutes from './Routes/userAddressRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import paymentRoutes from './Routes/paymentRoutes.js';
import { errorHandler } from './utils/errorHandler.js';
import logger from './utils/logger.js'; // Import logger

const app = express();

// DB connection
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Restrict to frontend's domain in production
  credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

// Morgan for request logging
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/address', userAddressRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payment', paymentRoutes);

// Error Handler
app.use(errorHandler);

export default app;
