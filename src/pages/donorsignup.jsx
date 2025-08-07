import Footers from '../components/footers.jsx'
import Navbar from '../components/navbar.jsx'
import Signupform from '../components/signupform.jsx'
import photo from '../photos/photo2.png'
import LeftSide from '../components/leftside.jsx'

const Donorsignup = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-x-50">
        <LeftSide phlink={photo} text1="Give Blood.Save Lives" text3="Every 2 seconds, someone needs blood.You have the power to give them another heartbeat." />
        <Signupform />
      </div>
      <Footers />
    </>
  )
}

export default Donorsignup