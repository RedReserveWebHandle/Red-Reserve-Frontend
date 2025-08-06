<<<<<<< HEAD
import React from 'react'
import Footers from '../components/footers.jsx'
import Navbar2 from '../components/navbar2.jsx'
import Hospitalform from '../components/hospitalform.jsx'
import photo from '../photos/photo4.png'
import LeftSide from '../components/leftside.jsx'

const hospitalsignup = () => {
  return (
    <>
    <Navbar2 />
    <div className="flex flex-row">
        <LeftSide phlink={photo} text1="Join the biggest Donation Camp" text2="Save Lives" />
        <Hospitalform />
    </div>
    <Footers />
    </>
  )
}

=======
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

>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df
export default hospitalsignup