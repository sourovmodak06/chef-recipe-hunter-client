import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const ChefView = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <div className="relative">
        <img
          src={chefData.banner_picture}
          alt="banner"
          className="w-full md:h-72"
        />
        <img
          src={chefData.chef_picture}
          alt="chef"
          className="w-20 md:w-40 h-20 md:h-40 rounded-full absolute bottom-2 left-10 border-4"
        />
      </div>

      <div className="px-8 md:px-16">
        <h2 className="text-2xl md:text-4xl font-semibold py-2">
          {chefData.chef_name}
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold md:text-xl">
              Years Of Experience {chefData.years_of_experience}
            </h4>
            <h4 className="font-semibold md:text-xl">
              Number Of Recipes {chefData.number_of_recipes}
            </h4>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-700 text-2xl" />
            <p className="font-semibold">{chefData.likes}K</p>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {
            chefData.recipe_info.map(info => <Cart
              info={info}
            ></Cart>)
          }
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-5 md:px-16 py-10 gap-5 md:gap-10">
        <div className="md:w-3/4">
          <img
            src={chefData.banner_picture}
            alt="food img"
            className="md:h-2/3 w-full rounded-xl"
          />
          <h2 className="font-medium md:text-2xl text-justify py-5">
            {chefData.chef_bio}
          </h2>
          <Link
            to="/"
            className="bg-[#c5a86b] py-2 px-4 font-medium rounded-lg text-xl"
          >
            &lt; Back to Home
          </Link>
        </div>
        <div>
          {chefData.recipe_names.map((recipe) => (
            <h2
              key={chefData.key}
              className="font-medium text-right md:text-left"
            >
              &bull; {recipe}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefView;
