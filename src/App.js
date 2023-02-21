import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Portfolio from "./pages/Portfolio"
import Repos from "./pages/Repos"

// Components 
import SidebarMenu from "./components/SidebarMenu";

function App() {
  return (
    <div>
      <SidebarMenu />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/repos" element={<Repos />}/>
      </Routes>
    </div>
  );
}

export default App;
