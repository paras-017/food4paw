const Product = require('../models/product')

const getAllproducts = async(req, res)=>{
    const {company,name} = req.query
    const queryObject = {}

    if(company) queryObject.company = company
    if(featured) queryObject.company = featured
    //if my name is iphone it'll search all iphone inc. iphone 10
    if(name) queryObject.name = {$regex:name, $options:'i'}
    

    console.log(queryObject)
    //by default find is querying all the products
    const myData = await Product.find(queryObject)
    res.status(200).json({myData})   
}

module.exports = {getAllproducts}