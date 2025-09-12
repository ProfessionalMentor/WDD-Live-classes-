import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const protect = catchAsync(async (req, res, next) => {
    let token;

    if (req.cookies.accessToken) {
        token = req.cookies.accessToken;
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = await UserModel.findById(decoded.userId).select('-password');
        next();
    } else {
        throw new ApiError(401, 'Not authorized, no token');
    }
});
