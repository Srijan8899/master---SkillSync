import React from "react";
import Reviews from "../../dataAssets/Reviews";

const Testimonial = () => {
  return (
    // Testimonial components
    <div className="px-8 py-8 mx-auto max-w-screen-lg">
      {/* testimonial content */}
      <div className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-3xl font-bold">What Others Say About Us</h2>
        {/* testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8">
          {/* testimonial cards */}
          {Reviews.map((Review) => (
            <div
              key={Review.id}
              className="flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md p-6 gap-4  ease-in-out duration-300 hover:shadow-lg hover:border-blue-500 hover:scale-105"
            >
              {/* testimonial text */}
              <div className="text-gray-700 text-sm">{Review.description}</div>
              {/* testimonial avatar */}
              <div className="h-20 w-20">
                <img src={Review.avatar} alt="Avatar" />
              </div>
              {/* testimonial details */}
              <div className="flex flex-col items-center">
                <h3 className="text-base text-gray-900">{Review.name}</h3>
                <p className="text-gray-500 text-sm">{Review.Role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
