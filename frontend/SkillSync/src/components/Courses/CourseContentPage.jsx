import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function CourseContentPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [enrolled, setEnrolled] = useState(true);

  useEffect(() => {
    checkEnrolled();
    fetchCourses();
  }, []);

  const { token } = useContext(AuthContext);
  const navigation = useNavigate();

  const checkEnrolled = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/user/check/enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ courseId: id }),
        }
      );
      const data = await response.json(); // Extract JSON data from the response
      console.log("response =>", data);

      // Check if user is enrolled in the course
      if (data.success) {
        setEnrolled(false);
      }
    } catch (error) {
      console.error("Error fetching checkEnrolled:", error);
    }
  };

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
        "http://localhost:8000/api/enroll/getkey",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { key } = await getKeyResponse.json();

      const checkoutResponse = await fetch(
        "http://localhost:8000/api/enroll/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
        handler: async function (response) {
          try {
            const paymentVerificationResponse = await fetch(
              "http://localhost:8000/api/enroll/paymentverification",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: order.id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  courseId: data._id,
                }),
              }
            );
            navigation("/dashboard");
          } catch (error) {
            console.error("Error verifying payment:", error);
            // Handle payment verification error
          }
        },
        notes: {
          address: "razorpay official",
        },
        prefill: {
          name: "SkillSync",
          email: "skillsync@gmail.com",
          contact: "1234567890",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data && (
        <div class="w-full h-full overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
          <div class="w-full flex flex-col items-center justify-center mt-4">
            <div class="space-y-3">
              <h5 class="text-sm font-medium uppercase text-gray-400">
                {data.category}
              </h5>
              <h1 class="text-3xl font-semibold">{data.name} </h1>
              <div className="flex flex-wrap">
                <ul class="sm:flex items-center text-sm text-gray-500 mb-2">
                  <li>
                    Created by{" "}
                    <a href="#" class="font-bold">
                      {" "}
                      {data.instructor.firstName} {data.instructor.lastName}
                    </a>
                  </li>
                  <span class="hidden sm:inline mx-3 text-2xl">·</span>
                  <li>Created at 01/2022</li>
                </ul>
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {data.enrolledStudents.length} Enrolled
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Price : ₹{data.price}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-5">
            <img
              src={data.thumbnail}
              alt={data.name}
              className=" object-cover rounded-2xl w-[500px] h-[300px] mx-auto"
            />
            {!enrolled && (
              <div className="w-full flex items-center justify-center">
                <span
                  className="flex justify-center items-center w-28 animate-bounce gap-1 mx-auto text-white bg-blue-600 py-2 px-4 rounded-xl shadow-md  transition duration-300 ease-in-out transform hover:bg-white hover:text-black mt-6 hover:cursor-pointer"
                  onClick={() => checkouthandler(data.price)}
                >
                  Enroll Now
                </span>
              </div>
            )}
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-semibold mb-6">Course Overview</h2>
              <p className="text-gray-700 mb-6">{data.desc}</p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-semibold mb-6">
                About Course Creator
              </h2>
              <h4 className="font-semibold mb-2">
                {" "}
                {data.instructor.firstName} {data.instructor.lastName}
              </h4>
              <p className="text-gray-700 mb-6">
                {data.instructor.profile.about}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseContentPage;
