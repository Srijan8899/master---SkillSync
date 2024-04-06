import React, { useState } from "react";

function CourseCreateForm() {
  const [courseData, setCourseData] = useState({
    courseName: "",
    description: "",
    thumbnail: null,
    price: "",
    skillCategory: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, thumbnail: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(courseData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md">
        <div className="px-8 py-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
            Create Course
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Course Name"
                value={courseData.courseName}
                onChange={(e) =>
                  setCourseData({ ...courseData, courseName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows="3"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Description"
                value={courseData.description}
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail
              </label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 p-2 block w-full border rounded-md"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Price"
                value={courseData.price}
                onChange={(e) =>
                  setCourseData({ ...courseData, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skill Category
              </label>
              <select
                className="mt-1 p-2 block w-full border rounded-md"
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    skillCategory: e.target.value,
                  })
                }
              >
                <option value="">Select Skill Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Programming">Programming</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Management">Management</option>
                <option value="Media">Media</option>
                <option value="Communication">Communication</option>
                <option value="Finance">Finance</option>
                <option value="Economics">Economics</option>
                <option value="Crytocurrency & Blockchain">Crytocurrency & Blockchain</option>
                <option value="Network & Security">Network & Security</option>
                <option value="Operating System">Operating System</option>
                <option value="Design">Design</option>
                <option value="Fitness">Fitness</option>
                <option value="Yoga">Yoga</option>
                <option value="Music">Music</option>
                <option value="Academics">Academics</option>
                <option value="Dance">Dance</option>
                <option value="Photography">Photography</option>
                <option value="Art & Craft">Art & Craft</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourseCreateForm;
