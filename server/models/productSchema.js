const mongoose = require('mongoose')

const product = mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
   
    brand: {
        type: String,
        default: "SLOOK"
    },
    gender: {
        type: String,
        required: true
    },
    sizes: [{
        size: {
          type: String,
          enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          required: true
        },
        quantity: {
          type: Number,
          default: 0,
          required: true
        }
      }],
    price: {
        type: Number,
        required: true
      },
    description: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
},
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default: true,
    },
    materials:{
        type:String,
        required: true,
    },
    new_price:{
        type:Number,
        
    },
 
    });
    
   

   
  



const PRODUCT = mongoose.model('product',product);
module.exports= PRODUCT;