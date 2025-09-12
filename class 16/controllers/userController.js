import {
    generateTokens,
    setAuthCookies,
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken, // Added this
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../services/userService.js";
import { registerSchema, loginSchema } from "../validations/userValidation.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync(async (req, res, next) => {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    const { user, accessToken, refreshToken } = await registerUser(value); // Receive tokens from service
    setAuthCookies(res, accessToken, refreshToken);

    res.status(201).json({
        message: "User registered successfully",
        user,
        accessToken,
        refreshToken
    });
});

export const login = catchAsync(async (req, res, next) => {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    const { email, password } = value;
    const { user, accessToken, refreshToken } = await loginUser(email, password); // Receive tokens from service
    setAuthCookies(res, accessToken, refreshToken);

    res.status(200).json({
        message: "User logged in successfully",
        user,
        accessToken,
        refreshToken
    });
});

export const logout = catchAsync(async (req, res, next) => {
    await logoutUser(res, req.user._id); // Pass userId to logoutUser
    res.status(200).json({ message: "User logged out successfully" });
});

export const refresh = catchAsync(async (req, res, next) => {
    const { refreshToken: oldRefreshToken } = req.cookies;

    if (!oldRefreshToken) {
        return next(new ApiError(401, "Refresh token missing"));
    }

    const { accessToken, refreshToken } = await refreshAccessToken(oldRefreshToken);
    setAuthCookies(res, accessToken, refreshToken);

    res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken,
        refreshToken
    });
});

export const getUsers = catchAsync(async (req, res, next) => {
    const users = await getAllUsers();
    res.status(200).json({
        message: "Users fetched successfully",
        users
    });
});

export const getUser = catchAsync(async (req, res, next) => {
    // Allow admin to get any user, but regular user can only get their own profile
    if (req.user.role !== 'admin' && req.user._id.toString() !== req.params.id) {
        return next(new ApiError(403, 'You do not have permission to access this user\'s profile'));
    }
    const user = await getUserById(req.params.id);
    res.status(200).json({
        message: "User fetched successfully",
        user
    });
});

export const updateUserProfile = catchAsync(async (req, res, next) => {
    // Allow admin to update any user, but regular user can only update their own profile
    if (req.user.role !== 'admin' && req.user._id.toString() !== req.params.id) {
        return next(new ApiError(403, "You do not have permission to update this user's profile"));
    }
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json({
        message: "User updated successfully",
        user
    });
});

export const deleteUserAccount = catchAsync(async (req, res, next) => {
    await deleteUser(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
});