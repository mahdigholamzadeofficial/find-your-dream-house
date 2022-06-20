import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
//////////////////////////////Components
import Navbar from './components/Navbar/navbar';
import Investing from './components/Investing/investing';
import Pricing from './components/Pricing/pricing';
import Team from './components/Team/team';
import Features from './components/Features/Features';
import Countries from './components/Countries/countries';
import Footer from './components/Footer/footer';
import Landing from './components/Landing/landing';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';

 const App =()=> {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/investing" element={<Investing/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/countries" element={<Countries/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Navigate to="/landing"/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
export default App;