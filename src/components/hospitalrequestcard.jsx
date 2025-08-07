import React,{useState} from 'react'
import HospitalRequestModal from './hospitalrequestmodal.jsx'

const hospitalrequestcard = ({ hospitalName, units, date }) => {
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);

  const sampleHospitalData = {
    name: 'HOSPITAL NAME',
    requiredBloodType: 'B+',
    eligibleBloodTypes: ['B+', 'O', 'A-'],
    pincode: '400074',
    address: '123 Hospital Road, City, State',
    unitsRequired: 20,
  };

  const openHospitalModal = () => setIsHospitalModalOpen(true);
  const closeHospitalModal = () => setIsHospitalModalOpen(false);
  return (
    <div className="bg-[#dbedf0] rounded-xl p-4 shadow-md flex items-center justify-between">
      <div className="flex flex-col items-start">
        <p className="text-blue-900 font-semibold mb-1">{hospitalName}</p>
        <p className="text-gray-700 text-sm mb-2">{units}</p>
        <div className="flex items-center space-x-2 text-teal-600 text-sm">
          {/* Calendar icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 1.5h9a.75.75 0 01.75.75V3h-9V2.25zM12 4.5a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zM15.75 3V2.25A.75.75 0 0015 1.5h-6a.75.75 0 00-.75.75V3H4.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21.75h15A2.25 2.25 0 0021.75 18.75V5.25A2.25 2.25 0 0019.5 3h-3.75zm-1.5 9.75a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0v-3.75z"
              clipRule="evenodd"
            />
          </svg>
          <span>{date}</span>
        </div>
      </div>
      <button onClick={openHospitalModal} className="bg-[#1ab6ca] hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out">
        Send Blood
      </button>
        <HospitalRequestModal
        isOpen={isHospitalModalOpen}
        onClose={closeHospitalModal}
        hospitalData={sampleHospitalData}
      />
    </div>
  )
}

export default hospitalrequestcard