import { useState } from 'react';
import { BACKEND_URL } from '../config.js';

const HospitalRequestModal = ({ isOpen, onClose, hospitalData }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const defaultHospitalData = {
    _id: '',
    hospitalname: 'Hospital Name',
    requiredbloodtype: 'N/A',
    eligiblebloodtypes: [],
    hospitalpincode: 'N/A',
    hospitaladdress: '(address)',
    unitsrequired: 0,
  };

  const currentHospitalData = hospitalData || defaultHospitalData;

  const handleSendUnits = async () => {
    setLoading(true);
    setMessage('');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Authentication required.');
        return;
      }

      const res = await fetch(`${BACKEND_URL}/hospital/fulfillhospital`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: currentHospitalData._id }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Success! Request fulfilled.');
        setTimeout(() => {
          onClose(); // Close modal after short delay
        }, 1000);
      } else {
        setMessage(data.message || 'Failed to fulfill request.');
      }
    } catch (err) {
      setMessage('Error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 font-sans">
      <div className="bg-[#dbedf0] rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {currentHospitalData.hospitalname}
        </h2>

        <div className="space-y-3 text-gray-700 text-lg">
          <p><span className="font-semibold">Required Blood type:</span> {currentHospitalData.requiredbloodtype}</p>
          <p><span className="font-semibold">Eligible Blood types:</span> {currentHospitalData.eligiblebloodtypes.join(', ')}</p>
          <p><span className="font-semibold">Hospital Pincode:</span> {currentHospitalData.hospitalpincode}</p>
          <p><span className="font-semibold">Hospital address:</span> {currentHospitalData.hospitaladdress}</p>
          <p><span className="font-semibold">Units Required:</span> {currentHospitalData.unitsrequired}</p>
        </div>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium">{message}</p>
        )}

        <div className="text-center mt-6">
          <button
            onClick={handleSendUnits}
            disabled={loading}
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-300 text-lg disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Units'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalRequestModal;
