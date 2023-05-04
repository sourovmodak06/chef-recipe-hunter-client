import React from "react";
import { FaHeart } from "react-icons/fa";

const ChefView = () => {
  const chefData = [
    {
      id: "1",
      banner_picture:
        "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      chef_picture:
        "https://i.ibb.co/LNp2bHL/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg",
      chef_name: "Somchai Supasorn",
      years_of_experience: 5,
      number_of_recipes: 50,
      likes: 100,
      chef_bio:
        "Somchai Supasorn is a talented chef with five years of experience in the culinary world. He has created 50 unique and delicious recipes that have gained him a following of over 100 fans. Somchai is passionate about using fresh, locally sourced ingredients to create meals that are both healthy and tasty.",
      recipe_names: [
        "Tom Yum Goong",
        "Pad Thai",
        "Massaman Curry",
        "Green Curry ",
        "Panang Curry ",
        "Som Tam",
        "Laab Moo",
        "Khao Soi",
        "Gaeng Daeng",
        "Pad Kra Pao",
        "Pla Rad Prik",
        "Tom Kha Gai",
        "Pad See Ew",
        "Tom Jeud Woon Sen",
        "Gai Pad Med Mamuang",
        "Yam Nua",
        "Kaeng Kari",
        "Pak Boong Fai Daeng",
        "Khao Pad",
        "Pla Neung Manao",
        "Tom Kha Hed",
        "Pad Prik Khing",
        "Khao Man Gai",
        "Gaeng Keow Wan",
        "Phat Si-io",
        "Gaeng Som",
        "Gai Yang",
        "Kaeng Kiew Wan ",
        "Tom Yam Gung",
      ],
    },
    // },
    // {
    //   "id": "2",
    //   "chef_picture": "https://i.ibb.co/xfZM8Xq/rc-cf-FMh5o5m5-N9-E-unsplash.jpg",
    //   "chef_name": "Nongkran Daks",
    //   "years_of_experience": 7,
    //   "number_of_recipes": 75,
    //   "likes": 200,
    //   "chef_bio": "Nongkran Daks is a highly skilled chef with 10 years of experience in the food industry. She has created over 120 recipes that have been enjoyed by a loyal fanbase of 500 people. Nongkran is known for her creative use of spices and flavors to create unique dishes."
    // },
    // {
    //   "id": "3",
    //   "chef_picture": "https://i.ibb.co/wBbm4xj/jeff-siepman-z-Ixd-GQ7l-PU-unsplash.jpg",
    //   "chef_name": "Saran Sirilak",
    //   "years_of_experience": 15,
    //   "number_of_recipes": 120,
    //   "likes": 300,
    //   "chef_bio": "Saran Sirilak is a passionate chef with 8 years of experience in the culinary world. He has created 80 recipes that have been enjoyed by a growing community of 250 followers. Saran is known for his love of fusion cuisine, blending different culinary traditions to create exciting new flavors."
    // },
    // {
    //   "id": "4",
    //   "chef_picture": "https://i.ibb.co/Gxj3RBW/redcharlie-redcharlie1-t-7-KEq9-M0b0-unsplash.jpg",
    //   "chef_name": "Saran Daks",
    //   "years_of_experience": 10,
    //   "number_of_recipes": 90,
    //   "likes": 150,
    //   "chef_bio": "Saran Daks is a masterful chef with 15 years of experience in the food industry. She has created over 200 recipes that have been enjoyed by a dedicated following of 1000 fans. Saran is known for her use of fresh, seasonal ingredients to create dishes that are both healthy and delicious."
    // },
    // {
    //   "id": "5",
    //   "chef_picture": "https://i.ibb.co/X4jSLsv/bluebird-provisions-l-RAWc-T7uwh-Y-unsplash.jpg",
    //   "chef_name": "Pim Techawuan",
    //   "years_of_experience": 3,
    //   "number_of_recipes": 30,
    //   "likes": 50,
    //   "chef_bio": "Pim Techawuan is a world-renowned chef with 20 years of experience in the culinary arts. He has created over 300 recipes that have been enjoyed by a global following of 2000 fans. Pim is known for his innovative use of ingredients and techniques to create dishes that are truly unique."
    // },
    // {
    //   "id": "6",
    //   "chef_picture": "https://i.ibb.co/CwhPL62/mohamed-nohassi-Ddgl-Eo-IC2y4-unsplash.jpg",
    //   "chef_name": "Pim Saran",
    //   "years_of_experience": 5,
    //   "number_of_recipes": 30,
    //   "likes": 500,
    //   "chef_bio": "Pim Saran is a rising star in the culinary world with 3 years of experience. She has created 30 recipes that have been enjoyed by an enthusiastic following of 80 fans. Pim  is passionate about using traditional techniques and ingredients to create dishes that celebrate her cultural heritage."
    // }
  ];

  return (
    <div>
      {chefData.map((chef) => (
        <div key={chef.id}>
          <div className="relative">
            <img
              src={chef.banner_picture}
              alt="banner"
              className="w-full h-72"
            />
            <img
              src={chef.chef_picture}
              alt="chef"
              className="w-40 h-40 rounded-full absolute bottom-2 left-10 border-4"
            />
          </div>
          <div className="px-16">
            <h2 className="text-4xl font-semibold py-2">{chef.chef_name}</h2>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-xl">
                  Years Of Experience {chef.years_of_experience}
                </h4>
                <h4 className="font-semibold text-xl">
                  Number Of Recipes {chef.number_of_recipes}
                </h4>
              </div>
              <div className="flex items-center gap-1">
                <FaHeart className="text-red-700 text-2xl" />
                <p className="font-semibold">{chef.likes}K</p>
              </div>
            </div>
          </div>
          <div className="flex px-16 py-10 gap-10">
            <div className="w-3/4">
              <img src={chef.banner_picture} alt="food img" className="h-2/3 w-full rounded-xl"/>
              <h2 className="font-medium text-2xl text-justify py-5">
                {chef.chef_bio}
              </h2>
            </div>
            <div>
              {chef.recipe_names.map((recipe) => (
                <h2 className="font-medium">&bull; {recipe}</h2>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefView;
