import React from 'react'
import Navbar2 from '../components/navbar2.jsx'
import Footers from '../components/footers.jsx'
import Profilecard from '../components/profilecard.jsx'
import Dashboardleft from '../components/dashboardleft.jsx'
import Map from '../components/map.jsx'



const donordashboard = () => {
  return (
    <>
    <Navbar2 />
    <div className="flex flex-row">
    <Dashboardleft />
    <Profilecard />
    </div>
    <br />
    <br />
    <Map />
    <Footers />
    </>
  )
}

export default donordashboard