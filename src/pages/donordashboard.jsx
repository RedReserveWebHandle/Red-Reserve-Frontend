import React from 'react'
import Navbar2 from '../components/navbar2.jsx'
import Footers from '../components/footers.jsx'
import Profilecard from '../components/profilecard.jsx'
import Dashboardleft from '../components/dashboardleft.jsx'



const donordashboard = () => {
  return (
    <>
    <Navbar2 />
    <div className="flex flex-row">
    <Dashboardleft />
    <Profilecard />
    </div>
    <Footers />
    </>
  )
}

export default donordashboard