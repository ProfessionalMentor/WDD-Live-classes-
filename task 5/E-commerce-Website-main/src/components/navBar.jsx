import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-500 font-bold'>
      <h2 className='m-4 text-white'>Logo</h2>
      <nav className='m-4'>
        <ul className='list-none flex space-x-8 text-white '>
          <li className='m-2 '>
            <Link to="/">Home</Link></li>
          <li  className='m-2'>
            <Link to="/products">All Products</Link></li>
          <li  className='m-2'>
            <Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
