import React from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefInfo = () => {
  const chefs = useLoaderData()
    

  return (
    <div className="px-10 grid grid-cols-3 gap-4 pb-10">
      {chefs.map((chef) => (
        <div key={chef.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={chef.chef_picture}
              alt="Chef Picture"
              className="h-80 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{chef.chef_name}</h2>
            <p>Years of experience: {chef.years_of_experience} </p>
            <p>Numbers of recipes: {chef.number_of_recipes} </p>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-1">
                <FaHeart className="text-red-700 text-2xl" />
                <p className="font-semibold">{chef.likes}K</p>
              </div>
              <div className="card-actions">
                <button className="btn bg-[#c5a86b] border-0">View Recipes</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefInfo;
