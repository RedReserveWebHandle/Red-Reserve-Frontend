import React from 'react'
import Footers from '../components/footers'
import Navbar from '../components/navbar'
import Signupform from '../components/signupform'
import Loginformleft from '../components/loginformleft'


const signup = () => {
  return (
    <>
    
    <Navbar />
    <div className="flex flex-row gap-x-50">
    <Loginformleft />
    <Signupform />
    </div>
    <Footers />
    </>
  )
}

export default signup