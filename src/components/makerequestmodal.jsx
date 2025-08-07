import { useState } from 'react';
import { BACKEND_URL } from '../config.js';

const MakeRequestModal = ({ isOpen, onClose }) => {
  const [requiredBloodType, setRequiredBloodType] = useState('A+');
  const [unitsRequired, setUnitsRequired] = useState('');
  const [eligibleBloodTypes, setEligibleBloodTypes] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!requiredBloodType || !unitsRequired || !eligibleBloodTypes || !contact) {
      setMessage("Please fill all fields");
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage("Not authenticated. Please log in.");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/hospital/bloodrequest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          bloodtype: requiredBloodType,
          eligibletypes: eligibleBloodTypes.split(',').map(s => s.trim()),
          units: parseInt(unitsRequired),
          contact: contact
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Request created successfully!");
        // Reset form
        setRequiredBloodType('A+');
        setUnitsRequired('');
        setEligibleBloodTypes('');
        setContact('');
        setTimeout(() => {
          setMessage('');
          onClose();
        }, 1000);
      } else {
        setMessage(data.message || "Failed to create request");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 font-sans">
      <div className="bg-[#dbedf0] rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => {
            setMessage('');
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 uppercase">
          Request
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Required Blood Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Required Blood Type</label>
            <select
              value={requiredBloodType}
              onChange={(e) => setRequiredBloodType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
            >
              {bloodTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Units Required */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Units Required</label>
            <input
              type="number"
              value={unitsRequired}
              onChange={(e) => setUnitsRequired(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
              placeholder="e.g., 3"
              min="1"
            />
          </div>

          {/* Eligible Blood Types */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Eligible Blood Types</label>
            <input
              type="text"
              value={eligibleBloodTypes}
              onChange={(e) => setEligibleBloodTypes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
              placeholder="e.g., A+, O-, AB+"
            />
            <p className="text-sm text-gray-500 mt-1">Separate types with commas.</p>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
              placeholder="e.g., 8888888888"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-red-500 font-medium mb-4">{message}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-[#1ab6ca] focus:ring-opacity-75 transition duration-300 text-lg"
            >
              Create Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeRequestModal;
