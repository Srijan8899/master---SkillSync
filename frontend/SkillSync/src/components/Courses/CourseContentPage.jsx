import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function CourseContentPage() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetchCourses();
  }, []);

  const { token } = useContext(AuthContext);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/course/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseID: id }),
      });
      console.log(response);
      const data = await response.json();
      setData(data);

      console.log("data", data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const checkouthandler = async (amount) => {
    try {
      const getKeyResponse = await fetch(
        "http://localhost:8000/api/enroll/getkey"
      );
      const { key } = await getKeyResponse.json();

      const checkoutResponse = await fetch(
        "http://localhost:8000/api/enroll/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );
      const { order } = await checkoutResponse.json();

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "SkillSync",
        description: "Razorpay tutorial",
        order_id: order.id,
        callback_url: "http://localhost:8000/api/enroll/paymentverification",
        notes: {
          address: "razorapy official",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-2">
      {/* Course header */}
      {data && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center justify-between">
              <div className="mt-4 md:mt-0 md:ml-6">
                <h1 className="text-4xl font-semibold mb-4">{data.name}</h1>
                <p className="text-gray-600 mb-4 text-xl">
                  By {data.instructor.firstName} {data.instructor.lastName}
                </p>
                <p className="text-gray-600 mb-4 text-l">
                  Skill Category: {data.category}
                </p>

                <p className="font-semibold text-xl">Price: {data.price}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={data.thumbnail}
                  alt="Course Thumbnail"
                  className="w-full md:w-96 rounded-lg shadow-lg"
                />
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-2 focus:outline-none hover:bg-blue-600"
                  onClick={() => checkouthandler(data.price)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course content */}
      {data && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-6">Course Overview</h2>
            <p className="text-gray-700 mb-6">{data.desc}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">About Instructor</h3>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">
                    {data.instructor.firstName} {data.instructor.lastName}
                  </h4>
                  <p className="text-gray-600">
                    {data.instructor.profile.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseContentPage;
