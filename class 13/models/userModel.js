import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
       fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            
        },
         password: {
            type: String,
            required: true
        },
      
    },
    {
        timestamps: true   // create at and update at 
    }
)

export const User = mongoose.model("User", userSchema)

