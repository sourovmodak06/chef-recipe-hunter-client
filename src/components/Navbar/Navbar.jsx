import React, { useContext } from "react";
import logo from "/images/logo.png";
import ActiveLink from "../ActiveLink";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
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
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="logo" className="w-48 hidden md:block" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              data-tip={user?.displayName}
              className="relative before:content-[attr(data-tip)] 
              before:absolute before:-bottom-3 before:-left-14 before:p-2 
              before:translate-x-1/2 before:translate-y-full before:bg-gray-700
               before:text-white before:rounded-md 
               before:opacity-0 before:transition-all before:z-20
            
            after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0
            after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:opacity-0 after:transition-all after:z-20

            hover:before:opacity-100 hover:after:opacity-100
            "
            >
              <img
                src={user?.photoURL}
                alt="UserImg"
                className="w-14 h-14 rounded-full mr-3 cursor-pointer"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-[#c5a86b] border-0"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn bg-[#c5a86b] border-0">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
