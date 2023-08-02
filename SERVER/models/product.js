const mongoose = require('mongoose');   
const productSchema = mongoose.Schema({
    dealPrice:{
        type: Number
    },
    name: {
        type: String,
        required: true,
      },
    brand: {
        type: String,
        required: true,
      },
    price: {
        type: mongoose.Mixed
      },
    description1: {
        type: String,
    },
    description2: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    topCategory: {
        type: String
    },
    petCategory: {
        type: Array
    },
    stock: {
        type: Number
    },
    stars: {
        type: Number
    },
    images: {
        type: mongoose.Mixed
      },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
    
})
module.exports = mongoose.model('Product', productSchema)