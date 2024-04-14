import React from 'react'
import { CiHeadphones } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa";

const Feature = () => {
  const Features = [
    {
      id: 1,
      title: "1. Choose a skill",
      description:
        "Select a class from our extensive catalog. Whether you're a beginner or a professional, we have something for you.",
    },
    {
      id: 2,
      title: "2. Learn from industry experts",
      description:
        "Each class has a series of video lessons that you can watch at your own pace. You can also ask questions and get feedback from the instructor.",
    },
  ];
  
  
  
  return (
    // feature container
    <div className="py-10 text-center bg-gray-100">
      {/* feature content */}
      <div className="max-w-[800px] mx-auto px-8">
        {/* main information upper title and para */}
        <div className="flex flex-col gap-4">
          {/* main title */}
          <h2 className="text-4xl font-bold">Our Competitive advantage</h2>
          {/* main description */}
          <p className="text-base">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of real written
            text but is random or otherwise generated.
          </p>
        </div>

        {/* feature grid */}

        <div className="grid lg:grid-cols-2 gap-8 mt-5 sm:grid-cols-1">
          {/* 6 card features using map function */}
          {Features.map((feature) => (
            // Feature card

            <div
              key={feature.id}
              className="flex flex-col justify-center items-center p-6 rounded-lg gap-4 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in bg-white">
              {/* icon container */}

              {/* feature svg */}
              {feature.id === 1 ? (
                <CiHeadphones size={30} />
              ) : (
                <FaHandshake size={30} />
              )}

              {/* feature information */}
              <div className="flex flex-col">
                {/* feature title */}
                <div className="text-black font-bold text-lg">
                  {feature.title}
                </div>
                {/* feature description */}
                <div className="text-black text-left text-sm">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature