import React from 'react'
import doctors from './doctorsAPI.js'
import DoctorCard from './DoctorCard.jsx';
const Doctor = () => {
  return (
    <div className='max-w-[85rem] m-auto mt-8'>
      <div className={`grid grid-cols-1 md:grid-cols-4 md:gap-2  px-3`}>
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} docName={doctor.docName} docDesc={doctor.docDesc} docImg={doctor.docImg} />
        ))}
      </div>
    </div>
  )
}

export default Doctor