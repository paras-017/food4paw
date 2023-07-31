const Product = require('../models/product')

const getAllproducts = async(req, res)=>{
    const {company, name, featured, sort, select} = req.query
    const queryObject = {}

    if(company) queryObject.company = company
    if(featured) queryObject.company = featured
    if(name) queryObject.name = {$regex:name, $options:'i'}
    
    let apiData = Product.find(queryObject)
    if(sort) apiData = apiData.sort(sort)
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
      }

      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 10;
      let skip = (page - 1) * limit;
      apiData = apiData.skip(skip).limit(limit);
   
      const Products = await apiData;
      res.status(200).json({ Products, nbHits: Products.length });
}

module.exports = {getAllproducts}