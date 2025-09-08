import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.objectId,
                ref: "Product",
                required:true
            },

            name:{
                type:string,
                reuqired:true
            },

            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ],

    totalAmount:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        enum:["pending", "paid", "shipped", "delivered", "cancelled"],
        default:pending
    },

    paymentMethod:{
        type: String,
        enum: ["cash", "card"],
        default: "cash",
        status:String,
        paidAt:Date
    },
   shippingAdress:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Address",
       required: true
   }


},
{
     timestamps:true   
}

)


const order = mongoose.model("Order", orderSchema)

export {order} 

