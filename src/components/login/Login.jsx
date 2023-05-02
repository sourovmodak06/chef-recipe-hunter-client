import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <form className="">
      <div className="w-[35%] m-auto my-20 bg-[#1A1919] text-white rounded-lg pb-10 drop-shadow-xl">
        <h2 className="text-center text-2xl font-semibold py-5">Login</h2>
        <div className="pl-10">
          <div>
            <p className="text-2xl pb-3">Email</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="text-black w-[90%] p-2 rounded-md"
            />
          </div>
          <div>
            <p className="text-2xl py-3">Password</p>
            <input
              type="password"
              name=""
              id=""
              placeholder="Your Password"
              className="text-black w-[90%] p-2 rounded-md"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-white text-black w-1/2 m-auto my-5 rounded-lg py-2 block text-xl font-medium"
        />
        <div className="flex justify-between items-center gap-2 px-10">
          <div className="h-[1px] bg-white w-full"></div>
          <p>Or</p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        <div className="flex justify-center items-center gap-7 pt-5">
          <div className="p-5 bg-white rounded-lg">
            <FaGoogle className="text-2xl text-black" />
          </div>
          <div className="p-5 bg-white rounded-lg">
            <FaGithub className="text-2xl text-black" />
          </div>
        </div>
        <p className="text-right pr-5 pt-8">
          Don't Have an Account?{" "}
          <Link
            to="/register"
            className="underline underline-offset-4 text-[#c5a86b]"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
