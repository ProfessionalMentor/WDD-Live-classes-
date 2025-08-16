import mongoose from "mongoose"

const userSchema = new mongoose.schema({
    fullName:{
        type:String,
        required:true
    
    },

    email:{
        type: String,
        required:true
    },

    password:{
          type: String,
        required:true
    }
},
{
    timestamps:true      //Created at and Updated at
}
)

export const User = mongoose.model("User", userSchema) 