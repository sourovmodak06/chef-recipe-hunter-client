import React from "react";
import { FaHeart } from "react-icons/fa";

const LazyLoader = () => {
  return (
    <div className="md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
      <div className="animate-pulse flex space-x-4">
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="bg-slate-700 h-80 w-full rounded-tl-xl rounded-tr-xl"></div>
          <div className="card-body">
            <div className=" w-40 h-4 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className=" w-60 h-3 bg-slate-700 rounded"></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <FaHeart className="text-slate-700 text-2xl" />
                  <p className="h-8 w-3 rounded-xl bg-slate-700"></p>
                </div>
                <div className=" w-20 h-10 bg-slate-700 rounded"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyLoader;
