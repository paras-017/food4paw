import React from 'react'
// import loadingImage from './Loading.gif';

const Loading = ({loadingImg}) => {
  return (
    <div>
       <img src={loadingImg} alt="my logo" className='w-[30rem]'/>
    </div>
  )
}

export default Loading