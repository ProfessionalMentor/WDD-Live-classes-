import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex bg-black h-17 text-white pt-5 ">
       <h1 className="text-3xl font-bold -mt-2 ml-5 ">
        Sanofi
       </h1>
        <ul className="flex gap-10 pl-20 ">
          <li className = "font-bold" >
            <Link to="/">Home</Link>
          </li>
          <li className = "font-bold" >
            <Link to="/ourcompany">Our Company</Link>
          </li>
          <li className = "font-bold" >
            <Link to="/ourscience">Our Science </Link>
          </li>
          <li className = "font-bold" >
            <Link to="/yourhealth">Your Health</Link>
          </li>
          <div className="flex gap-10 absolute right-20" >
            <li className = "font-bold" >
            <Link to="/partnering">Partnering </Link>
          </li>
          <li className = "font-bold"  >
            <Link to="/investor"> Investor</Link>
          </li>
          <li  className = "font-bold" >
            <Link to="/media"> Media </Link>
          </li>
          <li  className = "font-bold">
            <Link to="/career"> Career </Link>
          </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
