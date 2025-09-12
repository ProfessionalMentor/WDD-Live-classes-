import mongoose from "mongoose"


const productSchema = new mongoose.Schema({

  id:{
    type:String,
    required: true
  } , 

  title:{
    type: String,
    required:true
  },

  description:{
    type: String,
    required:true
  },

  price:{
    type: Number,
    required: true,
    default:0,
    min:0
  },

  category:{
   type:String,
   required:true
  },

  brand:{
    type:String,
    required: true
  },

  stock:{
    type: Number,
    required:true,
    min:0,
    default:0 
  },

  images:[
    {
    
        url:String,
        alt:String
  }
],
  
  ratings:{
    type: Number,
    default: 0
},

reviews:[{

    userId:{type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        rating: Number,
        createdAt:{
            type:Date,
            default:Date.now
        }
    },

}],

},
{
    timestamps:true
}

);

const product = mongoose.model('Product' , productSchema);

export {product}