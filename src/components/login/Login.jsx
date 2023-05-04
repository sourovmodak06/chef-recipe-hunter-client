import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa"; 
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {signIn,googleCreateUser,githubCreateUser} = useContext(AuthContext);

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
    .then(() => {
      toast.success("Successfully Login by Email")
      navigate(from, {replace: true})
      form.reset();
    })
    .catch(error => {
      toast.error(error.message);
    })
  }
  const handleGoogleSignIn = () => {
    googleCreateUser()
    .then(()=>{
      toast.success("Successfully Login by Google")
      navigate(from, {replace: true})
    })
    .catch(error => {
      toast.error(error.message);
    })
  }
  const handleGithubSignIn = () => {
    githubCreateUser()
    .then(()=>{
      toast.success("Successfully Login by Github")
      navigate(from, {replace: true})
    })
    .catch(error => {
      toast.error(error.message);
    })
  }
  return (
    <form onSubmit={handleLogin}>
      <ToastContainer theme="colored"/>
      <div className="md:w-[35%] md:m-auto md:my-20 my-10 mx-5 bg-[#1A1919] text-white rounded-lg pb-10 drop-shadow-xl">
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
          <div onClick={handleGoogleSignIn} className="p-2 bg-white rounded-lg cursor-pointer">
            <FaGoogle className="text-2xl text-black" />
          </div>
          <div onClick={handleGithubSignIn} className="p-2 bg-white rounded-lg cursor-pointer">
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
