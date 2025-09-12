import { wishlist } from '../models/wishlistModel.js';

export const getWishlist = async (req, res) => {
    try {
        const { userId } = req.params;
        const userWishlist = await wishlist.findOne({ userId }).populate('products.product');
        if (!userWishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(userWishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addProductToWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        let userWishlist = await wishlist.findOne({ userId });
        if (!userWishlist) {
            userWishlist = new wishlist({ userId, products: [{ product: productId }] });
        } else {
            const productExists = userWishlist.products.some(p => p.product.equals(productId));
            if (productExists) {
                return res.status(400).json({ message: 'Product already in wishlist' });
            }
            userWishlist.products.push({ product: productId });
        }
        await userWishlist.save();
        res.status(201).json(userWishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeProductFromWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const userWishlist = await wishlist.findOne({ userId });
        if (!userWishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        userWishlist.products = userWishlist.products.filter(p => !p.product.equals(productId));
        await userWishlist.save();
        res.status(200).json(userWishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
