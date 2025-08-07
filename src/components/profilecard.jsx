import React from 'react'

const profilecard = () => {
  return (
    <>
    <div className="bg-blue-50 rounded-3xl shadow-lg p-8 max-w-md w-full mx-auto my-10">
      {/* Profile Title */}
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Profile</h1>

      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-blue-900 text-lg font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="Samarth"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-blue-900 text-lg font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="Gupta"
            readOnly
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-blue-900 text-lg font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value="+91 9833520795"
          readOnly
        />
      </div>

      {/* Pincode & Last Donation Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="pincode" className="block text-blue-900 text-lg font-semibold mb-2">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="400074"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="lastDonationDate" className="block text-blue-900 text-lg font-semibold mb-2">
            Last donation date
          </label>
          <input
            type="text"
            id="lastDonationDate"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="NA"
            readOnly
          />
        </div>
      </div>

      {/* Gender, Age & Blood Group */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="gender" className="block text-blue-900 text-lg font-semibold mb-2">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="Male"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-blue-900 text-lg font-semibold mb-2">
            Age
          </label>
          <input
            type="text"
            id="age"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="18"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-blue-900 text-lg font-semibold mb-2">
            Blood Group
          </label>
          <input
            type="text"
            id="bloodGroup"
            className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="B+"
            readOnly
          />
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-end">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl mt-8 transition duration-300 ease-in-out">
          Edit
        </button>
      </div>
    </div>
    </>
  )
}

export default profilecard
