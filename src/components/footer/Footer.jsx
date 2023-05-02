import React from "react";
import logo from '/images/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="mt-auto text-[#c5a86b]">
        <div className="w-full bg-[#1A1919] md:py-5 px-6 md:px-14 pt-20">
            <div className="flex justify-between mb-5">
                <Link to='/'><img src={logo} alt="logo" className="w-72 h-20"/></Link>
                <div className="w-72">
                    <h2 className="font-bold text-2xl pb-5">Address</h2>
                    <h3>403 W. University Drive, Suite 403 Denton, TX 76201</h3>
                </div>
                <div>
                    <h2 className="font-bold text-2xl pb-5">Business Hours</h2>
                    <h3 className="text-xl font-semibold">Monday- Friday</h3>
                    <p>Lunch 11:00 am - 3:00 pm</p>
                    <p>Dinner 5:00 pm - 9:00 pm</p>
                    <br />
                    <h3 className="text-xl font-semibold">Saturday- Sunday</h3>
                    <p>11:30 am - 9:00 pm</p>
                </div>
                <div>
                    <h2 className="text-xl pb-2">(940) 381-5188</h2>
                    <h2 className="text-xl">(940) 381-2588</h2>
                </div>
            </div>
            <hr />
            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-5">
                <div>
                    <h2 className="py-5 md:py-0 font-normal">&copy;{year} Tuk Tuk Thai Kitchen. All Rights Reserved</h2>
                </div>
                <div>
                    <p className="font-normal">Powered by Tuk Tuk Thai Kitchen</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
