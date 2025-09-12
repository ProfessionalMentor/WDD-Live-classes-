import express from 'express';
import {
    register,
    login,
    logout,
    refresh, // Added this
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/userController.js';
import { protect } from '../Middlewares/authMiddleware.js';
import { authorize } from '../Middlewares/authorizeMiddleware.js'; // Added this

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh); // New route for refreshing tokens
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:id', protect, authorize('admin', 'user'), getUserById);
router.put('/:id', protect, authorize('admin', 'user'), updateUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);

export default router;
