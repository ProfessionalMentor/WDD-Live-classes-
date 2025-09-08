import express from "express"
import mongoose from "mongoose"

const cartSchema = new mongoose.Schema(
    {

        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        products:[
            {
                productId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Product",
                    required:true
                },
                
                name:{
                    type:String,
                    required: true
                },

                price:{
                    type:Number,
                    required:true
                },

                quantity:{
                    type:Number,
                    required:true,
                    min:1
                }
            }
        ],

        active:{
            type:Boolean,
            default:true
        },

        modifiedOn:{
            type:Date,
            default:Date.now()
        }

    },

    {
        timestamps:true
    }
)

const cart = mongoose.model("Cart", cartSchema)

export {cart}