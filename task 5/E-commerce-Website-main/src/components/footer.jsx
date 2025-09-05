import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col  justify-between items-center">

        <div className="mb-4  text-center">
          <h2 className="text-xl font-semibold text-white">MyStore</h2>
          <p className="text-sm">© 2025 MyStore. All rights reserved.</p>
        </div>

        <div >
          <ul className="list-none flex space-x-6  gap-1 m-2">
            <li className="hover:cursor-pointer hover:underline">About</li>
            <li className="hover:cursor-pointer hover:underline">Contact</li>
            <li className="hover:cursor-pointer hover:underline">Privacy Policy</li>
          </ul>
        </div>
        <div>
        <ul className="list-none flex space-x-6  gap-1 m-2">
            <li className="hover:cursor-pointer hover:underline">Facebook</li>
            <li className="hover:cursor-pointer hover:underline">Instagram</li>
            <li className="hover:cursor-pointer hover:underline">X</li>
          </ul>
      </div>    
        </div>
    </footer>
  );
};

export default Footer;
