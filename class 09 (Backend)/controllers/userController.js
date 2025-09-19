import { User} from "../models/userModel.js"



export const registerUser = async (req, res) => {


     const {fullName, email, password, confirmPassword } = req.body


     const existedUser = await User.findOne({
        email
    })

       if (existedUser) {
        return res.status(409).json({ message: "User already exists." });
    }

     // Create new user
    const user = await User.create({
        fullName,
        email,
        password,
        confirmPassword
    });

     res.status(201).json({
        message: "User registered successfully.",
    });

};