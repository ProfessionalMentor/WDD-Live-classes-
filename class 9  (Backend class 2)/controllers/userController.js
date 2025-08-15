import { User } from "../models/userModel.js";

export const registerUser = async (req , res) => {
    try {
        const {fullName , email , password} = req.body;
    
        // check user already register or not
         const existingUser = await findOne({email});
        if(existingUser){
             return res.status(400).json({message:"You are already registered! Please login"})
        }

        // Create a new user
       else{
        const newUser = new User({fullName, email, password });
        await newUser.save();

        res.status(201).json({message: "You are register successfully"})
       }
    }
    
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

