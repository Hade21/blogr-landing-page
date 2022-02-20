import React from "react";
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-gray-blue rounded-tr-bottomleft p-8 md:flex md:px-24 md:justify-center md:gap-72">
      <div className="logo mx-auto w-fit my-20 md:mx-0">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="mt-24 text-white-text text-2xl md:text-xl font-Overpass flex flex-col gap-12 md:flex-row md:mr-28 md:gap-28">
        <li>
          Product
          <ul className="text-2xl md:text-lg text-slate-300 grid gap-2 mt-8">
            <li className="hover:underline active:underline cursor-pointer">Overview</li>
            <li className="hover:underline active:underline cursor-pointer">Pricing</li>
            <li className="hover:underline active:underline cursor-pointer">Marketplace</li>
            <li className="hover:underline active:underline cursor-pointer">Features</li>
            <li className="hover:underline active:underline cursor-pointer">Integrations</li>
          </ul>
        </li>
        <li>
          Company
          <ul className="text-2xl md:text-lg text-slate-300 grid gap-2 mt-8">
            <li className="hover:underline active:underline cursor-pointer">About</li>
            <li className="hover:underline active:underline cursor-pointer">Team</li>
            <li className="hover:underline active:underline cursor-pointer">Blog</li>
            <li className="hover:underline active:underline cursor-pointer">Careers</li>
          </ul>
        </li>
        <li>
          Connect
          <ul className="text-2xl md:text-lg text-slate-300 grid gap-2 mt-8">
            <li className="hover:underline active:underline cursor-pointer">Contact</li>
            <li className="hover:underline active:underline cursor-pointer">Newsletter</li>
            <li className="hover:underline active:underline cursor-pointer">LinkedIn</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
