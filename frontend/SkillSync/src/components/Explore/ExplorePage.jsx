import React, { useState, useEffect, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import CourseCards from "./CourseCards";
import { AuthContext } from "../../context/AuthContext";

const ExplorePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/category/explore",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  // bg-gradient-to-r from-blue-200 via-blue-100   to-blue-300
  return (
    <div className="h-full w-full       ">
      <div className=" mx-auto  py-3 overflow-hidden">
        <div className="flex items-center justify-between w-full">
          <div className="w-full text-gray-700 md:text-center text-4xl font-semibold">
            Explore Skills
          </div>
        </div>
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
        {/* Filter bars */}
        <div className="grid sm:grid-rows-1 sm:grid-cols-1 md:grid-row-2 md:grid-col-2 lg:grid-rows-3 lg:grid-cols-10 gap-2 mb-5">
          <button
            className={`flex items-center justify-center p-2 w-22 h-10 mx-2 rounded-md text-[9px] ${
              selectedCategory === "All" ? "bg-blue-700" : "bg-blue-500"
            } text-white `}
            onClick={() => {
              console.log("Selected category:", "All");
              setSelectedCategory("All");
            }}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center justify-center w-22 h-10 mx-2 rounded-md text-[11px] ${
                selectedCategory === category ? "bg-blue-700" : "bg-blue-500"
              } text-white`}
              onClick={() => {
                console.log("Selected category:", category);
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Cards things are here */}

        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-medium text-gray-700 ml-6">
              Top Skill Courses
            </h3>
          </div>

          {/* cards */}
          <div className="h-full w-screen">
            <CourseCards selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
