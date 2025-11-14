import React from "react";

const Navbar = () => {
  return (
    <div className="flex max-w-7xl mx-auto justify-between items-center py-8">
      <div className="logo">LOGO</div>
      <div className="">
        <ul className="flex flex-row items-center gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
