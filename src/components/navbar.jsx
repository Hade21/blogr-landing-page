import React from "react";
import {ReactComponent as Logo} from "../images/logo.svg";
import Menu from "../images/icon-hamburger.svg";

const Navbar = () => {
    return (
        <nav className="absolute top-0 z-10 w-full flex justify-between px-6 py-12 items-center md:px-16">
            <div className="left">
                <Logo></Logo>
            </div>
            <div className="right">
                <img src={Menu} alt="" className="md:hidden" />
            </div>
        </nav>
    )
}

export default Navbar;