import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser,profileUpdate } = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;
    
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (!regExp.test(password)) {
      toast.error("Minimum six characters, at least one letter and one number")
      return;
    }

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      profileUpdate(name,url)
      .then()
      .catch(error => {
        toast.error(error.message);
      })
      toast.success("Successfully Register")
      form.reset();
    })
    .catch(error => {
      toast.error(error.message);
    })

  }
  
  
  return (
    <form onSubmit={handleRegister}>
      <ToastContainer theme="colored"/>
      <div className="w-[35%] m-auto my-20 bg-[#1A1919] text-white rounded-lg pb-10 drop-shadow-xl">
        <h2 className="text-center text-2xl font-semibold py-5">Register</h2>
        <div className="pl-10">
          <div>
            <p className="text-2xl py-3">Name</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="text-black w-[90%] p-2 rounded-md"
            />
          </div>
          <div>
            <p className="text-2xl py-3">Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
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
          <div>
            <p className="text-2xl py-3">Photo URL</p>
            <input
              type="url"
              name="url"
              id="url"
              required
              placeholder="Your Photo URL"
              className="text-black w-[90%] p-2 rounded-md"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Register"
          className="bg-white text-black w-1/2 m-auto my-5 rounded-lg py-2 block text-xl font-medium"
        />
        <div className="flex justify-between items-center gap-2 px-10">
          <div className="h-[1px] bg-white w-full"></div>
          <p>Or</p>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        
        <p className="text-right pr-5 pt-5">
          Already have an account? 
          <Link
            to="/login"
            className="underline underline-offset-4 text-[#c5a86b]"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
