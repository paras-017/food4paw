const Product = require('../models/product')

const getAllproducts = async(req, res)=>{
    const {company, name, featured, sort} = req.query
    
    const queryObject = {}

    if(company) queryObject.company = company
    if(featured) queryObject.company = featured

    
    if(name) queryObject.name = {$regex:name, $options:'i'}
    
    let apiData = Product.find(queryObject)
    if(sort) apiData = apiData.sort(sort)

    
    const myData = await apiData
    res.status(200).json({myData})   
}

module.exports = {getAllproducts}