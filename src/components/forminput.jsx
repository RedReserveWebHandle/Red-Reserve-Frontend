<<<<<<< HEAD
import React from 'react'

const forminput = ({ label, placeholder="", type = "text" }) => {
  return (
   
    <div className="mb-2">
        <label className="block text-blue-900 text-lg font-semibold mb-2 text-left">
          {label}
        </label>
        <input
          type={type}
          id={placeholder}
          className="w-full p-3 rounded-xl border border-blue-300 bg-white text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#1ab6ca]"
          
        />
      </div>
  )
}

=======
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

>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df
export default forminput