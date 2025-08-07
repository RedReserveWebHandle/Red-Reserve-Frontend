import {useState} from 'react'

const Donoracceptmodal = ({isOpen,onClose}) => {
  // State for the textarea input
  const [medications, setMedications] = useState('');

   if (!isOpen) {
    return null;
  }
  
  // Handler for the "Accept Request" button click
  const handleAcceptRequest = () => {
    console.log('Request accepted!');
    console.log('Medications/Illness:', medications);
    // In a real application, you would send this data to a server
    onClose(); // Close the modal after accepting
  };

  return (
    // Overlay for the modal: fixed position, full screen, semi-transparent dark background
    <div className="fixed inset-0 bg-black-800 bg-opacity-75 flex items-center justify-center p-4 z-50 font-sans">
      {/* Modal content container: white background, rounded corners, shadow, centered */}
      <div className="bg-[#dbedf0] rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose} // Call onClose prop when button is clicked
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none rounded-full p-1 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          &times; {/* HTML entity for multiplication sign, commonly used for close buttons */}
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 uppercase">
          Hospital Name
        </h2>

        {/* Modal Body - Static Information */}
        <div className="space-y-3 mb-6 text-gray-800 p-4">
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Required Blood type:</span> B+
          </p>
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Eligible Blood types:</span> B+, O, A-
          </p>
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Hospital Pincode :</span> 400074
          </p>
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Hospital address :</span> (address)
          </p>
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Units Required :</span> 20
          </p>
          <p className="text-lg mb-0 text-left">
            <span className="font-semibold">Donation Timings:</span> 10AM - 5PM
          </p>
        </div>

        {/* Textarea for additional information */}
        <div className="mb-6">
          <label htmlFor="medications" className="block text-[#1ab6ca] text-lg font-semibold mb-2">
            Major illness or long term medications:
          </label>
          <textarea
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)} // Update state on change
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca] resize-y min-h-[80px]"
            placeholder="e.g., Asthma, Insulin-dependent diabetes, etc."
            rows="4" // Initial number of rows
          ></textarea>
        </div>

        {/* Accept Request Button */}
        <div className="text-center">
          <button
            onClick={handleAcceptRequest} // Call handler on click
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-300 text-lg"
          >
            Accept Request
          </button>
        </div>
      </div>
    </div>
  )
}

export default Donoracceptmodal