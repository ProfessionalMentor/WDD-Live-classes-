import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    userId:{
        type: String,
        required:true,
        unique:true
    },
    FullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo:{n        type: Number,
        required:true,
        unique:true
    },
    address:{
         type: String,
         required:true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isSeller:{
        type: Boolean,
        required:true,
        default:false
     },
    role: {
        type: String,
        enum: ['user', 'admin', 'seller'], // Define allowed roles
        default: 'user'
    },
    refreshToken: {
        type: String
    }
},

{
    timestamps: true
})


const user = mongoose.model('User', userSchema)

export default user