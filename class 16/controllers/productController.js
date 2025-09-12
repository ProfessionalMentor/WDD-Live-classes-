import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    searchProducts, // Added this
    getProductByUserId,
    getAllProductsByUserId,
    createProductByUserId,
    updateProductByUserId,
    deleteProductByUserId,
    deleteAllProductsByUserId
} from "../services/productService.js";
import { createProductSchema, updateProductSchema } from "../validations/productValidation.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

export const getProducts = catchAsync(async (req, res, next) => {
    const products = await getAllProducts();
    res.status(200).json({
        message: "Products fetched successfully",
        products
    });
});

export const getProduct = catchAsync(async (req, res, next) => {
    const product = await getProductById(req.params.id);
    res.status(200).json({
        message: "Product fetched successfully",
        product
    });
});

export const createProductController = catchAsync(async (req, res, next) => {
    const { error, value } = createProductSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const newProduct = await createProduct(value);
    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
});

export const updateProductController = catchAsync(async (req, res, next) => {
    const { error, value } = updateProductSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const updatedProduct = await updateProduct(req.params.id, value);
    res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct
    });
});

export const deleteProductController = catchAsync(async (req, res, next) => {
    await deleteProduct(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
});

export const deleteAllProductsController = catchAsync(async (req, res, next) => {
    await deleteAllProducts();
    res.status(200).json({ message: "All products deleted successfully" });
});

export const searchProductsController = catchAsync(async (req, res, next) => {
    const { q: searchTerm } = req.query; // Use 'q' as the query parameter for search term
    const products = await searchProducts(searchTerm);
    res.status(200).json({
        message: "Products fetched successfully based on search term",
        products
    });
});

export const getProductByUserIdController = catchAsync(async (req, res, next) => {
    const product = await getProductByUserId(req.params.userId);
    res.status(200).json({
        message: "Product fetched successfully for user",
        product
    });
});

export const getAllProductsByUserIdController = catchAsync(async (req, res, next) => {
    const products = await getAllProductsByUserId(req.params.userId);
    res.status(200).json({
        message: "Products fetched successfully for user",
        products
    });
});

export const createProductByUserIdController = catchAsync(async (req, res, next) => {
    const { error, value } = createProductSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const newProduct = await createProductByUserId(req.params.userId, value);
    res.status(201).json({
        message: "Product created successfully for user",
        product: newProduct
    });
});

export const updateProductByUserIdController = catchAsync(async (req, res, next) => {
    const { error, value } = updateProductSchema.validate(req.body);
    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }
    const updatedProduct = await updateProductByUserId(req.params.userId, value);
    res.status(200).json({
        message: "Product updated successfully for user",
        product: updatedProduct
    });
});

export const deleteProductByUserIdController = catchAsync(async (req, res, next) => {
    await deleteProductByUserId(req.params.userId);
    res.status(200).json({ message: "Product deleted successfully for user" });
});

export const deleteAllProductsByUserIdController = catchAsync(async (req, res, next) => {
    await deleteAllProductsByUserId(req.params.userId);
    res.status(200).json({ message: "All products deleted successfully for user" });
});
