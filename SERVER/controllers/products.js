const Product = require('../models/product')

const getAllproducts = async(req, res)=>{
    const {company} = req.query
    const queryObject = {}
    if(company){
     queryObject.company = company
    }
    console.log(queryObject)
    //by default find is querying all the products
    const myData = await Product.find(queryObject)
    res.status(200).json({myData})   
}

module.exports = {getAllproducts}