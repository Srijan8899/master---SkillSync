import React from "react";
import Categories from "../../dataAssets/Categories";
import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center m-14 mb-20 ">
      {/* explore skills upper div */}
      <h2 className="text-3xl font-bold text-black">Explore Skills</h2>
      {/* paragraph div */}
      <p className="my-4 mb-6 w-[50%] text-center">
        Discover thousands of on-demand classes in design, business, technology,
        photography, and more. Find what sparks your curiosity.
      </p>

      {/* all skill category grid */}
      <NavLink to="/explore">
        <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-24 m-10 w-[1080px] h-[300px] mb-8">
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
