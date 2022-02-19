import React from "react";
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-gray-blue rounded-tr-bottomleft p-8">
      <div className="logo mx-auto w-fit my-20">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="mt-24 text-white-text text-2xl font-Overpass flex flex-col gap-12">
        <li>
          Product
          <ul className="text-2xl text-slate-300 grid gap-2 mt-8">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </li>
        <li>
          Company
          <ul className="text-2xl text-slate-300 grid gap-2 mt-8">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </li>
        <li>
          Connect
          <ul className="text-2xl text-slate-300 grid gap-2 mt-8">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
