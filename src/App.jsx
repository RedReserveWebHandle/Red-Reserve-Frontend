
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import Login from './pages/login.jsx'
<<<<<<< HEAD
import DonorSignup from './pages/donorsignup.jsx'
import SetProfile from './pages/setprofile.jsx'
import DonorDashboard from './pages/donordashboard.jsx'
import HospitalSignup from './pages/hospitalsignup.jsx'
import HospitalDashboard from './pages/hospitaldashboard.jsx'
=======
import Signup from './pages/signup.jsx'
import Setprofile from './pages/setprofile.jsx'
import Dashboard from './pages/dashboard.jsx'
import Hospitalsignup from './pages/hospitalsignup.jsx'
import Hospitaldashboard from './pages/hospitaldashboard.jsx'
>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df






function App() {
  

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
      <Route path="/donorsignup" element={<DonorSignup />}/>
      <Route path="/setprofile" element={<SetProfile />}/>
      <Route path="/donordashboard" element={<DonorDashboard />}/>
      <Route path="/hospitalsignup" element={<HospitalSignup />}/>
      <Route path="/hospitaldashboard" element={<HospitalDashboard />}/>
=======
      <Route path="/signup" element={<Signup />}/>
      <Route path="/setprofile" element={<Setprofile />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/hospitalsignup" element={<Hospitalsignup />}/>
      <Route path="/hospitaldashboard" element={<Hospitaldashboard />}/>
>>>>>>> 251fcdfcab10e03701b5147ceb0c798657e8a2df

    </Routes>

   </Router>
    </>
  )
}

export default App
