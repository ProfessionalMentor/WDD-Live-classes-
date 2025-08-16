import react from "react"
import {Link, BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Project from "./Project"


 const Navbar = () => {
  return (
    <div>
     <Router>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li> <Link to = "/about">About</Link></li>
            <li> <Link to = "/contact">Contact</Link></li>
            <li> <Link to = "/services">Services</Link></li>
            <li> <Link to = "/project">Project</Link></li>
        </ul>
            
            
        
        
        <Routes>
              <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/services" element={<Services />} />
             <Route path="/project" element={<Project />} />
          </Routes>
         
     </Router>
    </div>
  )
}

export {Navbar}