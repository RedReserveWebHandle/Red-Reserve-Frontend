import { useState } from 'react';
import { BACKEND_URL } from '../config.js';

const Donoracceptmodal = ({ isOpen, onClose, data }) => {
  const [medications, setMedications] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  if (!isOpen) return null;

  const handleAcceptRequest = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${BACKEND_URL}/donor/accept`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          requestId: data._id
        })
      });

      if (res.ok) {
        setMessage('Request accepted successfully!');
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        const data = await res.json();
        if (res.status === 403) {
          setMessage(`In cooldown until ${data.message?.split('[')[0] || 'next period'}`);
        } else {
          setMessage(`${data.message || 'Failed to accept request'}`);
        }
      }
    } catch (err) {
      console.error('Accept error:', err);
      setMessage('Error accepting request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 font-sans">
      <div className="bg-[#dbedf0] rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 uppercase">Hospital Name</h2>

        {/* Static Details */}
        <div className="space-y-3 mb-6 text-gray-800 p-4">
          <p><span className="font-semibold">Required Blood type:</span> B+</p>
          <p><span className="font-semibold">Eligible Blood types:</span> B+, O, A-</p>
          <p><span className="font-semibold">Hospital Pincode :</span> 400074</p>
          <p><span className="font-semibold">Hospital address :</span> (address)</p>
          <p><span className="font-semibold">Units Required :</span> 20</p>
          <p><span className="font-semibold">Donation Timings:</span> 10AM - 5PM</p>
        </div>

        {/* Textarea */}
        <div className="mb-6">
          <label htmlFor="medications" className="block text-[#1ab6ca] text-lg font-semibold mb-2">
            Major illness or long term medications:
          </label>
          <textarea
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca] resize-y min-h-[80px]"
            placeholder="e.g., Asthma, Insulin-dependent diabetes, etc."
            rows="4"
          />
        </div>

        {/* Accept Button */}
        <div className="text-center">
          <button
            onClick={handleAcceptRequest}
            disabled={loading}
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 text-lg disabled:opacity-60"
          >
            {loading ? 'Accepting...' : 'Accept Request'}
          </button>
          {message && (
            <p className="mt-4 text-center text-gray-700 font-medium">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donoracceptmodal;
