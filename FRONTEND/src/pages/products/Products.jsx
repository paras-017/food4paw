import React, { useEffect } from 'react'
import axios from 'axios'
const Products = () => {
  
  
  useEffect(() => {
   
    const fetchData = async () => {
      const apiUrl =  `https://food4pawsapi-production.up.railway.app/api/products?_id=&brand=&sort=`

      try {
        const response = await axios.get(apiUrl);
        const data = response.data
        console.log(data.Products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])
  

  return (
    <div>Products</div>
  )
}

export default Products