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

export default login