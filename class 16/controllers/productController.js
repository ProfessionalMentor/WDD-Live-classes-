import { product } from "../models/productModel";


export const getAllProducts = async (req, res) => {
    try {
        const products = await product.find();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllProducts = async (req, res) => {
    try {
        await product.deleteMany({});
        return res.status(200).json({ message: "All products deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getProductByUserId = async (req, res) => {
    try {
        const product = await product.findOne({ userId: req.params.userId });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllProductsByUserId = async (req, res) => {
    try {
        const products = await product.find({ userId: req.params.userId });
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}


export const createProductByUserId = async (req, res) => {
    try {
        const newProduct = new product({ ...req.body, userId: req.params.userId });
        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateProductByUserId = async (req, res) => {
    try {
        const updatedProduct = await product.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteProductByUserId = async (req, res) => {
    try {
        const deletedProduct = await product.findOneAndDelete({ userId: req.params.userId });
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllProductsByUserId = async (req, res) => {
    try {
        await product.deleteMany({ userId: req.params.userId });
        return res.status(200).json({ message: "All products deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}