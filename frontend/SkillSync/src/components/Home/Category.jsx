import React from "react";
import {categories} from ".../Datafiles/Categories.js";

const CategorySection = () => {
  return (
    <div className="flex flex-col items-center justify-center m-14 mb-20 ">
      {/* explore skills upper div */}
      <h2 className="text-3xl font-bold text-black">Explore Skills</h2>
      {/* paragraph div */}
      <p className="my-4 mb-6 w-[50%] text-center">
        Discover thousands of on-demand classes in design, business, technology,
        photography, and more. Find what sparks your curiosity.
      </p>
      {/* button div */}
      <div className="flex items-center justify-center text-white bg-blue-500 lg:w-[10%] lg:h-9 sm:w-[10rem] sm:h-9 md:text-base rounded-full   hover:scale-110  hover:cursor-pointer transition-all ease-in-out duration-300">
        Explore all skills
      </div>

      {/* all skill category grid */}
      <div className="hidden lg:grid lg:grid-cols-6 lg:grid-rows-2 gap-24 m-10 w-[1080px] h-[300px] mb-8">
        {categories.map((category) => (
            // a particular skill
          <div key={category.id} className="w-40  hover:scale-110 transition-all ease-in-out duration-300" >
            {/* image  */}
            <img src={category.image} alt="category" loading="lazy" className="rounded-md object-cover"/>
            {/* skill title */}
             <div className="flex justify-center items-center text-s">{category.title}</div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
