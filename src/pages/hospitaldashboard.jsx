import { useState, useEffect } from 'react';
import Navbar2 from '../components/navbar2.jsx'
import RequestCard from '../components/requestcard.jsx'
import HospitalRequestCard from '../components/hospitalrequestcard.jsx'
import PastRequestCard from '../components/pastrequestcard.jsx'
import Footers from '../components/footers.jsx'
import MakeRequestModal from '../components/makerequestmodal.jsx'
import { BACKEND_URL } from '../config.js';
import Map from '../components/map.jsx'

const Hospitaldashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRequests, setActiveRequests] = useState([]);
  const [otherRequests, setOtherRequests] = useState([]);
  const [pastRequests, setPastRequests] = useState([]);

  const token = localStorage.getItem('token');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [activeRes, othersRes, historyRes] = await Promise.all([
          fetch(`${BACKEND_URL}/hospital/requests`, { headers }),
          fetch(`${BACKEND_URL}/hospital/others`, { headers }),
          fetch(`${BACKEND_URL}/hospital/history`, { headers }),
        ]);

        const activeData = await activeRes.json();
        const othersData = await othersRes.json();
        const historyData = await historyRes.json();
        console.log("Active Requests:", activeData);
        console.log("Other Requests:", othersData);
        console.log("Past Requests:", historyData);
        setActiveRequests(activeData || []);
        setOtherRequests(othersData || []);
        setPastRequests(historyData || []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchData();
  }, [token]);

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
              {activeRequests
                .filter(req => req && req.requiredbloodtype && req.unitsrequired && req.creationdate)
                .map((req, index) => (
                  <RequestCard
                    key={req._id || index}
                    id={req._id}
                    bloodGroup={req.requiredbloodtype}
                    units={`${req.unitsrequired} Units`}
                    date={new Date(req.creationdate).toLocaleDateString()}
                  />
                ))}

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
              {otherRequests
                .filter(req => req && req.hospitalname && req.unitsrequired && req.requiredbloodtype && req.creationdate)
                .map((req, index) => (
                  <HospitalRequestCard
                    key={req._id || index}
                    requestData={req}
                    hospitalName={req.hospitalname}
                    units={`${req.unitsrequired} Units ${req.requiredbloodtype}`}
                    date={new Date(req.creationdate).toLocaleDateString()}
                  />
                ))}

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
          {pastRequests
            .filter(req => req && req.unitsrequired && req.requiredbloodtype && req.creationdate)
            .map((req, index) => (
              <PastRequestCard
                key={index}
                units={`${req.unitsrequired} Units ${req.requiredbloodtype}`}
                date={new Date(req.creationdate).toLocaleDateString()}
              />
            ))}
        </div>
      </div>
      <Map />
      <Footers />
      <MakeRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Hospitaldashboard
