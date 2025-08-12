import { useState } from 'react';
import { BACKEND_URL } from '../config.js';

const Activerequestmodal = ({ isOpen, onClose, requestData }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  if (!isOpen) return null;

  const defaultRequestData = {
    id: '',
    bloodType: 'N/A',
    units: 0,
    responses: [],
  };

  const currentRequestData = requestData || defaultRequestData;

  const handleFulfill = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`${BACKEND_URL}/hospital/fulfillrequest`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: currentRequestData.id }),
      });

      if (res.ok) {
        setMessage('Request marked as fulfilled!');
        // Optionally:
        // - Close modal
        // - Trigger parent reload
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        const data = await res.json();
        setMessage(`❌ ${data.message || 'Failed to fulfill request'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('❌ Error fulfilling request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#dbedf0] rounded-xl p-6 w-11/12 max-w-lg shadow-2xl relative">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900 text-center">Active Request</h2>
          <button onClick={onClose} className="text-gray-500 text-3xl font-bold hover:text-gray-700 focus:outline-none" aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="bg-blue-50 rounded-md p-4 text-center mb-5">
          <span className="text-4xl font-bold text-black block">{currentRequestData.bloodType}</span>
          <span className="text-gray-600 mt-2 block">{currentRequestData.units} Units</span>
        </div>

        <div className="mb-5 overflow-x-auto rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">RESPONSES</h3>
          <table className="min-w-full text-left bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#1ab6ca]">
                <th className="px-4 py-3 border-b text-white text-sm rounded-tl-lg">NAME</th>
                <th className="px-4 py-3 border-b text-white text-sm">CONTACT</th>
                <th className="px-4 py-3 border-b text-white text-sm rounded-tr-lg">BLOOD TYPE</th>
              </tr>
            </thead>
            <tbody>
              {currentRequestData.responses.length > 0 ? (
                currentRequestData.responses.map((response, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-gray-800">{response.name}</td>
                    <td className="px-4 py-2 border-b text-gray-800">{response.contact}</td>
                    <td className="px-4 py-2 border-b text-gray-800">{response.bloodtype}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-4 text-center text-gray-500">No responses yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <button
            onClick={handleFulfill}
            disabled={loading}
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 text-lg disabled:opacity-50"
          >
            {loading ? 'Fulfilling...' : 'Mark as Fulfilled'}
          </button>
          {message && <p className="mt-3 text-[#1ab6ca] text-sm">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Activerequestmodal;
