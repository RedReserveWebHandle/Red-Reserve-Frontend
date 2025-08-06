import React from 'react';
import { Link } from 'react-router-dom';

// Changed this to be a simple wrapper for label and input
const Box = ({ label, id, value }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-blue-900 text-lg font-semibold mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full p-3 rounded-xl border border-[#1AB6CA] bg-white text-[#1AB6CA] placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
        value={value}
        readOnly
      />
    </div>
  );
};

const ProfileCard = () => {
  return (
    <>
      <div className="bg-[#dbedf0] rounded-3xl shadow-lg p-8 max-w-xl w-full mx-auto my-10">
        {/* Profile Title */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Profile</h1>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Box label="First Name" id="firstName" value="Samarth" />
          <Box label="Last Name" id="lastName" value="Gupta" />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <Box label="Phone Number" id="phoneNumber" value="+91 9833520795" />
        </div>

        {/* Pincode & Last Donation Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Box label="Pincode" id="pincode" value="400074" />
          <Box label="Last Donation Date" id="lastDonationDate" value="NA" />
        </div>

        {/* Gender, Age & Blood Group */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Box label="Gender" id="gender" value="Male" />
          <Box label="Age" id="age" value="18" />
          <Box label="Blood Group" id="bloodGroup" value="B+" />
        </div>

        {/* Edit Button */}
        <div className="flex justify-end">
          <Link to='/setprofile' className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl mt-8 transition duration-300 ease-in-out">
            <button>
              Edit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;