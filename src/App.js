import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login"
import Portfolio from "./pages/Portfolio/Portfolio"
import Services from "./pages/Services/Services"

// Components 
import SidebarMenu from "./components/SidebarMenu";
import FooterMenu from "./components/Footer"

function App() {
  
  return (
    <div>

      <SidebarMenu />
      <ToastContainer />

      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
      </div>


      <FooterMenu />

      
    </div>
  );
}

export default App;
