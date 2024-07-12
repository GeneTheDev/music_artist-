import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a to="/" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a to="/" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a to="/" className="hover:text-gray-300">Services</a>
        </li>
        <li>
          <a to="/" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;