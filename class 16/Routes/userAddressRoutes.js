import express from 'express';
import {
    createUserAddress,
    getAllUserAddresses,
    getUserAddressById,
    updateUserAddress,
    deleteUserAddress,
    deleteAllUserAddresses,
    getUserAddressesByUserId,
    getUserAddressByUserId,
    updateUserAddressByUserId,
    deleteUserAddressByUserId,
    deleteAllUserAddressesByUserId
} from '../controllers/userAddressController.js';

const router = express.Router();

router.post('/', createUserAddress);
router.get('/', getAllUserAddresses);
router.get('/:id', getUserAddressById);
router.put('/:id', updateUserAddress);
router.delete('/:id', deleteUserAddress);
router.delete('/', deleteAllUserAddresses);
router.get('/user/:userId', getUserAddressesByUserId);
router.get('/user/single/:userId', getUserAddressByUserId);
router.put('/user/:userId', updateUserAddressByUserId);
router.delete('/user/:userId', deleteUserAddressByUserId);
router.delete('/user/all/:userId', deleteAllUserAddressesByUserId);

export default router;
