import React, { useState } from 'react';

const activerequestmodal = ({ isOpen, onClose, requestData }) => {
  if (!isOpen) return null;

  // Provide default requestData if not passed or is null/undefined
  const defaultRequestData = {
    bloodType: 'N/A',
    units: 0,
    responses: [],
  };
  const currentRequestData = requestData || defaultRequestData;

  return (
    // Modal Overlay
    // The "fixed inset-0" classes make it cover the entire screen.
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      
      {/* Modal Container */}
      {/* The "w-11/12 max-w-md" classes give it a responsive width. */}
      <div className="bg-[#dbedf0] rounded-xl p-6 w-11/12 max-w-lg shadow-2xl relative"> {/* Adjusted max-w-md to max-w-lg for better alignment with image */}
        
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900 text-center">Active Request</h2> {/* Adjusted text size and color */}
          <button onClick={onClose} className="text-gray-500 text-3xl font-bold hover:text-gray-700 focus:outline-none" aria-label="Close modal">
            &times;
          </button>
        </div>

        {/* Request Details Section */}
        <div className="bg-blue-50 rounded-md p-4 text-center mb-5">
          <span className="text-4xl font-bold text-black block"> {/* Changed text-blue-600 to text-red-600 for B+ */}
            {currentRequestData.bloodType}
          </span>
          <span className="text-gray-600 mt-2 block">
            {currentRequestData.units} Units
          </span>
        </div>

        {/* Responses Table */}
        <div className="mb-5 overflow-x-auto rounded-lg shadow-md"> {/* Added overflow-x-auto and shadow for table */}
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">RESPONSES</h3> {/* Adjusted text size and color */}
          <table className="min-w-full text-left bg-white border border-gray-200"> {/* Added min-w-full and border */}
            <thead>
              <tr className="bg-[#1ab6ca]"> {/* Added background to header row */}
                <th className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-white uppercase tracking-wider rounded-tl-lg">NAME</th> {/* Adjusted padding, font, and added rounded corners */}
                <th className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-white uppercase tracking-wider">CONTACT</th>
                <th className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-white uppercase tracking-wider rounded-tr-lg">BLOOD TYPE</th>
              </tr>
            </thead>
            <tbody>
              {currentRequestData.responses.map((response, index) => (
                <tr key={index} className="hover:bg-gray-50"> {/* Added hover effect */}
                  <td className="px-4 py-2 border-b border-gray-200 whitespace-nowrap text-sm text-gray-800">{response.name}</td> {/* Adjusted padding, font, and added whitespace-nowrap */}
                  <td className="px-4 py-2 border-b border-gray-200 whitespace-nowrap text-sm text-gray-800">{response.contact}</td>
                  <td className="px-4 py-2 border-b border-gray-200 whitespace-nowrap text-sm text-gray-800">{response.bloodType}</td>
                </tr>
              ))}
              {currentRequestData.responses.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-4 py-4 text-center text-gray-500">No responses yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="text-center">
          <button
            onClick={() => console.log('Request marked as fulfilled!')} // Added onClick handler
            className="px-8 py-3 bg-[#1ab6ca] text-white font-semibold rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 text-lg"
          >
            Mark as Fulfilled
          </button>
        </div>
      </div>
    </div>
  )
}

export default activerequestmodal




