import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa"; 
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="w-[35%] m-auto my-20 bg-[#1A1919] text-white rounded-lg pb-10 drop-shadow-xl">
        <h2 className="text-center text-2xl font-semibold py-5">Login</h2>
        <div className="pl-10">
          <div>
            <p className="text-2xl pb-3">Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="text-black w-[90%] p-2 rounded-md"
            />
          </div>
          <div>
            <p className="text-2xl py-3">Password</p>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your Password"
                required
                className="text-black w-[90%] p-2 rounded-md pr-10"
              />
              <p onClick={handleShow} className="absolute top-3 right-10   md:right-12 lg:right-16">
                {
                  show? <FaEyeSlash className="text-black"/> : <FaEye className="text-black" />
                }
              </p>
            </div>
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
          <div className="p-2 bg-white rounded-lg">
            <FaGoogle className="text-2xl text-black" />
          </div>
          <div className="p-2 bg-white rounded-lg">
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
