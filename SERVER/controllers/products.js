const Product = require('../models/product')
const getAllproducts = async(req, res)=>{
    const myData = await Product.find()
    res.status(200).json({myData})   
}

module.exports = {getAllproducts}