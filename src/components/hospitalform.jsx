import React from 'react'
import FormInput from './forminput.jsx'

const hospitalform = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <SetHospitalDetailsForm />
    </div>
  );
}

// SetHospitalDetailsForm component
const SetHospitalDetailsForm = () => {
  return (
    <>
    <div className="bg-blue-50 rounded-3xl shadow-lg p-8 max-w-md w-full mx-auto my-10">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Set Hospital Details</h1>
      <p className="text-gray-600 mb-8">Ensure all details of your hospital are correct.</p>

      {/* Hospital Name */}
      <div className="mb-6">
        <label htmlFor="hospitalName" className="block text-blue-900 text-lg font-semibold mb-2">
          Hospital Name
        </label>
        <input
          type="text"
          id="hospitalName"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      {/* License/Certification ID */}
      <div className="mb-6">
        <label htmlFor="licenseId" className="block text-blue-900 text-lg font-semibold mb-2">
          License/Certification ID:
        </label>
        <input
          type="text"
          id="licenseId"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      {/* Contact Number & Pincode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="contactNumber" className="block text-blue-900 text-lg font-semibold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="pincode" className="block text-blue-900 text-lg font-semibold mb-2">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
        </div>
      </div>

      {/* Address */}
      <div className="mb-6">
        <label htmlFor="address" className="block text-blue-900 text-lg font-semibold mb-2">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      {/* Email ID */}
      <div className="mb-6">
        <label htmlFor="emailId" className="block text-blue-900 text-lg font-semibold mb-2">
          Email ID
        </label>
        <input
          type="email"
          id="emailId"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      {/* Password */}
      <div className="mb-8">
        <label htmlFor="password" className="block text-blue-900 text-lg font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=""
        />
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300 ease-in-out">
          Continue
        </button>
      </div>
    </div>
    </>
  )
}

export default hospitalform