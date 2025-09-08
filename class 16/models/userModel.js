import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    userId:{
        type:string,
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
        unique: true,
        required: true
    },
    phoneNo:{
        type: Number,
        required:true,
        unique:true
    },
    address:{
         type:String,
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
     }
},

{
    timestamps: true
})


const user = mongoose.model('User', userSchema)

export default user