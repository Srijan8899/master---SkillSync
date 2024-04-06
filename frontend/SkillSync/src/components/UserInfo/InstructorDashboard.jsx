import React from 'react'
import { NavLink } from 'react-router-dom'

const InstructorDashboard = () => {
  return (
    <div>
      {" "}
      <div className="container min-h-screen mx-auto py-8">
        <div className="bg-white p-8">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to Your Dashboard
          </h1>

          <h2 className="text-2xl font-semibold mb-4">My Courses</h2>

          <div className="px-6 py-8">
            <h1 className="text-3xl font-semibold text-center mb-4">
              No Courses
            </h1>

            <div className="text-center mb-8">
              <p className="text-gray-700">
                You haven't created  any courses yet. Start your teaching
                journey now!
              </p>
            </div>

            <div className="flex justify-center">
              <NavLink to={"/createCourse"}>
                <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Create Courses
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorDashboard