import React from "react";
import { IoSearch } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseCards from "./CourseCards";
const ExplorePage = () => {
  return (
    <div className="h-full w-full">
      <div className=" mx-auto  py-3 overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            Explore Skills
          </div>
        </div>
        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <div className="flex flex-col sm:flex-row">
            <a
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="#"
            >
              Categories
            </a>
            <a
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="#"
            >
              About
            </a>
          </div>
        </nav>
        <div className="relative mt-6 max-w-lg mx-auto mb-10">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <IoSearch size={20} />
          </span>

          <input
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* All Cards things are here */}

        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-medium text-gray-700 ml-6">
              Top Skill Courses
            </h3>
          </div>

          {/* cards */}
          <div className="h-full w-screen bg-gray-100">
            <CourseCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
