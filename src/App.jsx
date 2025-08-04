
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Setprofile from './pages/setprofile.jsx'
import Dashboard from './pages/dashboard.jsx'
import Hospitalsignup from './pages/hospitalsignup.jsx'
import Hospitaldashboard from './pages/hospitaldashboard.jsx'






function App() {
  

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/setprofile" element={<Setprofile />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/hospitalsignup" element={<Hospitalsignup />}/>
      <Route path="/hospitaldashboard" element={<Hospitaldashboard />}/>

    </Routes>

   </Router>
    </>
  )
}

export default App
