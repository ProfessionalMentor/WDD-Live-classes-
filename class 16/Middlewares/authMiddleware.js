import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

export const protect = async (req, res, next) => {
    let token;

    if (req.cookies.accessToken) {
        try {
            token = req.cookies.accessToken;
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            req.user = await UserModel.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};
