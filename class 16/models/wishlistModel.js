import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
        }]

},
{
    timestamps:true
}

)


const wishlist = mongoose.model("Wishlist" ,  wishlistSchema)

export {wishlist}