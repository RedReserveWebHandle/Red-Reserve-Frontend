import React from 'react'
import { Link } from 'react-router-dom'

const loginform = () => {
  return (
    <div className="bg-[#DBEDF0] rounded-lg shadow-md p-8 md:w-106 m-8">
<h2 className="text-3xl font-extrabold text-black mb-6 text-left">LOGIN</h2>
<form className="space-y-4">
<div>
<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
Email
</label>
<input
type="email"
id="email"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white border-[#1AB6CA]"
/>
</div>
<div>
<label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-left">
Password
</label>
<input
type="password"
id="password"
className="shadow appearance-none border border-[#1AB6CA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
/>
</div>
<button
type="submit"
className="bg-[#1AB6CA] hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
>
Login
</button>
</form>
<div className="mt-6 pt-4 border-t border-gray-300 text-center">
<p className="text-gray-600 text-sm mb-2">
Haven't donated before? <br />
No worries, we got you covered!
</p>
<Link to="/signup" className="bg-white hover:bg-gray-200 text-[#1AB6CA] font-semibold py-2 px-4 rounded border border-[#1AB6CA] focus:outline-none focus:shadow-outline">
<button>
Sign Up
</button>
</Link>
</div>
</div>
  )
}

export default loginform