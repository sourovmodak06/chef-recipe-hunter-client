import React from "react";
import { FaHeart } from "react-icons/fa";

const ChefInfo = () => {
  const chefs = [
    {
      id: 1,
      chef_picture:
        "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      chef_name: "Somchai Supasorn",
      years_of_experience: 5,
      number_of_recipes: 50,
      likes: 100,
    },
    {
      id: 2,
      chef_picture:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      chef_name: "Nongkran Daks",
      years_of_experience: 7,
      number_of_recipes: 75,
      likes: 200,
    },
    {
      id: 3,
      chef_picture:
        "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      chef_name: "Saran Sirilak",
      years_of_experience: 15,
      number_of_recipes: 120,
      likes: 300,
    },
    {
      id: 4,
      chef_picture:
        "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      chef_name: "Saran Daks",
      years_of_experience: 10,
      number_of_recipes: 90,
      likes: 150,
    },
    {
      id: 5,
      chef_picture:
        "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      chef_name: "Pim Techawuan",
      years_of_experience: 3,
      number_of_recipes: 30,
      likes: 50,
    },
    {
      id: 6,
      chef_picture:
        "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80",
      chef_name: "Pim Saran",
      years_of_experience: 5,
      number_of_recipes: 30,
      likes: 500,
    },
  ];

  return (
    <div className="px-10 grid grid-cols-3 gap-4 pb-10">
      {chefs.map((chef) => (
        <div className="card w-96 bg-base-100 shadow-xl">
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
