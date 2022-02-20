import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import Menu from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-10 w-full flex justify-between px-6 py-12 items-center md:px-16 md:grid-cols-6 md:grid">
      <div className="left md:col-start-1 col-span-1    ">
        <Logo></Logo>
      </div>
      <div className="right md:col-start-2 md:col-span-5">
        <img src={Menu} alt="" className="md:hidden" />
        <div className="navmenu hidden md:flex md:justify-between md:items-center ">
          <div className="menu">
            <ul className="flex text-white-text text-sm gap-4 font-Overpass cursor-pointer">
              <li className="hover:underline relative group">
                Product
                <ul className="font-Overpass text-very-dark-desaturated-blue md:bg-white rounded-md flex-col gap-2 py-6 px-4 md:text-xs md:text-left shadow-menu hidden absolute top-8 group-hover:flex">
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              </li>
              <li className="hover:underline relative group">
                Company
                <ul className="font-Overpass text-very-dark-desaturated-blue md:bg-white rounded-md flex-col gap-2 py-6 px-4 md:text-xs md:text-left shadow-menu hidden absolute top-8 group-hover:flex">
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </li>
              <li className="hover:underline relative group">
                Connect
                <ul className="font-Overpass text-very-dark-desaturated-blue md:bg-white rounded-md flex-col gap-2 py-6 px-4 md:text-xs md:text-left shadow-menu hidden absolute top-8 group-hover:flex">
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="signin">
            <button className="text-sm font-bold font-Ubuntu text-slate-200 px-4 hover:text-white-text">Login</button>
            <button className="text-sm font-bold font-Ubuntu text-light-red px-8 py-2 bg-white-text rounded-full hover:text-white-text hover:bg-CTA-hover-background">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
