import React from "react";
import { NavLink } from "react-router-dom";
import Music from "../../imageAssets/Music.png"
import Culinary from "../../imageAssets/Cooking.png"
import Technology from "../../imageAssets/Technology.png"
import Fitness from "../../imageAssets/Fitness.png"
import Arts from "../../imageAssets/Arts.png"
import Speaking from "../../imageAssets/Public.png"


const Explore = () => {
  const Categories = [
    {
      id : 1,
      image: Music,
      title: "Music",
    },
    {
      id : 2,
      image: Culinary,
      title: "Culinary",
    },
    {
      id : 3,
      image: Technology,
      title: "Technology",
    },
    {
      id : 4,
      image: Fitness,
      title: "Fitness",
    },
    {
      id : 5,
      image: Arts,
      title: "Visual Arts",
    },
    {
      id : 6,
      image: Speaking,
      title: "Public Speaking",
    },
   
      
  ];
  return (
    <div className="hidden lg:flex flex-col items-center justify-center m-14">
      {/* explore skills upper div */}
      <h2 className="text-3xl font-bold text-black">Explore Skills</h2>
      {/* paragraph div */}
      <p className="my-4 mb-6 w-[50%] text-center">
        Discover thousands of on-demand classes in design, business, technology,
        photography, and more. Find what sparks your curiosity.
      </p>

      {/* all skill category grid */}
      <NavLink to="/explore">
        <div className="hidden lg:grid lg:grid-cols-6 lg:grid-rows-1 gap-24  mb-8">
          {Categories.map((category) => (
            // a particular skill
            <div
              key={category.id}
              className="w-40  hover:scale-110 transition-all ease-in-out duration-300"
            >
              {/* image  */}
              <img
                src={category.image}
                alt="category"
                loading="lazy"
                className="rounded-md object-cover"
              />
              {/* skill title */}
              <div className="flex justify-center items-center text-s">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default Explore;
