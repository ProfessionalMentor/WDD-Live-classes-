import express from 'express';
import {
    register,
    login,
    logout,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
