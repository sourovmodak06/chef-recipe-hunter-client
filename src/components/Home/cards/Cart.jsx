import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ info }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    toast.success("Recipe Added To The Favorite Item");
  };
  return (
    <div className="border-2 p-5 relative rounded-lg shadow-2xl">
      <h2 className="text-center text-3xl font-medium pb-4">{info.name}</h2>
      <div>
        {info.ingredients.map((ingredient) => (
          <h2>&bull; {ingredient}</h2>
        ))}
      </div>
      <h2 className="py-10 text-justify">{info.cooking_method}</h2>
      <div className="absolute bottom-2 w-[85%] md:w-[95%]">
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2">
            <FaStar className="text-[#ffbb28]" />
            {info.rating}
          </h2>
          <button onClick={handleClick} disabled={clicked}>
            {clicked ? (
              <button className="bg-[#ffbb2844] py-2 px-4 rounded-lg text-xl text-[#0000009f]">Add Favorite</button>
            ) : (
              <button className="bg-[#ffbb28] py-2 px-4 rounded-lg text-xl hover:shadow-xl">
                Add Favorite
              </button>
            )}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
