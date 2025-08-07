import {useState} from 'react'

const MakeRequestModal = ({ isOpen, onClose }) => {
  const [requiredBloodType, setRequiredBloodType] = useState('A+');
  const [unitsRequired, setUnitsRequired] = useState('');
  const [eligibleBloodTypes, setEligibleBloodTypes] = useState('');

  if (!isOpen) return null;

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      requiredBloodType,
      unitsRequired,
      eligibleBloodTypes,
    });
    // Here you would typically send this data to a backend or handle it
    onClose();
  };
  
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
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 uppercase">
          Request
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Required Blood Type */}
          <div className="mb-4">
            <label htmlFor="requiredBloodType" className="block text-gray-700 text-lg font-semibold mb-2">
              Required Blood type:
            </label>
            <select
              id="requiredBloodType"
              value={requiredBloodType}
              onChange={(e) => setRequiredBloodType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
            >
              {bloodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Units Required */}
          <div className="mb-4">
            <label htmlFor="unitsRequired" className="block text-gray-700 text-lg font-semibold mb-2">
              Units Required:
            </label>
            <input
              type="number"
              id="unitsRequired"
              value={unitsRequired}
              onChange={(e) => setUnitsRequired(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
              placeholder="e.g., 20"
              min="1"
            />
          </div>

          {/* Eligible Blood Types */}
          <div className="mb-6">
            <label htmlFor="eligibleBloodTypes" className="block text-gray-700 text-lg font-semibold mb-2">
              Eligible Blood types:
            </label>
            <input
              type="text"
              id="eligibleBloodTypes"
              value={eligibleBloodTypes}
              onChange={(e) => setEligibleBloodTypes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
              placeholder="e.g., A+, O-, AB+"
            />
            <p className="text-sm text-gray-500 mt-1">Separate types with commas.</p>
          </div>

          {/* Create Request Button */}
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
  )
}

export default MakeRequestModal;