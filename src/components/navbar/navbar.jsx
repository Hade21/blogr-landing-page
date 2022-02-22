import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Menu from "../../images/icon-hamburger.svg";
import Close from "../../images/icon-close.svg";
import { navlist } from "./navlist";

const hasWindow = typeof window !== "undefined";

function getDimension() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}

const Navbar = () => {
  const [state, setState] = useState(false);
  const [width, setWidth] = useState(getDimension());
  const [collapse, setCollapse] = useState(false);

  const dropdown = document.querySelectorAll(".menu");
  dropdown.forEach((e) => {
    e.addEventListener("click", function () {
      console.log(e.classList.add("hello"));
    });
  });

  useEffect(() => {
    if (hasWindow) {
      function handleRezise() {
        setWidth(getDimension());
      }
      window.addEventListener("resize", handleRezise());
      return () => window.removeEventListener("resize", handleRezise);
    }
  }, [hasWindow]);

  const handleClick = () => {
    setState(!state);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <nav className="absolute top-0 z-10 w-full flex justify-between px-6 py-12 items-center md:px-16 md:grid-cols-6 md:grid">
      <div className="left md:col-start-1 col-span-1">
        <Logo></Logo>
      </div>
      <div className="right md:col-start-2 md:col-span-5">
        <div className="icon" onClick={handleClick}>
          <img
            src={state ? Close : Menu}
            alt=""
            className="md:hidden cursor-pointer"
          />
        </div>
        <div
          className={
            width < 480
              ? state
                ? "fixed top-28 left-[10%] w-4/5 flex justify-center flex-col bg-white-text items-center rounded-xl"
                : "hidden"
              : "flex justify-between items-center"
          }
        >
          <div className="w-5/6">
            <ul
              className={
                width < 480
                  ? "font-Overpass flex flex-col first:pt-8 last:pb-6 last:border-b-2 last:border-b-footer-text text-very-dark-gray-blue text-2xl font-semibold gap-4 w-full"
                  : "flex text-white-text text-lg gap-4 font-Overpass cursor-pointer"
              }
            >
              {navlist.map((item, index) => {
                return (
                  <li
                    className={
                      width < 480
                        ? `menu ${index}`
                        : `menu ${index} ${item.menu.class}`
                    }
                    onClick={handleCollapse}
                  >
                    {item.menu.title}
                    <ul
                      className={
                        collapse
                          ? width < 480
                            ? "grid font-normal bg-slate-200 gap-2 text-xl first:pt-2 last:pb-2 rounded-xl text-slate-500"
                            : "font-Ubuntu text-very-dark-desaturated-blue bg-white rounded flex-col gap-4 py-6 px-4 text-sm text-left shadow-menu absolute top-6 w-28 flex"
                          : "hidden"
                      }
                    >
                      {item.items.title.map((i) => {
                        return (
                          <li className="w-fit mx-auto hover:font-bold hover:relative hover:left-0.5 hover:text-slate-900">
                            <a href="#">{i}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={width < 480 ? "grid gap-4 py-4 mb-4" : "flex"}>
            <button
              className={
                width < 480
                  ? "w-fit mx-auto hover:text-slate-500 text-very-dark-gray-blue text-2xl font-Overpass font-semibold"
                  : "text-sm font-bold font-Ubuntu text-slate-200 px-4 hover:text-white-text"
              }
            >
              Login
            </button>
            <button
              className={
                width < 480
                  ? "text-white-text text-2xl bg-CTA-hover-background rounded-full px-12 font-semibold py-3 hover:border-CTA-hover-background hover:border-2 hover:bg-white-text hover:text-CTA-text"
                  : "text-sm font-bold font-Ubuntu text-light-red px-8 py-2 bg-white-text rounded-full hover:text-white-text hover:bg-CTA-hover-background"
              }
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
