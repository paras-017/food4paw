import React from 'react'
import loadingImage from './Loading.gif';

const Loading = () => {
  return (
    <div>
       <img src={loadingImage} alt="my logo" className='w-[30rem]'/>
    </div>
  )
}

export default Loading