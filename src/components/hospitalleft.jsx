import React from 'react'
import photo from '../photos/photo4.png'

const hospitalleft = () => {
  return (
    <>
        <div className="flex flex-col">
            <div className=" py-8 px-36 flex flex-col justify-center rounded-r-3xl relative overflow-hidden text-left">
            <h1 className="text-4xl font-bold leading-tight">
                Join the biggest <br />Donation Camp. <br /> Save Lives.
            </h1></div>
            
                {/* Replace with a real path to your image */}
            <div className="px-36">
                    <img
                        src={photo} // Placeholder image
                        alt="Person donating blood"
                        className="rounded-lg  w-142 h-auto"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/34D399/ffffff?text=Image+Not+Found"; }}
                        />
            </div>
         </div>
        </>
  )
}

export default hospitalleft