import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline underline-offset-8 decoration-[#c5a86b] text-[#c5a86b] font-semibold" : ""}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;