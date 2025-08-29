import { User} from "../models/userModel.js"



export const registerUser = async (req, res) => {


    const { FullName, email, password } = req.body;


     const existedUser = await User.findOne({
        email
    })

       if (existedUser) {
        return res.status(409).json({ message: "User already exists." });
    }

     // Create new user
    const user = await User.create({
        FullName,
        email,
        password,
    });

     res.status(201).json({
        message: "User registered successfully.",
    });

};

export const loginUser = async (req, res) => {
    const {email, password} = req.body
     
    const existedUser = await User.findOne({
        email
    })

    if(!existedUser){
        return res.status(404).json({ message: "User not found ! please login first." });
    }

    const user = await User.findOne({
        email,
        password
    })

    if(user){
        res.status(200).json({
            message: "User logged in successfully.",
        });
    }
}