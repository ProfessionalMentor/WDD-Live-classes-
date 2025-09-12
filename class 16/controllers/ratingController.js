import { rating } from "../models/ratingModel";


export const createRating = async (req, res) => {
    try {
        const newRating = new rating(req.body);
        await newRating.save();
        return res.status(201).json(newRating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllRatings = async (req, res) => {
    try {
        const ratings = await rating.find();
        return res.status(200).json(ratings);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getRatingById = async (req, res) => {
    try {
        const rating = await rating.findById(req.params.id);
        if (!rating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json(rating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}                       

export const updateRating = async (req, res) => {
    try {
        const updatedRating = await rating.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json(updatedRating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteRating = async (req, res) => {
    try {
        const deletedRating = await rating.findByIdAndDelete(req.params.id);
        if (!deletedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json({ message: "Rating deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllRatings = async (req, res) => {
    try {
        await rating.deleteMany({});
        return res.status(200).json({ message: "All ratings deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createRatingByUserId = async (req, res) => {
    try {
        const newRating = new rating({ ...req.body, userId: req.params.userId });
        await newRating.save();
        return res.status(201).json(newRating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAllRatingsByUserId = async (req, res) => {
    try {
        const ratings = await rating.find({ userId: req.params.userId });
        return res.status(200).json(ratings);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getRatingByUserId = async (req, res) => {
    try {
        const rating = await rating.findOne({ userId: req.params.userId });
        if (!rating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json(rating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateRatingByUserId = async (req, res) => {
    try {
        const updatedRating = await rating.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
        if (!updatedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json(updatedRating);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteRatingByUserId = async (req, res) => {
    try {
        const deletedRating = await rating.findOneAndDelete({ userId: req.params.userId });
        if (!deletedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        return res.status(200).json({ message: "Rating deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteAllRatingsByUserId = async (req, res) => {
    try {
        await rating.deleteMany({ userId: req.params.userId });
        return res.status(200).json({ message: "All ratings deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

