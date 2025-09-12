import express from 'express';
import {
    getWishlist,
    addProductToWishlist,
    removeProductFromWishlist
} from '../controllers/wishlistController.js';
import { protect } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/:userId', getWishlist);
router.post('/', addProductToWishlist);
router.delete('/:userId/:productId', removeProductFromWishlist);

export default router;
