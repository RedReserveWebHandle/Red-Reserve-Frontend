import Navbar2 from '../components/navbar2.jsx'
import Footers from '../components/footers.jsx'
import photo from '../photos/photo3.png'
import Profileform from '../components/profileform.jsx'
import LeftSide from '../components/leftside.jsx'

const Setprofile = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex flex-row">
        <LeftSide phlink={photo} text1="Building a Better Tomorrow." text2="One Drop at a time" />
        <Profileform />
      </div>
      <Footers />
    </>
  )
}

export default Setprofile