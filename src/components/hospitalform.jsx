import React from 'react'
import FormInput from './forminput.jsx'
import {Link} from 'react-router-dom'

const hospitalform = () => {
  return (
    <div className=" w-216 flex items-center justify-center">
      <div className="bg-[#DBEDF0] rounded-3xl shadow-lg p-8 w-156 mx-auto my-10">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-[#1ab6ca] mb-2">Set Hospital Details</h1>
      <p className="text-gray-800 mb-6">Ensure all details of your hospital are correct.</p>

      {/* Hospital Name */}
      <FormInput label="Hospital Name" />
      

      {/* License/Certification ID */}
      <FormInput label="License ID" />

      {/* Contact Number & Pincode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        <FormInput label="Contact Number" />
        <FormInput label="Pincode" />
      </div>

      {/* Address */}
      <FormInput label="Address" />

      {/* Email ID */}
      <FormInput label="Email ID" />

      {/* Password */}
      <FormInput label="Password" />
    <br/>
      {/* Continue Button */}
      <div className="flex justify-center">
        <Link to='/hospitaldashboard' className="bg-[#1ab6ca] hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300 ease-in-out">
        <button>
          Continue
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}



export default hospitalform