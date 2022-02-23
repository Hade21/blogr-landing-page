import React from "react";

const SubMenu = (submenu) => {
  return (
    <>
      <li className="hover:font-bold hover:relative hover:left-0.5 hover:text-slate-900">
        <a href="#" className="text-xl md:text-sm">
          {submenu.list}
        </a>
      </li>
    </>
  );
};

export default SubMenu;
