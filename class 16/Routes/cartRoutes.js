import express from 'express';
import {
    getCartById,
    getAllCarts,
    createCart,
    updateCart,
    deleteCart,
    getCartByUserId,
    getAllCartsByUserId,
    deleteCartByUserId,
    updateCartByUserId
} from '../controllers/cartController.js';
import { protect } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getAllCarts);
router.get('/:id', getCartById);
router.post('/', createCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);
router.get('/user/:userId', getCartByUserId);
router.get('/user/all/:userId', getAllCartsByUserId);
router.delete('/user/:userId', deleteCartByUserId);
router.put('/user/:userId', updateCartByUserId);

export default router;
