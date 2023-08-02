const Product = require('../models/product')

const getAllproducts = async(req, res)=>{
    const {brand, name, featured, sort, select, _id} = req.query
    const queryObject = {}

    if(_id) queryObject._id = _id
    if(brand) queryObject.brand = {$regex:brand, $options:'i'}
    if(featured) queryObject.company = featured
    if(name) queryObject.name = {$regex:name, $options:'i'}
    
    let apiData = Product.find(queryObject)
    if(sort) apiData = apiData.sort(sort)
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
      }

    
   
      const Products = await apiData;
      res.status(200).json({ Products, nbHits: Products.length });
}

module.exports = {getAllproducts}