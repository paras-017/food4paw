import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'
import Images from '../../components/SingleProduct/Images'
import Details from '../../components/SingleProduct/Details'

const API = `https://food4pawsapi-production.up.railway.app/api/products`

const SingleProduct = () => {
  const {isSingleLoading, singleProduct, getSingleProduct } =  useProductContext()
  const {_id} = useParams()
  const {images,name,brand,price=[{}],description1,description2,ingredients,stock,stars,review} = singleProduct

  

  useEffect(() => {
    getSingleProduct(`${API}?_id=${_id}`)
    // eslint-disable-next-line
  }, [])

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  // console.log(price)


  



  return (
    <div className='container m-auto '>
      <div className='flex'>
        <Images imgs={images}/>
        <Details name={name} 
                 brand={brand}
                 price={price}
                 description1={description1}
                 description2={description2}
                 ingredients={ingredients}
                 stock={stock}
                 stars={stars}
                 review={review}/>
      </div>
    </div>
  )
}

export default SingleProduct