import express from 'express';
import {
    placeOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
    getOrdersByUserId
} from '../controllers/orderController.js';
import { protect } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/', placeOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.get('/user/:userId', getOrdersByUserId);

export default router;
