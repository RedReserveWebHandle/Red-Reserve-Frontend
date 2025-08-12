import Footers from '../components/footers.jsx'
import Navbar2 from '../components/navbar2.jsx'
import Hospitalform from '../components/hospitalform.jsx'
import photo from '../photos/photo4.png'
import LeftSide from '../components/leftside.jsx'

const Hospitalsignup = () => {
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

export default Hospitalsignup