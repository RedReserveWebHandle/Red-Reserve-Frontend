import Navbar2 from '../components/navbar2.jsx'
import Footers from '../components/footers.jsx'
import Profilecard from '../components/profilecard.jsx'
import Dashboardleft from '../components/dashboardleft.jsx'
import Map from '../components/map.jsx'



const Donordashboard = () => {
  return (
    <>
    <Navbar2 />
    <div className="flex flex-row">
    <Dashboardleft />
    <Profilecard />
    </div>
    <Map />
    <Footers />
    </>
  )
}

export default Donordashboard
