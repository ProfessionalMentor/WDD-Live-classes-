import express from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    getProductByUserId,
    getAllProductsByUserId,
    createProductByUserId,
    updateProductByUserId,
    deleteProductByUserId,
    deleteAllProductsByUserId
} from '../controllers/productController.js';
import { protect } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);
router.delete('/', protect, deleteAllProducts);
router.get('/user/:userId', getAllProductsByUserId);
router.post('/user/:userId', protect, createProductByUserId);
router.put('/user/:userId', protect, updateProductByUserId);
router.delete('/user/:userId', protect, deleteProductByUserId);
router.delete('/user/all/:userId', protect, deleteAllProductsByUserId);

export default router;
