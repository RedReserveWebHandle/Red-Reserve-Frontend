<<<<<<< HEAD
import React from 'react'
import Footers from '../components/footers'
import Navbar from '../components/navbar'
import Loginform from '../components/loginform'
import LeftSide from '../components/leftside.jsx'
import photo from '../photos/photo2.png'




const login = () => {
  return (
    <>
    
    <Navbar />
    <div className="flex flex-row gap-x-50">
    <LeftSide phlink={photo} text1="Give Blood.Save Lives" text3="Every 2 seconds, someone needs blood.You have the power to give them another heartbeat."/>
    <Loginform />
    </div>
    <Footers />
    </>
  )
}

=======
import React from 'react'
import Footers from '../components/footers'
import Navbar from '../components/navbar'
import Loginform from '../components/loginform'
import Loginformleft from '../components/loginformleft'



const login = () => {
  return (
    <>
    
    <Navbar />
    <div className="flex flex-row gap-x-50">
    <Loginformleft />
    <Loginform />
    </div>
    <Footers />
    </>
  )
}

>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df
export default login