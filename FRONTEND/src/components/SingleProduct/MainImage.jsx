import React from 'react'

const MainImage = ({ImgbySize}) => {
  return (
    <div>
        <img src={ImgbySize} alt="main0img" className='h-[24rem] bg-red-100'/>
    </div>
  )
}

export default MainImage