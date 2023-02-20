import React from "react";
import { NavLink } from "react-router-dom";
function DashboardUL({ img, title, path, element }) {
  return (
    <NavLink   className={`link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}
    to={path} >
      <img src={img} alt="img" />
     {title}
    </NavLink>
  );
}

export default DashboardUL;
