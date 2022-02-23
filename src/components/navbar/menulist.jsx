import React, { useState, useEffect } from "react";
import SubMenu from "./submenu";

const hasWindow = typeof window !== "undefined";

function getDimension() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}

const MenuList = (item) => {
  const [width, setWidth] = useState(getDimension());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (hasWindow) {
      function handleRezise() {
        setWidth(getDimension());
      }
      window.addEventListener("resize", handleRezise());
      return () => window.removeEventListener("resize", handleRezise);
    }
  }, [hasWindow]);

  return (
    <li className="relative">
      <a href="#" onClick={handleClick}>
        {item.items.title}
      </a>
      <ul
        className={
          isOpen
            ? width < 480
              ? "bg-slate-200 rounded-lg py-4 text-very-dark-gray-blue transition-all"
              : "bg-white-text rounded-lg text-very-dark-gray-blue px-4 py-4 absolute top-6 shadow-menu w-28 flex flex-col items-start transition-all"
            : "hidden"
        }
      >
        {item.items.submenu.map((list) => {
          return <SubMenu list={list} />;
        })}
      </ul>
    </li>
  );
};

export default MenuList;
