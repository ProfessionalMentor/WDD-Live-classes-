import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({

    userId: {type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    houseNo:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    postalCode:{
        type: String,
        required:true

    },

    coordinates:{

        type:
        {
        String,
        enum:["point"],
        default: "point"
        },

        coordinates:{
            type:[Number],
            required:true
        }


    }




});

addressSchema.index({coordinates: "2dsphere"})

const userAddress = mongoose.model('Address', userSchema)

export { userAddress } 