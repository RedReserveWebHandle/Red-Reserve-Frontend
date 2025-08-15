import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import Login from './pages/login.jsx'
import DonorSignup from './pages/donorsignup.jsx'
import SetProfile from './pages/setprofile.jsx'
import DonorDashboard from './pages/donordashboard.jsx'
import HospitalSignup from './pages/hospitalsignup.jsx'
import HospitalDashboard from './pages/hospitaldashboard.jsx'
import More from './pages/More.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donorsignup" element={<DonorSignup />} />
          <Route path="/setprofile" element={<SetProfile />} />
          <Route path="/donordashboard" element={<DonorDashboard />} />
          <Route path="/hospitalsignup" element={<HospitalSignup />} />
          <Route path="/hospitaldashboard" element={<HospitalDashboard />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
