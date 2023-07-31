import React from 'react';

const DoctorCard = ({ docName, docDesc, docImg }) => {
  return (
      
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
    <img src={docImg} alt={docName} className="w-full h-40 object-contain" />
    <div className="px-4 py-4">
      <h2 className="text-xl font-bold mb-2">{docName}</h2>
      <p className="text-gray-600">{docDesc}</p>
    </div>
  </div>

  );
};

export default DoctorCard;