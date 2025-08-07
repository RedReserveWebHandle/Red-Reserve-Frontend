import React from 'react'

const selectinput = ({ label, options, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1 text-left">{label}</label>
      <select
        defaultValue={defaultValue}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default selectinput