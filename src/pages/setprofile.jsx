<<<<<<< HEAD
import React from 'react'
import Navbar2 from '../components/navbar2.jsx'
import Footers from '../components/footers.jsx'
import photo from '../photos/photo3.png'
import Profileform from '../components/profileform.jsx'
import LeftSide from '../components/leftside.jsx'

const setprofile = () => {
  return (
    
    <>
    <Navbar2 />
    <div className="flex flex-row">
        <LeftSide phlink={photo} text1="Building a Better Tomorrow." text2="One Drop at a time"/>
        <Profileform />
    </div>
    <Footers />
    </>
  )
}

=======
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

>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df
export default setprofile