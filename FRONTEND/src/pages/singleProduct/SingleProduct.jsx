import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'

const API = `https://food4pawsapi-production.up.railway.app/api/products`

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext()
  const {_id}=useParams()
  const {_id:Pid,name,brand,price,description1,description2,ingredients,stock,stars,review,images} = singleProduct

  useEffect(() => {
    getSingleProduct(`${API}?_id=${_id}`)
  }, [])
  
  if(isSingleLoading)return<div>Loadding</div>
      
  
  
  return (
    <div className='flex'>
      <div className="Images">Image-section</div>
      <div className="Detail">Detail-section</div>
    </div>
  )
}

export default SingleProduct