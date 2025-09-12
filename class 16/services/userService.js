import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";

//token generator
const generateTokens = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" }); // Shorter expiry for access token
    const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" }); // Longer expiry for refresh token
    return { accessToken, refreshToken };
};

const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: "Lax", // Changed from "none" to "Lax" for better security, consider "None" with secure:true for cross-site
        maxAge: 1 * 60 * 60 * 1000 // 1 hour
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: "Lax", // Changed from "none" to "Lax" for better security
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
};

const registerUser = async (userData) => {
    const { FullName, email, password, phoneNo, address } = userData;

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
        throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({ FullName, email, password: hashedPassword, phoneNo, address });

    // Generate tokens and save refresh token
    const { accessToken, refreshToken } = generateTokens(user._id); // Get both tokens
    user.refreshToken = refreshToken;
    await user.save();

    // Exclude password and refreshToken from the returned user object
    const userWithoutSensitiveInfo = user.toObject();
    delete userWithoutSensitiveInfo.password;
    delete userWithoutSensitiveInfo.refreshToken;

    return { user: userWithoutSensitiveInfo, accessToken, refreshToken }; // Return tokens
};

const loginUser = async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new ApiError(400, "User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(400, "Invalid credentials");
    }

    // Generate tokens and save refresh token
    const { accessToken, refreshToken } = generateTokens(user._id); // Get both tokens
    user.refreshToken = refreshToken;
    await user.save();

    // Exclude password and refreshToken from the returned user object
    const userWithoutSensitiveInfo = user.toObject();
    delete userWithoutSensitiveInfo.password;
    delete userWithoutSensitiveInfo.refreshToken;

    return { user: userWithoutSensitiveInfo, accessToken, refreshToken }; // Return tokens
};

const refreshAccessToken = async (oldRefreshToken) => {
    if (!oldRefreshToken) {
        throw new ApiError(401, "Refresh token missing");
    }

    const decoded = jwt.verify(oldRefreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await UserModel.findById(decoded.userId);

    if (!user || user.refreshToken !== oldRefreshToken) {
        throw new ApiError(403, "Invalid refresh token");
    }

    const { accessToken, refreshToken } = generateTokens(user._id);
    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
};

const logoutUser = async (res, userId) => {
    await UserModel.findByIdAndUpdate(userId, { refreshToken: null });
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
};

const getAllUsers = async () => {
    const users = await UserModel.find().select("-password"); // Exclude password
    return users;
};

const getUserById = async (id) => {
    const user = await UserModel.findById(id).select("-password"); // Exclude password
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return user;
};

const updateUser = async (id, updateData) => {
    const user = await UserModel.findByIdAndUpdate(id, updateData, { new: true }).select("-password"); // Exclude password
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return user;
};

const deleteUser = async (id) => {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return { message: "User deleted successfully" };
};

export {
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
};
