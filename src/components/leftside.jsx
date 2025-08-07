import React from 'react'

const leftside = ({phlink,text1,text2="",text3=""}) => {
  return (
    <>
    <div className="flex flex-col">
            <div className=" py-8 px-36 flex flex-col justify-center rounded-r-3xl relative overflow-hidden text-left">
            <h1 className="text-4xl font-bold leading-tight">
                {text1}
                <br/>
                {text2}
            </h1>
            <p className="text-lg text-gray-700">
                {text3}
            </p></div>
            
                {/* Replace with a real path to your image */}
            <div className="px-36">
                    <img
                        src={phlink} // Placeholder image
                        alt="Person donating blood"
                        className="rounded-lg  w-142 h-auto"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/34D399/ffffff?text=Image+Not+Found"; }}
                        />
            </div>
         </div>
    </>
  )
}

export default leftside