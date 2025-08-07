import { useState } from 'react';
import DonorAcceptModal from './donoracceptmodal.jsx'; // Capitalized the file name

const DashboardLeft = () => { // Capitalized component name
  const [isModalOpen, setModalOpen] = useState(false);

  const sampleData = {
    requiredBloodType: 'B+',
    eligibleBloodTypes: ['B+', 'O', 'A-'],
    pincode: '400074',
    address: '123 Hospital Road, City, State',
    unitsRequired: 20,
    DonationTimings: '10AM-5PM'
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const cooldownDate = "01-10-2025"; // Example date

  return (
    <>
      <div className="bg-white rounded-3xl  p-8 max-w-2xl w-full mx-auto my-10">
        {/* Dashboard Title */}
        <h1 className="text-6xl font-bold text-blue-900 mb-2">DASHBOARD</h1>
        <p className="text-gray-600 mb-6">You can Donate every 56 Days!</p>

        {/* Cooldown Period Message */}
        <div className="bg-[#1ab6ca] border-l-4 border-[#1ab6ca] text-white p-4 rounded-xl flex items-center space-x-3 mb-8 shadow-md">
          {/* Hourglass icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#1ab6ca]"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6a.75.75 0 00.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold">You are in cooldown period till <span className="font-bold">[{cooldownDate}]</span></p>
        </div>

        {/* Last Donation Section */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Last Donation</h2>
        <div className="bg-[#dbedf0] rounded-xl p-4 flex items-center justify-between mb-8 shadow-md">
          <span className="text-[#1ab6ca] font-semibold">Apollo Hospitals</span>
          <div className="flex items-center space-x-2 text-[#1ab6ca]">
            {/* Calendar icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 1.5h9a.75.75 0 01.75.75V3h-9V2.25zM12 4.5a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zM15.75 3V2.25A.75.75 0 0015 1.5h-6a.75.75 0 00-.75.75V3H4.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21.75h15A2.25 2.25 0 0021.75 18.75V5.25A2.25 2.25 0 0019.5 3h-3.75zm-1.5 9.75a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0v-3.75z"
                clipRule="evenodd"
              />
            </svg>
            <span>01-08-2025</span>
          </div>
        </div>

        {/* Matching Nearby Requests Section */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Matching Nearby Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Request Card 1 */}
          <RequestCard bloodGroup="B+" hospital="Apollo Hospitals" eligible="B+, AB+, O" units="2 units" openModal={openModal} />
          {/* Request Card 2 */}
          <RequestCard bloodGroup="B+" hospital="Apollo Hospitals" eligible="B+, AB+, O" units="2 units" openModal={openModal} />
          {/* Request Card 3 */}
          <RequestCard bloodGroup="B+" hospital="Apollo Hospitals" eligible="B+, AB+, O" units="2 units" openModal={openModal} />
        </div>

        {/* More Button */}
        <div className="flex justify-center">
          <button className="bg-[#dbedf0] hover:bg-blue-200 text-[#1ab6ca] font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center space-x-2">
            <span>More</span>
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
      <DonorAcceptModal
        isOpen={isModalOpen}
        onClose={closeModal}
        Data={sampleData}
      />
    </>
  );
};

// Reusable RequestCard component
const RequestCard = ({ bloodGroup, hospital, eligible, units, openModal }) => { // openModal is now a prop
  return (
    <div className="bg-[#dbedf0] rounded-xl p-4 shadow-md flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold text-blue-900 mb-2">{bloodGroup}</h3>
      <p className="text-gray-700 font-semibold mb-1">{hospital}</p>
      <p className="text-teal-600 text-sm mb-2">Eligible: {eligible}</p>
      <p className="text-gray-600 text-sm mb-4">{units}</p>
      <button onClick={openModal} className="bg-[#1ab6ca] hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out">
        Contact
      </button>
    </div>
  );
};

export default DashboardLeft; // Capitalized component name