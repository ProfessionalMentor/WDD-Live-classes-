import express from 'express';
import {
    createRating,
    getAllRatings,
    getRatingById,
    updateRating,
    deleteRating,
    deleteAllRatings,
    createRatingByUserId,
    getAllRatingsByUserId,
    getRatingByUserId,
    updateRatingByUserId,
    deleteRatingByUserId,
    deleteAllRatingsByUserId
} from '../controllers/ratingController.js';
import { protect } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/', createRating);
router.get('/', getAllRatings);
router.get('/:id', getRatingById);
router.put('/:id', updateRating);
router.delete('/:id', deleteRating);
router.delete('/', deleteAllRatings);
router.post('/user/:userId', createRatingByUserId);
router.get('/user/all/:userId', getAllRatingsByUserId);
router.get('/user/:userId', getRatingByUserId);
router.put('/user/:userId', updateRatingByUserId);
router.delete('/user/:userId', deleteRatingByUserId);
router.delete('/user/all/:userId', deleteAllRatingsByUserId);

export default router;
