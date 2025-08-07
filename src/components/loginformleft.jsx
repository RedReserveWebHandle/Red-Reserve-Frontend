import React from 'react'
import photo from '../photos/photo2.png'

const loginformleft = () => {
  return (
    <div className=" flex flex-col items-center md:items-start lg:items-center justify-between">
        <div className="md:w-3/4 text-left md:text-left m-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Give Blood. Save Lives</h2>
            <p className="text-lg text-gray-700 mb-6">
                Every 2 seconds, someone needs blood. You have the power to give them another heartbeat.
            </p>
        {/* You could add a call-to-action button here if needed */}
        </div>
        <div className="md:w-1/2 lg:w-7/12">
        <img
            src={photo} // Placeholder image
            alt="Person donating blood"
            className="rounded-lg  max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/34D399/ffffff?text=Image+Not+Found"; }}
          />
        </div>
    </div>
  )
}

export default loginformleft