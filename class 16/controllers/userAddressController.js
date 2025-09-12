import { userAddress } from "../models/userAddressModel";

export const createUserAddress = async (req, res) => {
    try {
        const newAddress = new userAddress(req.body);
        await newAddress.save();
        return res.status(201).json(newAddress);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllUserAddresses = async (req, res) => {
    try {
        const addresses = await userAddress.find();
        return res.status(200).json(addresses);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getUserAddressById = async (req, res) => {
    try {
        const address = await userAddress.findById(req.params.id);
        if (!address) {
            return res.status(404).json({ message: "Address not found" });
        }
        return res.status(200).json(address);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateUserAddress = async (req, res) => {
    try {
        const updatedAddress = await userAddress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }
        return res.status(200).json(updatedAddress);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteUserAddress = async (req, res) => {
    try {
        const deletedAddress = await userAddress.findByIdAndDelete(req.params.id);
        if (!deletedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }
        return res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllUserAddresses = async (req, res) => {
    try {
        await userAddress.deleteMany({});
        return res.status(200).json({ message: "All addresses deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllUserAddressesByUserId = async (req, res) => {
    try {
        await userAddress.deleteMany({ userId: req.params.userId });
        return res.status(200).json({ message: "All addresses deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

