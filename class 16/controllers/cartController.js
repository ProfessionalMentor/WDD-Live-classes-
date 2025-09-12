import {
    getCartById,
    getAllCarts,
    createCart,
    updateCart,
    deleteCart,
    getCartByUserId,
    getAllCartsByUserId,
    deleteCartByUserId,
    updateCartByUserId
} from "../services/cartService.js";
import { createCartSchema, updateCartSchema } from "../validations/cartValidation.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

export const getCart = catchAsync(async (req, res, next) => {
    const cart = await getCartById(req.params.id);
    res.status(200).json({
        message: "Cart fetched successfully",
        cart
    });
});

export const getCarts = catchAsync(async (req, res, next) => {
    const carts = await getAllCarts();
    res.status(200).json({
        message: "Carts fetched successfully",
        carts
    });
});

export const createCartController = catchAsync(async (req, res, next) => {
    const { error, value } = createCartSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const newCart = await createCart(value);
    res.status(201).json({
        message: "Cart created successfully",
        cart: newCart
    });
});

export const updateCartController = catchAsync(async (req, res, next) => {
    const { error, value } = updateCartSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const updatedCart = await updateCart(req.params.id, value);
    res.status(200).json({
        message: "Cart updated successfully",
        cart: updatedCart
    });
});

export const deleteCartController = catchAsync(async (req, res, next) => {
    await deleteCart(req.params.id);
    res.status(200).json({ message: "Cart deleted successfully" });
});

export const getCartByUserController = catchAsync(async (req, res, next) => {
    const cart = await getCartByUserId(req.params.userId);
    res.status(200).json({
        message: "Cart fetched successfully for user",
        cart
    });
});

export const getCartsByUserController = catchAsync(async (req, res, next) => {
    const carts = await getAllCartsByUserId(req.params.userId);
    res.status(200).json({
        message: "Carts fetched successfully for user",
        carts
    });
});

export const deleteCartByUserController = catchAsync(async (req, res, next) => {
    await deleteCartByUserId(req.params.userId);
    res.status(200).json({ message: "Cart deleted successfully for user" });
});

export const updateCartByUserController = catchAsync(async (req, res, next) => {
    const { error, value } = updateCartSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const updatedCart = await updateCartByUserId(req.params.userId, value);
    res.status(200).json({
        message: "Cart updated successfully for user",
        cart: updatedCart
    });
});