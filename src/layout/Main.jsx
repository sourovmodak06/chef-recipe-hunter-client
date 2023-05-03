import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar></Navbar>
      <div>
        {navigation.state === "loading" && (
          <div className="h-[100vh] flex justify-center items-center ">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        )}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
