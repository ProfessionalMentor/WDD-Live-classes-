import CartModel from "../models/cartModel.js";
import ApiError from "../utils/ApiError.js";

const getCartById = async (id) => {
    const cart = await CartModel.findById(id).populate('products.productId');
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }
    return cart;
};

const getAllCarts = async () => {
    const carts = await CartModel.find().populate('products.productId');
    return carts;
};

const createCart = async (cartData) => {
    const newCart = await CartModel.create(cartData);
    return newCart;
};

const updateCart = async (id, updateData) => {
    const updatedCart = await CartModel.findByIdAndUpdate(id, updateData, { new: true }).populate('products.productId');
    if (!updatedCart) {
        throw new ApiError(404, "Cart not found");
    }
    return updatedCart;
};

const deleteCart = async (id) => {
    const deletedCart = await CartModel.findByIdAndDelete(id);
    if (!deletedCart) {
        throw new ApiError(404, "Cart not found");
    }
    return { message: "Cart deleted successfully" };
};

const getCartByUserId = async (userId) => {
    const cart = await CartModel.findOne({ userId }).populate('products.productId');
    if (!cart) {
        throw new ApiError(404, "Cart not found for this user");
    }
    return cart;
};

const getAllCartsByUserId = async (userId) => {
    const carts = await CartModel.find({ userId }).populate('products.productId');
    return carts;
};

const deleteCartByUserId = async (userId) => {
    const deletedCart = await CartModel.findOneAndDelete({ userId });
    if (!deletedCart) {
        throw new ApiError(404, "Cart not found for this user");
    }
    return { message: "Cart deleted successfully for this user" };
};

const updateCartByUserId = async (userId, updateData) => {
    const updatedCart = await CartModel.findOneAndUpdate({ userId }, updateData, { new: true }).populate('products.productId');
    if (!updatedCart) {
        throw new ApiError(404, "Cart not found for this user");
    }
    return updatedCart;
};

export {
    getCartById,
    getAllCarts,
    createCart,
    updateCart,
    deleteCart,
    getCartByUserId,
    getAllCartsByUserId,
    deleteCartByUserId,
    updateCartByUserId
};
