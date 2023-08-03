import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productContext'

const SingleProduct = () => {
const {myName} =  useProductContext()
  const {id} = useParams()
  console.log(myName, id)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct