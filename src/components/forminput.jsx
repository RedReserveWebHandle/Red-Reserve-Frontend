import React from 'react'

const forminput = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1 text-left">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white"
      />
    </div>
  )
}

export default forminput