import React from "react";
import Navbar from "./navbar";
import pattern from "../images/bg-pattern-intro-mobile.svg";

const Header = () => {
    return (
        <header className="container">
            <Navbar  />
            <div className="rounded-bl-bottomleft relative pt-52 pb-24 bg-pattern-intro-mobile bg-[right_30rem_top_13rem] bg-cover bg-light-red md:bg-pattern-intro-desktop md:bg-auto md:bg-[left_170rem_top_115rem] md:bg-repeat w-screen m-0">
                <h1 className="font-Overpass text-4xl font-bold text-white-text px-6 md:text-5xl">A modern publishing platform</h1>
                <p className="font-Ubuntu text-xl text-slate-200 px-8 py-6">Grow your audience and build your online brand</p>
                <div className="buttons p-4 flex justify-center gap-8 mb-10">
                    <button className="text-CTA-text bg-white-text p-2 w-36 rounded-full text-xl font-bold font-Overpass md:px-6 md:w-fit md:text-lg">Start for Free</button>
                    <button className="font-Overpass text-white text-xl p-2 w-36 border-2 rounded-full font-bold md:w-fit md:px-6 md:text-lg">Learn More</button>
                </div>
            </div>
        </header>
    )
}

export default Header;