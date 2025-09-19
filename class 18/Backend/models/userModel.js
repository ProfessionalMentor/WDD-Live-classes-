import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

export const User = mongoose.model("User", userSchema)

