import React from "react";
import logo from "/images/logo.png";
import ActiveLink from "../ActiveLink";

const Navbar = () => {
  return (
    <div className="navbar md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
            <ActiveLink to='/blog'>Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="logo" className="w-48" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
          <ActiveLink to='/blog'>Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#c5a86b] border-0">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
