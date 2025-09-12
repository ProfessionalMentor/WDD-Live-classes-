import { cart } from "../models/cartModel";

export const getCartById = async (req, res) => {
    try {
        const cart = await cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getAllCarts = async (req, res) => {
    try {
        const carts = await cart.find();
        return res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createCart = async (req, res) => {
    try {
        const newCart = new cart(req.body);
        await newCart.save();
        return res.status(201).json(newCart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const updateCart = async (req, res) => {
    try {
        const updatedCart = await cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json(updatedCart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const deletedCart = await cart.findByIdAndDelete(req.params.id);
        if (!deletedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getCartByUserId = async (req, res) => {
    try {
        const cart = await cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getAllCartsByUserId = async (req, res) => {
    try {
        const carts = await cart.find({ userId: req.params.userId });
        return res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};


export const deleteCartByUserId = async (req, res) => {
    try {
        const deletedCart = await cart.findOneAndDelete({ userId: req.params.userId });
        if (!deletedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const updateCartByUserId = async (req, res) => {
    try {
        const updatedCart = await cart.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
        if (!updatedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        return res.status(200).json(updatedCart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
