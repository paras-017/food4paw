import React from 'react'
import doctors from './doctorsAPI.js'
import DoctorCard from './DoctorCard.jsx';
const Doctor = () => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Our Doctors</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} docName={doctor.docName} docDesc={doctor.docDesc} docImg={doctor.docImg} />
      ))}
    </div>
  </div>
  )
}

export default Doctor