import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'
import ProductDetailPage from './ProductDetailPage';

const API = `https://food4pawsapi-production.up.railway.app/api/products`

const SingleProduct = () => {
  const {_id} = useParams()
  const {isSingleLoading, getSingleProduct, singleProduct} =  useProductContext()
  useEffect(() => {
    getSingleProduct(`${API}?_id=${_id}`)
  }, [])
  
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <ProductDetailPage />
    </div>
  )
}

export default SingleProduct