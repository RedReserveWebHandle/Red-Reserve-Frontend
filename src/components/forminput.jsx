const Forminput = ({ label, placeholder="", type = "text" }) => {
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

export default Forminput