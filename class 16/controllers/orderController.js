import { order } from "../models/orderModel";

export const placeOrder = async (req, res) => {
    try {
        const newOrder = new order(req.body);
        await newOrder.save();
        return res.status(201).json(newOrder);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await order.find();
        return res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json(order);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json(updatedOrder);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getOrdersByUserId = async (req, res) => {
    try {
        const orders = await order.find({ userId: req.params.userId });
        return res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

