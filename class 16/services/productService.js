import ProductModel from "../models/productModel.js";
import ApiError from "../utils/ApiError.js";

const getAllProducts = async () => {
    const products = await ProductModel.find();
    return products;
};

const getProductById = async (id) => {
    const product = await ProductModel.findById(id);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    return product;
};

const createProduct = async (productData) => {
    const newProduct = await ProductModel.create(productData);
    return newProduct;
};

const updateProduct = async (id, updateData) => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) {
        throw new ApiError(404, "Product not found");
    }
    return updatedProduct;
};

const deleteProduct = async (id) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
        throw new ApiError(404, "Product not found");
    }
    return { message: "Product deleted successfully" };
};

const deleteAllProducts = async () => {
    await ProductModel.deleteMany({});
    return { message: "All products deleted successfully" };
};

const searchProducts = async (searchTerm) => {
    if (!searchTerm) {
        throw new ApiError(400, "Search term is required");
    }
    const products = await ProductModel.find({ $text: { $search: searchTerm } });
    return products;
};

const getProductByUserId = async (userId) => {
    const product = await ProductModel.findOne({ userId });
    if (!product) {
        throw new ApiError(404, "Product not found for this user");
    }
    return product;
};

const getAllProductsByUserId = async (userId) => {
    const products = await ProductModel.find({ userId });
    return products;
};

const createProductByUserId = async (userId, productData) => {
    const newProduct = await ProductModel.create({ ...productData, userId });
    return newProduct;
};

const updateProductByUserId = async (userId, updateData) => {
    const updatedProduct = await ProductModel.findOneAndUpdate({ userId }, updateData, { new: true });
    if (!updatedProduct) {
        throw new ApiError(404, "Product not found for this user");
    }
    return updatedProduct;
};

const deleteProductByUserId = async (userId) => {
    const deletedProduct = await ProductModel.findOneAndDelete({ userId });
    if (!deletedProduct) {
        throw new ApiError(404, "Product not found for this user");
    }
    return { message: "Product deleted successfully for this user" };
};

const deleteAllProductsByUserId = async (userId) => {
    await ProductModel.deleteMany({ userId });
    return { message: "All products deleted successfully for this user" };
};

export {
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
};
