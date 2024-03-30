import React from "react";
import Arts from "../../imageAssets/loginImage.jpg";

const CourseCards = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <img src={Arts} alt="Course Image" className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-white">
            Course Title
          </h2>
          <p className="text-sm text-white mb-4">
            Description of the course goes here.
          </p>
          <p className="text-lg text-white font-semibold mb-2">$99</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>

      {/* Code Repeated for understanting */}
     
    </div>
  );
};

export default CourseCards;
