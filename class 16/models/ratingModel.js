import mongoose from "mongoose"

const ratingSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
         required:true
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },

    reviews:{
        type:String,
        trim:true,
        maxlenght:1000
    }
},

{
    timestamps:true
}

)


ratingSchema.index({
    productId:1,
    userId:1
},
{
    unique:true
}
)

const rating = mongoose.model("Rating", ratingSchema)

export {rating}