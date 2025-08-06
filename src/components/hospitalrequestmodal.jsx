import React,{ useState } from 'react'


const hospitalrequestmodal = ({ isOpen, onClose, hospitalData }) => {
  if (!isOpen) return null;

  // Provide default hospitalData if not passed or is null/undefined
  const defaultHospitalData = {
    name: 'Hospital Name',
    requiredBloodType: 'N/A',
    eligibleBloodTypes: [],
    pincode: 'N/A',
    address: '(address)',
    unitsRequired: 0,
  };
  const currentHospitalData = hospitalData || defaultHospitalData;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 font-sans">
      <div className="bg-[#dbedf0] rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {currentHospitalData.name}
        </h2>

        {/* Hospital Details */}
        <div className="space-y-3  text-gray-700 text-lg">
          <p>
            <span className="font-semibold mb-0 text-left">Required Blood type:</span> {currentHospitalData.requiredBloodType}
          </p>
          <p>
            <span className="font-semibold">Eligible Blood types:</span> {currentHospitalData.eligibleBloodTypes.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Hospital Pincode:</span> {currentHospitalData.pincode}
          </p>
          <p>
            <span className="font-semibold">Hospital address:</span> {currentHospitalData.address}
          </p>
          <p>
            <span className="font-semibold">Units Required:</span> {currentHospitalData.unitsRequired}
          </p>
        </div>
        <br/>

        {/* Send Units Button */}
        <div className="text-center">
          <button
            onClick={() => console.log('Sending units to hospital:', currentHospitalData.name)}
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-300 text-lg"
          >
            Send Units
          </button>
        </div>
      </div>
    </div>
  )
}

export default hospitalrequestmodal