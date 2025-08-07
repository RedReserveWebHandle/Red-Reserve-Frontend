import React from 'react'
import Footers from '../components/footers.jsx'
import Navbar2 from '../components/navbar2.jsx'
import Hospitalleft from '../components/hospitalleft.jsx'
import Hospitalform from '../components/hospitalform.jsx'

const hospitalsignup = () => {
  return (
    <>
    <Navbar2 />
    <div className="flex flex-row">
        <Hospitalleft />
        <Hospitalform />
    </div>
    <Footers />
    </>
  )
}

export default hospitalsignup