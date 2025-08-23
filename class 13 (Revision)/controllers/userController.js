import { User} from "../models/user.model.js"



export const registerUser = async (req, res) => {


     const {fullName, email, password } = req.body


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
    });

     res.status(201).json({
        message: "User registered successfully.",
        user: userResponse,
    });

};