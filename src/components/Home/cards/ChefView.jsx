import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ChefView = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <div className="relative">
        <img
          src={chefData.banner_picture}
          alt="banner"
          className="w-full h-72"
        />
        <img
          src={chefData.chef_picture}
          alt="chef"
          className="w-40 h-40 rounded-full absolute bottom-2 left-10 border-4"
        />
      </div>

      <div className="px-16">
        <h2 className="text-4xl font-semibold py-2">{chefData.chef_name}</h2>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-xl">
              Years Of Experience {chefData.years_of_experience}
            </h4>
            <h4 className="font-semibold text-xl">
              Number Of Recipes {chefData.number_of_recipes}
            </h4>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-700 text-2xl" />
            <p className="font-semibold">{chefData.likes}K</p>
          </div>
        </div>
      </div>
      <div className="flex px-16 py-10 gap-10">
        <div className="w-3/4">
          <img
            src={chefData.banner_picture}
            alt="food img"
            className="h-2/3 w-full rounded-xl"
          />
          <h2 className="font-medium text-2xl text-justify py-5">
            {chefData.chef_bio}
          </h2>
        <Link to='/' className="bg-[#c5a86b] py-2 px-4 font-medium rounded-lg text-xl">&lt; Back to Home</Link>
        </div>
        <div>
          {chefData.recipe_names.map((recipe) => (
            <h2 key={chefData.key} className="font-medium">
              &bull; {recipe}
            </h2>
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ChefView;
