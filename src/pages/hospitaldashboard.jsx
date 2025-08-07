import React, {useState} from 'react'
import Navbar2 from '../components/navbar2.jsx'
import RequestCard from '../components/requestcard.jsx'
import HospitalRequestCard from '../components/hospitalrequestcard.jsx'
import PastRequestCard from '../components/pastrequestcard.jsx'
import Footers from '../components/footers.jsx'
import MakeRequestModal from '../components/makerequestmodal.jsx'


const hospitaldashboard = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  
  const activeRequest = {
    bloodType: 'B+',
    units: 20,
    responses: [
      { name: 'SAMARTH', contact: '9833649203', bloodType: 'B+' },
      { name: 'SAMARTH', contact: '9833649203', bloodType: 'B+' },
      { name: 'SAMARTH', contact: '9833649203', bloodType: 'B+' },
      { name: 'SAMARTH', contact: '9833649203', bloodType: 'B+' },
      { name: 'SAMARTH', contact: '9833649203', bloodType: 'B+' },
    ],
  };


  return (
    <>
    <Navbar2 />
    <div className="px-8">
      {/* Dashboard Title */}
      <h1 className="text-4xl font-bold text-blue-900 mt-10 mb-4 ">DASHBOARD</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Requests Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Active Requests</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Active Request Card 1 */}
            <RequestCard bloodGroup="B+" units="20 Units" date="01-08-2025" />
            {/* Active Request Card 2 */}
            <RequestCard bloodGroup="B+" units="20 Units" date="01-08-2025" />
            {/* Active Request Card 3 */}
            <RequestCard bloodGroup="B+" units="20 Units" date="01-08-2025" />
            {/* Active Request Card 4 */}
            <RequestCard bloodGroup="B+" units="20 Units" date="01-08-2025" />

            {/* New Request Card */}
            <div className="bg-[#dbedf0] rounded-xl p-4 shadow-md flex flex-col items-center justify-center text-center h-full min-h-[120px]">
              <button onClick={openModal} className="bg-transparent text-[#1ab6ca] font-bold py-2 px-4 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                New Request
              </button>
            </div>
          </div>
        </div>

        {/* Hospital Requests Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Hospital Requests</h2>
          <div className="space-y-4">
            {/* Hospital Request Card 1 */}
            <HospitalRequestCard hospitalName="Apollo Hospital" units="20 Units B+" date="01-08-2025" />
            {/* Hospital Request Card 2 */}
            <HospitalRequestCard hospitalName="Apollo Hospital" units="20 Units B+" date="01-08-2025" />

            {/* Load More Button */}
            <div className="flex justify-center">
              <button className="bg-[#dbedf0] hover:bg-blue-200 text-[#1ab6ca] font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out flex items-center space-x-2">
                <span>Load More</span>

                {/* Down arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Past Request Section */}
      <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Past Request</h2>
      <div className="space-y-4">
        {/* Past Request Card */}
        <PastRequestCard units="20 Units B+" date="01-08-2025" />
      </div>
    </div>
    <Footers />
    <MakeRequestModal isOpen={isModalOpen} onClose={closeModal} />
   
    </>
  )
}



export default hospitaldashboard