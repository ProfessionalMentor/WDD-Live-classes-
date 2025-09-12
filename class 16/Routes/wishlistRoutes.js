import express from 'express';
import {
    getWishlist,
    addProductToWishlist,
    removeProductFromWishlist
} from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/:userId', getWishlist);
router.post('/', addProductToWishlist);
router.delete('/:userId/:productId', removeProductFromWishlist);

export default router;
