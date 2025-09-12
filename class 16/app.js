import express from "express"
import { connectDB } from "./config/dbconfig.js"
import wishlistRoutes from './Routes/wishlistRoutes.js';
import cartRoutes from './Routes/cartRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import ratingRoutes from './Routes/ratingRoutes.js';
import userAddressRoutes from './Routes/userAddressRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import paymentRoutes from './Routes/paymentRoutes.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express()
const port = process.env.PORT || 3000


// Db connection
connectDB()

app.use(express.json());
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/address', userAddressRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payment', paymentRoutes);

app.use(errorHandler);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app