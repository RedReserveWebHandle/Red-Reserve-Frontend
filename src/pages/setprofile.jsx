import React from 'react'
import Navbar2 from '../components/navbar2'
import Footers from '../components/footers.jsx'
import Setprofileleft from '../components/setprofileleft.jsx'
import Profileform from '../components/profileform.jsx'

const setprofile = () => {
  return (
    
    <>
    <Navbar2 />
    <div className="flex flex-row">
        <Setprofileleft />
        <Profileform />
    </div>
    <Footers />
    </>
  )
}

export default setprofile