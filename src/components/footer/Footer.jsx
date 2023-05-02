import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
        <div className="w-full bg-[#1A1919] md:py-5 px-6 md:px-14 mt-20">
            <hr />
            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-12">
                <div>
                    <h2 className="text-[#ffffff73] py-5 md:py-0 font-normal">&copy;{year} Tuk Tuk Thai Kitchen. All Rights Reserved</h2>
                </div>
                <div>
                    <p className="text-[#ffffff73] font-normal">Powered by Tuk Tuk Thai Kitchen</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
